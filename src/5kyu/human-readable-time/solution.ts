const pad = (num: number): string => {
  const s = '00' + num;
  return s.substr(s.length - 2);
};
export const humanReadable = (seconds: number): string => {
  const date = new Date(seconds * 1000);

  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(
    date.getUTCSeconds()
  )}`;
};
