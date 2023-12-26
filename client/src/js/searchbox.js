let hiLiteIndex = null;
let hiLitedDistrict = null;

const setInputVal = (districtName) => {
  sourceInputValue = removeBold(districtName);
  filteredDistricts = [];
  hiLiteIndex = null;
  document.querySelector("#district-input").focus();
};

const navigateDown = (index, length) => {
  return index < length - 1 ? (index === null ? 0 : index + 1) : index;
};

const navigateUp = (index, length) => {
  return index !== null ? (index === 0 ? length - 1 : index - 1) : index;
};

$: hiLitedDistrict = filteredDistricts[hiLiteIndex];

$: {
  if (e.key === "ArrowDown" && hiLiteIndex <= filteredDistricts.length - 1) {
    hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
  } else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
    hiLiteIndex === 0
      ? (hiLiteIndex = filteredDistricts.length - 1)
      : (hiLiteIndex -= 1);
  } else if (e.key === "Enter" || e.onclick) {
    setInputVal(filteredDistricts[hiLiteIndex]);
  }
}
