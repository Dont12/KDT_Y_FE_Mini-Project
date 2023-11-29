const dayOfWeekArr = ['일', '월', '화', '수', '목', '금', '토'];
export const getDayOfWeek = (date: string) => {
  const dayOfWeek = new Date(date).getDay();

  return dayOfWeekArr[dayOfWeek];
};

export const convertDateWithoutYear = (yyyymmdd: string) => {
  const month = yyyymmdd.slice(5, 7);
  const date = yyyymmdd.slice(8, 10);

  const dateWithoutYear = `${month}.${date}`;

  return dateWithoutYear;
};

export const convertDateWithYear = (yyyymmdd: string) => {
  const year = yyyymmdd.slice(0, 4);
  const month = yyyymmdd.slice(5, 7);
  const date = yyyymmdd.slice(8, 10);

  const dateWithYear = `${year}.${month}.${date}`;

  return dateWithYear;
};

export const convertFullDate = (yyyymmdd: string) => {
  const year = yyyymmdd.slice(0, 4);
  const month = yyyymmdd.slice(5, 7);
  const date = yyyymmdd.slice(8, 10);

  const dateWithYear = `${year}.${month}.${date} (${getDayOfWeek(yyyymmdd)})`;

  return dateWithYear;
};
