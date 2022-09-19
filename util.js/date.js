export const getFormatedDate = Date => {
  return `${Date.getFullYear()}-${Date.getMonth() + 1}-${Date.getDate()}`;
};
export const GetDayMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
