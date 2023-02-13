import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarODM';

class CarService {
  private model: CarModel = new CarModel();
  private carDomain(car: ICar | null): Car | null {
    if (car) {
      const newCar = new Car(car);
      return newCar;
    }
    return null;
  }

  public async createCar(car: ICar) {
    const newCar = await this.model.create(car);
    return this.carDomain(newCar);
  }
}

export default CarService;
