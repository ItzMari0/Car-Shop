import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty,
  }: ICar) {
    super({ id, model, year, color, status, buyValue });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  // public setId(id: string) {
  //   this.id = id;
  // }

  // public getId() {
  //   return this.id;
  // }

  // public setModel(model: string) {
  //   this.model = model;
  // }

  // public getModel() {
  //   return this.model;
  // }

  // public setYear(year: number) {
  //   this.year = year;
  // }

  // public getYear() {
  //   return this.year;
  // }

  // public setColor(color: string) {
  //   this.color = color;
  // }

  // public getColor() {
  //   return this.color;
  // }

  // public setStatus(status: boolean) {
  //   this.status = status;
  // }

  // public getStatus() {
  //   return this.status;
  // }

  // public setBuyValue(buyValue: number) {
  //   this.buyValue = buyValue;
  // }

  // public getBuyValue() {
  //   return this.buyValue;
  // }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;
