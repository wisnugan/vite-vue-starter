import endPoint from "./apiConfig";

class api {
  // auth
  signin(data) {
    return endPoint.post("/api_cg/auth/signin", data);
  }
}

export default new api();
