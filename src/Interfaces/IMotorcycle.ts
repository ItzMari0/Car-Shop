interface IMotorcycle {
  id?: string
  model: string;
  year: number;
  color: string;
  status?: boolean | false;
  buyValue: number;
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number;
}

export default IMotorcycle;
