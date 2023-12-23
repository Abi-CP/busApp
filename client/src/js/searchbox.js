
const setInputVal = (districtName) => {
    sourceInputValue = removeBold(districtName);
    filteredDistricts = [];
    hiLiteIndex = null;
    // @ts-ignore
    document.querySelector("#district-input").focus();
  };


/* NAVIGATING OVER THE LIST OF DISTRICTS W HIGHLIGHTING */
  let hiLiteIndex = null;
  //$: console.log(hiLiteIndex);
  $: hiLitedDistrict = filteredDistricts[hiLiteIndex];

  const navigateList = (e) => {
    if (e.key === "ArrowDown" && hiLiteIndex <= filteredDistricts.length - 1) {
      hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
    } else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
      hiLiteIndex === 0
        ? (hiLiteIndex = filteredDistricts.length - 1)
        : (hiLiteIndex -= 1);
    } else if (e.key === "Enter") {
      setInputVal(filteredDistricts[hiLiteIndex]);
    } else {
      return;
    }
  };