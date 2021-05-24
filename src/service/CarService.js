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

    return data;
  }

  async add(newCar) {
    await this.client.post("api/cars", {
      brand: newCar.brand,
      model: newCar.model,
      year: newCar.year,
      maxSpeed: newCar.maxSpeed,
      numberOfDoors: newCar.numberOfDoors,
      isAutomatic: newCar.isAutomatic,
      engine: newCar.engine,
    });
  }
}
export default new CarService();
