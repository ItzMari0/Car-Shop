import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/Motorcycle.service';
import TypeError from '../../../src/Utils/TypeError';
import { wrongId,
  foundMotorcycle,
  newMotorcycle,
  updatedData,
  motorcycleList, 
  updatedMotorcycle,
} from './mocks';

describe('Tests Motorcycle Service Layer', function () {
  it('should return an empty array when motorcycle list is empty', async function () {
    sinon.stub(Model, 'find').resolves([]);
    const service = new MotorcycleService();
    const list = await service.findAll();
    expect(list).to.be.deep.equal([]);
  });

  it('should return a motorcycle list', async function () {
    sinon.stub(Model, 'find').resolves(motorcycleList);
    const service = new MotorcycleService();
    const list = await service.findAll();
    expect(list).to.be.deep.equal(motorcycleList);
  });

  it('should return "Invalid mongo id" message when id input is invalid', async function () {
    sinon.stub(Model, 'findOne').resolves(undefined);
   
    try {
      const service = new MotorcycleService();
      await service.findOne(wrongId);
    } catch (error) {
      expect((error as TypeError).statusCode).to.be.equal(422);
      expect((error as TypeError).message).to.be.equal('Invalid mongo id');
    }
  });

  it('should return "Motorcycle not found" message when id is not found', async function () {
    sinon.stub(Model, 'findOne').resolves(undefined);
   
    try {
      const service = new MotorcycleService();
      await service.findOne('63eacb588640e35558f743f1');
    } catch (error) {
      expect((error as TypeError).statusCode).to.be.equal(404);
      expect((error as TypeError).message).to.be.equal('Motorcycle not found');
    }
  });

  it('should return the motorcycle with valid id input', async function () {
    sinon.stub(Model, 'findOne').resolves(foundMotorcycle);
    const service = new MotorcycleService();
    const car = await service.findOne('63ebe1b071330a65ace5b491');
    expect(car).to.be.deep.equal(foundMotorcycle);
  });

  it('should insert a new motorcycle data into the list', async function () {
    sinon.stub(Model, 'create').resolves(newMotorcycle);
    const service = new MotorcycleService();
    const motorcycle = await service.createMotorcycle(newMotorcycle);
    expect(motorcycle).to.be.deep.equal(newMotorcycle);
  });

  describe('Tests the Update function', function () {
    it('should update the motorcycle data', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMotorcycle);
      sinon.stub(Model, 'findOne').resolves(updatedMotorcycle);
      const service = new MotorcycleService();
      const car = await service.updateMotorcycle('63ebe3ab71330a65ace5b493', updatedData);
      expect(car).to.be.deep.equal(updatedMotorcycle);
    });

    it('should return "Invalid mongo id" message when updating with invalid id', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(undefined);
      
      try {
        const service = new MotorcycleService();
        await service.updateMotorcycle(wrongId, updatedData);
      } catch (error) {
        expect((error as TypeError).statusCode).to.be.equal(422);
        expect((error as TypeError).message).to.be.equal('Invalid mongo id');
      }
    });

    it('should return "Motorcycle not found" after updating with wrong id', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(undefined);
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        const service = new MotorcycleService();
        await service.updateMotorcycle('63ead64c8640e35558f743fa', updatedData);
      } catch (error) {
        expect((error as TypeError).statusCode).to.be.equal(404);
        expect((error as TypeError).message).to.be.equal('Motorcycle not found');
      }
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});