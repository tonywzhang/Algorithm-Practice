# Sort Array By Parity

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.



Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000

Initially, I thought using Sets would be a good idea, one set for even numbers, one for odd, so that we could just return the values in each set. This method would save us the trouble of iterating over A twice, once for evens, then once for odds.

The problem with Sets is the fact that they can only store one instance of a value, so duplicate values are neglected.

```
//initial mistake
var sortArrayByParity = function(A) {
    let evenSet = new Set();
    let oddSet = new Set();

    for(let i = 0; i < A.length; i++){
        if (A[i] % 2 == 0){
            evenSet.add(A[i]);
        }else {
            oddSet.add(A[i]);
        }
    }
    return [...evenSet].concat([...oddSet]);
};


var sortArrayByParity = function(A) {
    let evenArray = [];
    let oddArray = [];

    for(let i = 0; i < A.length; i++){
        if (A[i]%2 == 0){
            evenArray.push(A[i]);
        }else {
            oddArray.push(A[i]);
        }
    }
    return evenArray.concat(oddArray);
};
```
