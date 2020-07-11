import { Moment } from "moment";

export interface Weather {
  date: Moment;
  description: string;
  icon: string;
  tempMin: number;
  tempMax: number;
  humidity: number;
}
