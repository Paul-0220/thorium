function getMissingNo(a, n) {
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) total = total - a[i];
  return total;
}

let arr = [33, 34, 35, 37, 38];
let n = arr.length;
let miss = getMissingNo(arr, n);
console.log(miss);
