# Array Max Given K

Given an integer array and a given value K, return the maximum value less than K.

```
var arrayMax = function(arr, K){
  if(arr.length == 0) return -1;

  let currMax = -1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < K) continue;

    if(arr[i] > currMax){
      currMax = arr[i];
    }
  }

  return currMax;
};

```
