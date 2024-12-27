export interface BikeModel {
  id: string;
  name: string;
  image: string;
  price: number;
  specs: {
    engine: string;
    power: string;
    torque: string;
    weight: string;
  };
  description: string;
}