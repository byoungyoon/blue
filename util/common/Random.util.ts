export const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

export const getRandomNum = (min: number, max: number) => Number((Math.random() * (max - min) + min).toFixed(0));
