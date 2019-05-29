import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      // baseURL: "http://localhost:5000",
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  }



//     AUTH      \\
  signup(user) {
    const { username, password, description, email, pictureUrl } = user;
    return this.auth
      .post("/auth/signup", { username, password, description, email, pictureUrl })
      .then(({ data }) => data);
  }

  update(user) {
    const { username, password, description, email, pictureUrl } = user;
    return this.auth
      .put("/auth/:id/edit", { username, password, description, email, pictureUrl })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(response => response.data);
  }
  
  imageUpload (file) {
    return this.auth.post('/auth/picture', file)
    .then(({data}) => data)
  }
  
  me() {
    return this.auth.get("/auth/me").then(response => response.data);
  }
}



const auth = new Auth();

export default auth;
