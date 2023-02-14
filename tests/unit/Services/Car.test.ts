import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';
import { carList, wrongId, foundCar, newCar, updatedData, updatedCar } from './Car.mock';
import TypeError from '../../../src/Utils/TypeError';

describe('Tests Car Service Layer', function () {
  it('should return an empty array when car list is empty', async function () {
    sinon.stub(Model, 'find').resolves([]);
    const service = new CarService();
    const list = await service.findAll();
    expect(list).to.be.deep.equal([]);
  });

  it('should return a car list', async function () {
    sinon.stub(Model, 'find').resolves(carList);
    const service = new CarService();
    const list = await service.findAll();
    expect(list).to.be.deep.equal(carList);
  });

  it('should return "Invalid mongo id" message when id input is invalid', async function () {
    sinon.stub(Model, 'findOne').resolves(undefined);
   
    try {
      const service = new CarService();
      await service.findOne(wrongId);
    } catch (error) {
      expect((error as TypeError).statusCode).to.be.equal(422);
      expect((error as TypeError).message).to.be.equal('Invalid mongo id');
    }
  });

  it('should return "Car not found" message when id is not found', async function () {
    sinon.stub(Model, 'findOne').resolves(undefined);
   
    try {
      const service = new CarService();
      await service.findOne('63eacb588640e35558f743f1');
    } catch (error) {
      expect((error as TypeError).statusCode).to.be.equal(404);
      expect((error as TypeError).message).to.be.equal('Car not found');
    }
  });

  it('should return the car with valid id input', async function () {
    sinon.stub(Model, 'findOne').resolves(foundCar);
    const service = new CarService();
    const car = await service.findOne('63eacbf28640e35558f743fb');
    expect(car).to.be.deep.equal(foundCar);
  });

  it('should insert a new car data into the list', async function () {
    sinon.stub(Model, 'create').resolves(newCar);
    const service = new CarService();
    const car = await service.createCar(newCar);
    expect(car).to.be.deep.equal(newCar);
  });

  describe('Tests the Update function', function () {
  
    it('should update the car data', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);
      sinon.stub(Model, 'findOne').resolves(updatedCar);
      const service = new CarService();
      const car = await service.updateCar('63ead64c8640e35558f743fd', updatedData);
      expect(car).to.be.deep.equal(updatedCar);
    });

    it('should return "Invalid mongo id" message when updating with invalid id', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(undefined);
      
      try {
        const service = new CarService();
        await service.updateCar(wrongId, updatedData);
      } catch (error) {
        expect((error as TypeError).statusCode).to.be.equal(422);
        expect((error as TypeError).message).to.be.equal('Invalid mongo id');
      }
    });

    it('should return "Car not found" message when updating with wrong id', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(undefined);
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        const service = new CarService();
        await service.updateCar('63ead64c8640e35558f743fa', updatedData);
      } catch (error) {
        expect((error as TypeError).statusCode).to.be.equal(404);
        expect((error as TypeError).message).to.be.equal('Car not found');
      }
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});