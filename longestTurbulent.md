# Longest Turbulent Array

A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent if and only if:

For i <= k < j, A[k] > A[k+1] when k is odd, and A[k] < A[k+1] when k is even;
OR, for i <= k < j, A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd.
That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

Return the length of a maximum size turbulent subarray of A.


```
Example 1:

Input: [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: (A[1] > A[2] < A[3] > A[4] < A[5])
Example 2:

Input: [4,8,12,16]
Output: 2
Example 3:

Input: [100]
Output: 1
 ```

Note:

1 <= A.length <= 40000
0 <= A[i] <= 10^9

```
var maxTurbulenceSize = function(A) {
    if(A.length == 1) return 1;
    let max = 2;
    let evenCurrMax = 1;
    let oddCurrMax = 1;

    for(let i = 0; i < A.length - 1; i++){
        if(A[i] < A[i+1]){
            if(i%2==0){
                evenCurrMax += 1;
                max = Math.max(max, evenCurrMax);
                oddCurrMax = 1;
            }
            if(i%2==1){
                oddCurrMax += 1;
                max = Math.max(max, oddCurrMax);
                evenCurrMax = 1;
            }
        }else if (A[i+1] < A[i]){
            if(i%2==1){
                evenCurrMax += 1;
                max = Math.max(max, evenCurrMax);
                oddCurrMax = 1;
            }
            if(i%2==0){
                oddCurrMax += 1;
                max = Math.max(max, oddCurrMax);
                evenCurrMax = 1;
            }
        }else{
            oddCurrMax = 1;
            evenCurrMax = 1;
        }
    }


    return max;
};

```
