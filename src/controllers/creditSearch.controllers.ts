import postCreditSearchByNameAndAddress from "../models/creditSearch.models";

const postCreditSearch = (req, res, next) => {
  const { surname, address, postcode } = req.body;
  const containsAFlat = /Flat/.test(address);

  postCreditSearchByNameAndAddress(surname, address, postcode, containsAFlat)
    .then((creditSummary) => {
      res.send(creditSummary);
    })
    .catch(next);
};

export default postCreditSearch;
