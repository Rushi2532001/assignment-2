const merge = (arr1, arr2) => {
  let r = [],
    u = 0;
  u = 0;
  while (u < arr1.length && u < arr2.length) {
    if (arr1[u] < arr2[u]) {
      r.push(arr1[u]);
      u++;
    } else {
      r.push(arr2[u]);
      u++;
    }
  }
  if (arr1[u]) {
    let rem = arr1.slice(u);
    for (let i = 0; i < rem.length; i++) {
      r.push(rem[i]);
    }
  }
  if (arr2[u]) {
    let rem = arr2.slice(u);
    for (let i = 0; i < rem.length; i++) {
      r.push(rem[i]);
    }
  }
  return r;
};

let mergeSort = (arr) => {
  let s = arr.length;
  if (s <= 1) {
    return arr;
  }
  let h = Math.floor(s / 2);
  let i = arr.slice(0, h);
  let k = arr.slice(h);
  return merge(mergeSort(i), mergeSort(k));
};

let arr = [,15,9,,58,,585,69,59];
console.log(mergeSort(arr));
