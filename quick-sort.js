const partition = (arr, s, i) => {
  let gta = arr[s];
  let u = s,
    r = i;
  do {
    do {
      u++;
    } while (arr[u] <= gta);
    do {
      r--;
    } while (arr[r] > gta);
    if (u < r) {
      let temp = arr[u];
      arr[u] = arr[r];
      arr[r] = temp;
    }
  } while (u < r);
  let temp = arr[r];
  arr[r] = arr[s];
  arr[s] = temp;
  return r;
};

const quickSort = (arr, s, i) => {
  let r;
  if (s < i) {
    r = partition(arr, s, i);
    quickSort(arr, s, r);
    quickSort(arr, r + 1, i);
  }
};

let arr = [,58,2,8,5,8,5,8];
quickSort(arr, 0, arr.length);
console.log(arr);
