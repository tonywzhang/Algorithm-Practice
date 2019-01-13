# Subarray Sums Divisible by K

Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.


```
Example 1:

Input: A = [4,5,0,-2,-3,1], K = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by K = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 ```

Note:

1 <= A.length <= 30000
-10000 <= A[i] <= 10000
2 <= K <= 10000

```
var subarraysDivByK = function(A, K) {
    let total = 0;
    for(let i = 0; i < A.length; i++){
        let currSum = 0;
        for(let j = i; j < A.length; j++){
            currSum += A[j];
            if(currSum < 0){
                currSum += (Math.ceil(Math.abs(currSum/K))*K);
            }
            if(currSum % K == 0){
                total += 1;
                // console.log(currSum);
            }
        }
    }
    return total;
};
```
