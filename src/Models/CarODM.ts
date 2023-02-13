import { Model, model, models, Schema, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import TypeError from '../Utils/TypeError';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.cars || model('cars', this.schema);
  }

  public async create(obj: ICar): Promise<ICar> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findOne(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new TypeError(422, 'Invalid mongo id');
    return this.model.findById(id);
  }
}

export default CarODM;
