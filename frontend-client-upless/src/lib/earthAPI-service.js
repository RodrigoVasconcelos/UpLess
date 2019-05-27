import axios from "axios";

class Material {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000/material",
      withCredentials: true
    });
  }



  getAll() {
    return this.auth.get("/all")
      .then(({ data }) => data);
  }

  
  
  

}



const material = new Material();

export default material;
