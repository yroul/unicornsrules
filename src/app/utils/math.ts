export const random = function (min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
};
