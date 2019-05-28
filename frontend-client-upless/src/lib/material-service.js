import axios from "axios";

class Material {
  constructor() {
    this.material = axios.create({
      baseURL: "http://localhost:5000/material",
      withCredentials: true
    });
  }



  getAll() {
    return this.material.get("/all")
      .then(({ data }) => data);
  }
  
  getMaterial() {
    return this.material.get('/:id')
      .then( ({data}) => data);
  }

  update(material) {
    const { name, description, amount, price, photo } = material;

    return this.material
      .put('/:id/edit', { name, description, amount, price, photo })
      .then( ({data}) => data);
  }

  addMaterial(material) {
    const { name, description, amount, price, photo } = material;
    return this.material
      .post("/add-material", { name, description, amount, price, photo })
      .then(({ data }) => data);
  }

  imageUploadMaterial (file) {
    return this.material
      .post('/photo', file)
      .then(({data}) => data)
  }

}

const material = new Material();
export default material;
