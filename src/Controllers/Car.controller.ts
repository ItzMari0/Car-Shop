import { Response, Request, NextFunction } from 'express';
import CarService from '../Services/Car.service';
import ICar from '../Interfaces/ICar';
import TypeError from '../Utils/TypeError';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
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

  public async updateCar(): Promise<Response | undefined> {
    try {
      const data = this.req.body;
      const { id } = this.req.params;
      const result = await this.service.updateCar(id, data);
      return this.res.status(200).json(result);
    } catch (error) {
      if (error instanceof TypeError) {
        return this.res.status(error.statusCode).json({ message: error.message });
      }
    }
  }
}

export default CarController;
