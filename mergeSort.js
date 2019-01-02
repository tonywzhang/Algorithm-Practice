let assert = require('assert');

var mergeSort = function(arr){
  if(arr.length < 2) return arr;

  let mid_idx = Math.floor(arr.length/2);

  let leftSlice = arr.slice(0, mid_idx);
  let rightSlice = arr.slice(mid_idx);

  let leftSorted = mergeSort(leftSlice);
  let rightSorted = mergeSort(rightSlice);

  return merge(leftSorted, rightSorted);
};

var merge = function(arr1, arr2){
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length){
    if(arr1[0] <= arr2[0]){
      result.push(arr1[i]);
      i += 1;
    } else {
      result.push(arr2[j]);
      j+=1;
    }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
};

let arr = [];
for(let i = 500000; i >= 0 ; i--){
  arr.push(i);
}

// return idx, or -1 if doesnt exist

var bSearch = function(arr, target, left, right){
  assert(left <= right);

  if(right == left){
    if(arr[right] == target){
      return right;
    } else{
      return -1;
    }
  }
  let mid_idx = Math.floor((left + right + 1)/2);
  let mid = arr[mid_idx];

  if(target < mid){
    return bSearch(arr, target, left, mid_idx - 1);
  } else {
    // console.log(arr[mid_idx], left, right);
    // assert(left === mid_idx + 1);
    return bSearch(arr, target, mid_idx, right);
  }
};
let sortSlice = mergeSort(arr).slice(0,11);
for(let i = -1; i < 12; i++){
  console.log(bSearch(sortSlice, i, 0, 10));
}
