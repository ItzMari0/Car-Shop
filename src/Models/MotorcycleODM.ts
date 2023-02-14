import { Model, model, models, Schema, isValidObjectId, UpdateQuery } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import TypeError from '../Utils/TypeError';

class MotorcycleODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;
  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.motorcycles || model('motorcycles', this.schema);
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async findOne(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new TypeError(422, 'Invalid mongo id');
    return this.model.findById(id);
  }

  public async updateMotorcycle(
    id: string,
    obj: Partial<IMotorcycle>,
  ): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new TypeError(422, 'Invalid mongo id');
    return this.model.findByIdAndUpdate(
      { _id: id }, 
      { ...obj } as UpdateQuery<IMotorcycle>,
      { new: true },
    );
  }
}

export default MotorcycleODM;
