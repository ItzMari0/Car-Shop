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

const updatedData = {
  color: 'White',
  buyValue: 120, 
};

const updatedCar = {
  ...newCar,
  ...updatedData,
};

export {
  carList,
  wrongId,
  foundCar,
  newCar,
  updatedData,
  updatedCar,
};
