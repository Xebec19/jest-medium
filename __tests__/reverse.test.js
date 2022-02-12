const request = require("supertest");
const app = require("../app");

describe("Test the route(s)", () => {
  test("It should reverse a string", async () => {
    const message = "lorem ipsum";
    const reverse = message.split("").reverse().join("");
    const response = await request(app)
                    .post("/reverse")
                    .send({ message });
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe(reverse);
  });
});
