interface IVehicle {
  id?: string
  model: string;
  year: number;
  color: string;
  status?: boolean | false;
  buyValue: number;
}

export default IVehicle;
