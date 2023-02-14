const carList = [
  {
    id: '63eacb588640e35558f743f7',
    model: 'Fusca',
    year: 1970,
    color: 'White',
    status: true,
    buyValue: 10,
    doorsQty: 2,
    seatsQty: 2,
  },
  {
    id: '63eacbae8640e35558f743f9',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63eacbf28640e35558f743fb',
    model: 'C4 lounge THP',
    year: 2017,
    color: 'Pearl White',
    status: true,
    buyValue: 69.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

const motorcycleList = [
  {
    id: '63ebe1b071330a65ace5b491',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
  },
];

const wrongId = '63eacbf28640e35558f743';

const foundCar = {
  id: '63eacbf28640e35558f743fb',
  model: 'C4 lounge THP',
  year: 2017,
  color: 'Pearl White',
  status: true,
  buyValue: 69.99,
  doorsQty: 4,
  seatsQty: 5,
};

const foundMotorcycle = {
  id: '63ebe1b071330a65ace5b491',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

const newCar = {
  id: '63ead64c8640e35558f743fd',
  model: 'WRX',
  year: 2016,
  color: 'Blue',
  status: true,
  buyValue: 140,
  doorsQty: 4,
  seatsQty: 5,
};

const newMotorcycle = {
  id: '63ebe3ab71330a65ace5b493',
  model: 'Ducati Diavel 1260 S',
  year: 2023,
  color: 'Black',
  status: true,
  buyValue: 132.99,
  category: 'Street',
  engineCapacity: 1.262,
};

const updatedData = {
  color: 'White',
  buyValue: 120, 
};

const updatedCar = {
  ...newCar,
  ...updatedData,
};

const updatedMotorcycle = {
  ...newMotorcycle,
  ...updatedData,
};

export {
  carList,
  wrongId,
  foundCar,
  newCar,
  updatedData,
  updatedCar,
  motorcycleList,
  foundMotorcycle,
  newMotorcycle,
  updatedMotorcycle,
};
