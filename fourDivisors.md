# Four Divisors

Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors.

If there is no such integer in the array, return 0.



Example 1:

Input: nums = [21,4,7]
Output: 32
Explanation:
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.


Constraints:

1 <= nums.length <= 10^4
1 <= nums[i] <= 10^5

```
var sumFourDivisors = function(nums) {
    let res = 0;

    for(let i = 0; i < nums.length; i++){
        if(divisors(nums[i]).length == 4) res += divisors(nums[i]).reduce((a,b) => a+b);
    }

    return res;
};

var divisors = function(num){
    let result = [];

    for(let i = 1; i <= num; i++){
        if(num%i == 0) result.push(i);
        if(i > Math.floor(num/2)) {
            result.push(num);
            break;
        }
    }

    return result;
}
```
