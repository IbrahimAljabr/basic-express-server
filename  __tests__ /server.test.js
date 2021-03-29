"use strict"

// Importing packages
const supertest = require("supertest");
const server = require("../src/server.js");

const request = supertest(server.server);

describe("Server", () => {

  it("invalid routes", async() => {
    const response = await request.get("/ayaklam");
    expect(response.status).toEqual(404);
  });

})