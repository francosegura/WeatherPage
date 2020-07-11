import moment from "moment";

export const getDateFromTimestamp = (ts: number): string =>
  moment(ts * 1000).format("DD/MM/YYYY");

export const getDayOfTheWeek = (ts: number): string =>
  moment.weekdays(moment(ts * 1000).day());
