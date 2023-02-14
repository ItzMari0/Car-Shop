import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoute from './Routes/car.route';
import motorcycleRoute from './Routes/motorcycle.route';

const app = express();
app.use(express.json());

app.use(carRoute);
app.use(motorcycleRoute);
app.use(ErrorHandler.handle);

export default app;
