function sortarrayString(arr) {
  for (var r = 0; r < arr.length; r++) {
    for (var u = r + 1; u < arr.length; u++) {
      if (arr[r] > arr[u]) {
        var temp = arr[r];
        arr[r] = arr[u];
        arr[u] = temp;
      }
    }
  }
  return arr;
}
var arr = [
  "c",
  "c++",
  "Python",
  "Ruby",
  "PHP",
  "Django",
  
];
console.log("input string:");
console.log(arr);
console.log("output sorted:");
console.log(sortarrayString(arr));
