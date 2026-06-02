import { RestClient } from "../restClient";

export class Account extends RestClient {
  
  createUser(data) {
    const request = {
      url: "/api/auth/signup",
      data: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    this.lastRequest = request;
    return this.post(request);
  } 

  loginUser(data) {
    const request = {
      url: "/api/auth/signin",
      data: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    this.lastRequest = request;
    return this.post(request);
  }

  wrongUrlRequest() {
    const request = {
      url: "/api/auth/wrong-url",
    };
    this.lastRequest = request;
    return this.get(request);
  }
}
