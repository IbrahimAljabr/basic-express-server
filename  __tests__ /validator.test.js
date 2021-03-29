"use strict"

const supertest = require("supertest");
const server = require("../src/server.js");

const request = supertest(server.server);

describe("Server is here", () => {

  it("server error", async() => {
    const response = await request.get("/person");
    expect(response.status).toEqual(500);
  });

  it("valid query name", async() => {
    const response = await request.get("/person?name=tr");
    expect(response.status).toEqual(200);
    expect(response.body).toStrictEqual({name: "tr"});
  });
})