import endPoint from "./apiConfig";

class api {
  // auth
  signin(data) {
    return endPoint.post("/api_cg/auth/signin", data);
  }
  me() {
    return endPoint.get("/api_cg/auth/me");
  }
  signout() {
    return endPoint.get("/api_cg/auth/signout");
  }
}

export default new api();
