import { Model, model, models, Schema, isValidObjectId, UpdateQuery } from 'mongoose';
import TypeError from '../Utils/TypeError';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new TypeError(422, 'Invalid mongo id');
    return this.model.findById(id);
  }

  public async update(id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw new TypeError(422, 'Invalid mongo id');
    return this.model.findByIdAndUpdate(
      { _id: id }, 
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default AbstractODM;
