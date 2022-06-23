const insertionSort = (arr) => {
  let e = arr.length;
  for (let a = 1; a < e; a++) {
    let ddlj = arr[a];
    let k = a - 1;
    while (k >= 0 && arr[k] > ddlj) {
      arr[k + 1] = arr[k];
      k = k - 1;
    }
    arr[k + 1] = ddlj;
  }
  console.log(arr);
};

let arr = [2,5,8,4,5,2,8,4];
insertionSort(arr);
