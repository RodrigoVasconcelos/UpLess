import axios from "axios";

class Material {
  constructor() {
    this.material = axios.create({
      // baseURL: "http://localhost:5000/material",
      baseURL: `${process.env.REACT_APP_API_URL}/material`,
      withCredentials: true
    });
  }



  getAll() {
    return this.material.get("/all")
      .then(({ data }) => data);
  }
  
  getMaterial(id) {
    return this.material.get(`/${id}`)
      .then( ({data}) => data);
  }

  update(material) {
    const { name, description, amount, price, photo, category } = material;

    return this.material
      .put('/:id/edit', { name, description, amount, price, photo, category })
      .then( ({data}) => data);
  }

  addMaterial(material) {
    const { name, description, amount, price, photo, category } = material;
    return this.material
      .post("/add-material", { name, description, amount, price, photo, category })
      .then(({ data }) => data);
  }

  imageUploadMaterial (file) {
    return this.material
      .post('/photo', file)
      .then(({data}) => data)
  }

  deleteMaterial(id) {
    console.log('hey');
    
    return this.material.delete(`/${id}/delete`)
      .then( ({data}) => data);
  }

}

const material = new Material();
export default material;
