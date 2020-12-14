import axios from "axios";

const postCreditSearchByNameAndAddress = (
  surname,
  address,
  postcode,
  containsAFlat
) => {
  let address1 = address;
  let address2 = "";
  if (containsAFlat) {
    address1 = address.slice(0, 6);
    address2 = address.slice(7);
  }
  return axios
    .post("https://developer-test-service-2vfxwolfiq-nw.a.run.app/addresses", {
      address1: address1,
      address2: address2,
      postcode: postcode,
    })
    .then(({ data }) => {
      return axios
        .post(
          "https://developer-test-service-2vfxwolfiq-nw.a.run.app/creditors",
          {
            surname: surname,
            addressId: data[0].id,
          }
        )
        .then(({ data }) => {
          const creditObject = {
            totalCreditorValue: 0,
            securedCreditorValue: 0,
            unsecuredCreditorValue: 0,
            qualifies: false,
          };
          let unsecuredCount = 0;
          data.forEach((creditor) => {
            creditObject.totalCreditorValue += creditor.value;
            if (creditor.secured === false) {
              unsecuredCount++;
              creditObject.unsecuredCreditorValue += creditor.value;
            } else {
              creditObject.securedCreditorValue += creditor.value;
            }
          });
          if (
            unsecuredCount >= 2 &&
            creditObject.unsecuredCreditorValue >= 500000
          )
            creditObject.qualifies = true;
          return creditObject;
        });
    });
};

export default postCreditSearchByNameAndAddress;
