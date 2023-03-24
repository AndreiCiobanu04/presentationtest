const getValueOrMax = (value: Number, max: Number): Number => {
  if (value > max) {
    return max;
  }
  return value;
};

export default getValueOrMax;
