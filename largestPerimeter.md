# Largest Perimeter

Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

If it is impossible to form any triangle of non-zero area, return 0.


```
Example 1:

Input: [2,1,2]
Output: 5
Example 2:

Input: [1,2,1]
Output: 0
Example 3:

Input: [3,2,3,4]
Output: 10
Example 4:

Input: [3,6,2,3]
Output: 8
```


Note:

3 <= A.length <= 10000
1 <= A[i] <= 10^6

```
var largestPerimeter = function(A) {
    A.sort(function(a,b){
        return b-a;
    });

    for(let i = 0; i < A.length; i++){
        for(let j = i + 1; j < A.length; j++){
            for(let k = j + 1; k < A.length; k++){
                if(validLengths(A[i], A[j], A[k])) return A[i] + A[j] + A[k];
                if(A[j] + A[k] <= A[i]) break;
            }
        }
    }
    return 0;
};

var validLengths = function(side1, side2, side3){
    if(side1 + side2 <= side3) return false;
    if(side1 + side3 <= side2) return false;
    if(side2 + side3 <= side1) return false;
    return true;
};
```
