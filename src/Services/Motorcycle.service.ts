import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleODM';
import TypeError from '../Utils/TypeError';

class MotorcycleService {
  private model: MotorcycleModel = new MotorcycleModel();
  private motorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      const newMotorcycle = new Motorcycle(motorcycle);
      return newMotorcycle;
    }
    return null;
  }

  public async createMotorcycle(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return this.motorcycleDomain(newMotorcycle);
  }

  public async findAll() {
    const motorcycles = await this.model.findAll();
    const result = motorcycles.map((list) => this.motorcycleDomain(list));
    return result;
  }

  public async findOne(id: string) {
    const motorcycle = await this.model.findOne(id);
    if (!motorcycle) throw new TypeError(404, 'Motorcycle not found');
    return this.motorcycleDomain(motorcycle);
  }

  public async updateMotorcycle(id: string, obj: Partial<IMotorcycle>) {
    const motorcycle = await this.model.findOne(id);
    if (!motorcycle) throw new TypeError(404, 'Motorcycle not found');
    const update = await this.model.update(id, obj);
    return this.motorcycleDomain(update);
  }
}

export default MotorcycleService;
