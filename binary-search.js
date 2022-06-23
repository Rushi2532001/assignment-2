const a = (arr, key) => {
  let b = 0,
    pin = arr.length - 1,
    great;
  while (b <= pin) {
    great = parseInt((b + pin) / 2);
    if (arr[great] == key) {
      console.log(
        `element ${key} is found at position ${great} in given array [${arr}]`
      );
      return great;
    } else if (arr[great] > key) {
      pin = great - 1;
    } else {
      b = great + 1;
    }
  }
  return "element not found";
};

console.log(a([11, 10, 9, 8], 55));
