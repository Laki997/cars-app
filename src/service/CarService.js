import axios from "axios";
class CarService {
  constructor() {
    const instance = axios.create({
      baseURL: "http://localhost:3000/",
    });
    this.client = instance;
  }
  async getAll() {
    const { data } = await this.client.get("api/cars");
    console.log(data);
    return data;
  }
}
export default new CarService();
