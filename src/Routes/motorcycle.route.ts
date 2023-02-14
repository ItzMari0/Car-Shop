import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';

const routes = Router();
const motorcycleId = '/motorcycles/:id';

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  motorcycleId,
  (req, res, next) => new MotorcycleController(req, res, next).findOne(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);

routes.put(
  motorcycleId,
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycle(),
);

routes.delete(
  motorcycleId,
  (req, res, next) => new MotorcycleController(req, res, next).deleteMotorcycle(),
);

export default routes;