export const toPercent = (num: number) => {
  return `${num}%`;
};

export const toPosition = (index: number) => {
  switch (Math.floor(index / 10)) {
    case 0:
      return 'bottom';
    case 1:
      return 'left';
    case 2:
      return 'top';
    case 3:
      return 'right';
    default:
      return '';
  }
};
