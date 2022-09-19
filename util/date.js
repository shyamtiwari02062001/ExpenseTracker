export const getFormatedDate = Date => {
  return Date.toISOString().slice(0, 10);
};
export const GetDayMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
