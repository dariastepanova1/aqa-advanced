import { Account } from "../api-lesson-15";
import { jest } from "@jest/globals";

const account = new Account();

//Some practice with qaauto
test("Create user - success basic scenario", async () => {
  const response = await account.createUser({
    name: "John",
    lastName: "Smith",
    email: `john.smith${Date.now()}@mail.com`,
    password: "Password123!",
    repeatPassword: "Password123!",
  });

  expect(response.status).toBe(201);
  expect(response.data.data).toHaveProperty("userId");
});

//Some practice with qaauto
test("Login user - success basic scenario", async () => {
  const email = `john.smith${Date.now()}@mail.com`;
  await account.createUser({
    name: "John",
    lastName: "Smith",
    email: email,
    password: "Password123!",
    repeatPassword: "Password123!",
  });

  const response = await account.loginUser({
    email: email,
    password: "Password123!",
    remember: false,
  });

  expect(response.status).toBe(200);
  expect(response.data.data).toHaveProperty("userId");
});

//HW - task1
test("Wrong URL request", async () => {
  const response = await account.wrongUrlRequest();

  expect(response.status).toBe(404);
  expect(response.data.message).toBe("Not found");
});

//HW - task2
test("Create user - request validation", async () => {
  const email = `john.smith${Date.now()}@mail.com`;

  const userData = {
    name: "John",
    lastName: "Smith",
    email,
    password: "Password123!",
    repeatPassword: "Password123!",
  };

  const response = await account.createUser(userData);
  const request = account.lastRequest;

  //check parameters of request
  expect(request.data).toEqual(userData);

  //check headers of request
  expect(request.headers).toMatchObject({
    "Content-type": "application/json; charset=UTF-8",
  });
});

//HW - task3
test("Create user - mocked success scenario", async () => {
  const mockResponse = {
    status: 201,
    data: { data: { userId: 1 } },
  };

  jest.spyOn(account, "post").mockResolvedValue(mockResponse);

  const userData = {
    name: "John",
    lastName: "Smith",
    email: `john.smith${Date.now()}@mail.com`,
    password: "Password123!",
    repeatPassword: "Password123!",
  };

  const response = await account.createUser(userData);

  // response check
  expect(response.status).toBe(201);
  expect(response.data.data.userId).toBe(1);
});

//create user - failed scenario
test("Create user - mocked failed scenario", async () => {
  const mockResponse = {
    status: 400,
    data: { message: "Email already exists" },
  };

  jest.spyOn(account, "post").mockResolvedValue(mockResponse);

  const userData = {
    name: "John",
    lastName: "Smith",
    email: `john.smith${Date.now()}@mail.com`,
    password: "Password123!",
    repeatPassword: "Password123!",
  };

  const response = await account.createUser(userData);

  // response check
  expect(response.status).toBe(400);
  expect(response.data.message).toBe("Email already exists");
});
