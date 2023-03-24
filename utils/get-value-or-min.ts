const getValueOrMin = (value: Number, min: Number): Number => {
    if (value < min) {
        return min;
    }
    return value;
};

export default getValueOrMin;
