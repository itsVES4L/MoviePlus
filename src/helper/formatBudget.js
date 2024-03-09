const formatBudget = (number) => {
  if (number >= 1e9) {
    return `$${(number / 1e9).toFixed(0)}` + "B";
  } else if (number >= 1e6) {
    return `$${(number / 1e6).toFixed(0)}` + "M";
  } else if (number >= 1e3) {
    return `$${(number / 1e3).toFixed(0)}` + "K";
  } else {
    return "$?";
  }
};
export default formatBudget;
