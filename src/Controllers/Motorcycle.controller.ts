import { Response, Request, NextFunction } from 'express';
import MotorcycleService from '../Services/Motorcycle.service';
import IMotorcycle from '../Interfaces/IMotorcycle';
import TypeError from '../Utils/TypeError';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.createMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll(): Promise<Response> {
    const result = await this.service.findAll();
    return this.res.status(200).json(result);
  }

  public async findOne(): Promise<Response | undefined> {
    try {
      const { id } = this.req.params;
      const result = await this.service.findOne(id);
      return this.res.status(200).json(result);
    } catch (error) {
      if (error instanceof TypeError) {
        return this.res.status(error.statusCode).json({ message: error.message });
      }
    }
  }

  public async updateMotorcycle(): Promise<Response | undefined> {
    try {
      const data = this.req.body;
      const { id } = this.req.params;
      const result = await this.service.updateMotorcycle(id, data);
      return this.res.status(200).json(result);
    } catch (error) {
      if (error instanceof TypeError) {
        return this.res.status(error.statusCode).json({ message: error.message });
      }
    }
  }

  public async deleteMotorcycle(): Promise<Response | undefined> {
    try {
      const { id } = this.req.params;
      await this.service.deleteMotorcycle(id);
      return this.res.status(204).json();
    } catch (error) {
      if (error instanceof TypeError) {
        return this.res.status(error.statusCode).json({ message: error.message });
      }
    }
  }
}

export default MotorcycleController;
