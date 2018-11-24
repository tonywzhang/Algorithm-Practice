# 3Sum With Multiplicity

Given an integer array A, and an integer target, return the number of tuples i, j, k  such that i < j < k and A[i] + A[j] + A[k] == target.

As the answer can be very large, return it modulo 10^9 + 7.

```
Example 1:

Input: A = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation:
Enumerating by the values (A[i], A[j], A[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
Example 2:

Input: A = [1,1,2,2,2,2], target = 5
Output: 12
Explanation:
A[i] = 1, A[j] = A[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.
```

Note:

3 <= A.length <= 3000
0 <= A[i] <= 100
0 <= target <= 300

```
var threeSumMulti = function(A, target) {

    let numMap = new Map();

    for(let i = 0; i < A.length; i++){
        if(numMap.has(A[i]) == false){
            numMap.set(A[i], 1);
        } else {
            numMap.set(A[i], numMap.get(A[i]) + 1);
        }
    }

    let nums = Array.from(numMap.keys());
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        j = i;
        k = nums.length -1;

        while (j <= k) {
            if (nums[i] + nums[j]+nums[k] > target) {
                k -= 1;
                continue;
            } else if (nums[i] + nums[j]+nums[k] < target) {
                j += 1;
                continue;
            }
            let M = numMap.get(nums[i]);
            let N = numMap.get(nums[j]);
            let O = numMap.get(nums[k]);

            if (i == j && j == k && M > 2){
                count += (M*(M-1)*(M-2)/6);
            }
            if (i < j && j == k && N > 1){
                count += M * N * (N-1)/2;
            }

            if (i == j && j < k && M > 1){
                count += O * N * (N-1)/2;
            }
            if (i < j && j < k){
                count += M*N*O;
            }
            count %= (10**9+7);
        }
    }
    return count;
};
```
