const handleChanges = (times, format, type, index) => {
  let value = parseInt(times[index]);
  if (type === "up") {
    if (index === 0) {
      value = value === 23 ? 0 : value + 1;
    } else if (index === 1) {
      value = value === 59 ? 0 : value + 1;
    } else if (index === 2 && format === "h:i:s") {
      value = value === 59 ? 0 : value + 1;
    }
  } else if (type === "down") {
    if (index === 0) {
      value = value === 0 ? 23 : value - 1;
    } else if (index === 1) {
      value = value === 0 ? 59 : value - 1;
    } else if (index === 2 && format === "h:i:s") {
      value = value === 0 ? 59 : value - 1;
    }
  }
  return value;
};
export { handleChanges };
