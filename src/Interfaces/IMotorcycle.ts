interface IMotorcycle {
  id?: string
  model: string;
  year: number;
  color: string;
  status?: boolean | false;
  buyValue: number;
  category: string;
  engineCapacity: number;
}

export default IMotorcycle;
