const request = require("supertest");

import app from "../server";

test("Test `Rogers` total creditor value", async () => {
  const res = await request(app).post("/credit-search").send({
    surname: "Rogers",
    address: "Flat 1 7 Ascot Park Street",
    postcode: "L9 7AR",
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      totalCreditorValue: 5556640,
    })
  );
});

test("Test `Rogers` secured creditor value", async () => {
  const res = await request(app).post("/credit-search").send({
    surname: "Rogers",
    address: "Flat 1 7 Ascot Park Street",
    postcode: "L9 7AR",
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      securedCreditorValue: 0,
    })
  );
});

test("Test `Rogers` unsecured creditor value", async () => {
  const res = await request(app).post("/credit-search").send({
    surname: "Rogers",
    address: "Flat 1 7 Ascot Park Street",
    postcode: "L9 7AR",
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      unsecuredCreditorValue: 5556640,
    })
  );
});

test("Test `Rogers` qualifies value", async () => {
  const res = await request(app).post("/credit-search").send({
    surname: "Rogers",
    address: "Flat 1 7 Ascot Park Street",
    postcode: "L9 7AR",
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      qualifies: true,
    })
  );
});
