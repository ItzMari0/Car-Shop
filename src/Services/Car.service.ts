import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarODM';
import TypeError from '../Utils/TypeError';

const notFound = 'Car not found';

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

  public async findAll() {
    const cars = await this.model.findAll();
    const result = cars.map((list) => this.carDomain(list));
    return result;
  }

  public async findOne(id: string) {
    const car = await this.model.findOne(id);
    if (!car) throw new TypeError(404, notFound);
    return this.carDomain(car);
  }

  public async updateCar(id: string, obj: Partial<ICar>) {
    const car = await this.model.findOne(id);
    if (!car) throw new TypeError(404, notFound);
    const update = await this.model.update(id, obj);
    return this.carDomain(update);
  }

  public async deleteCar(id: string) {
    const car = await this.model.findOne(id);
    if (!car) throw new TypeError(404, notFound);
    await this.model.delete(id);
  }
}

export default CarService;
