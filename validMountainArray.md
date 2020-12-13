# Valid Mountain Array

Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

```
A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[B.length - 1]
```


 
```
var validMountainArray = function(A) {

    if (A.length < 3){
        return false;
    }

    let left = 0;
    let right = A.length-1;

    if(A[left] > A[left + 1] || A[right] > A[right - 1]){
        return false;
    }

    while (left <= right){
        if (A[left] == A[left + 1] || A[right] == A[right - 1]){
            return false;
        }

        if (A[left] < A[left + 1] && A[right] < A[right - 1]){
            left += 1;
            right -= 1;
        } else if (A[left] < A[left + 1] && A[right] > A[right - 1]){
            left += 1;
        } else if (A[left] > A[left + 1] && A[right] < A[right -1]){
            right -= 1;
        } else if (left >= right){
            return true;
        } else {
            return false;
        }

    }
};
```
