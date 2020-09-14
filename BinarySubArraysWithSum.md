# Binary Subarrays With Sum

In an array A of 0s and 1s, how many non-empty subarrays have sum S?

```
Example 1:

Input: A = [1,0,1,0,1], S = 2
Output: 4
Explanation:
The 4 subarrays are bolded below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
```

Note:

A.length <= 30000
0 <= S <= A.length
A[i] is either 0 or 1.

```
var numSubarraysWithSum = function(A, S) {
    let count = 0;

    for(let i = 0; i < A.length; i++){
        let total = 0;
        for(let j = i; j < A.length; j++){
            total += A[j];
            if(total == S){
                count += 1;
            } else if (total > S){
                break;
            }
        }
    }
    return count;
};

```
