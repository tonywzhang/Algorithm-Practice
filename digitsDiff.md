# Subtract the Product and Sum of Digits of an Integer

Given an integer number n, return the difference between the product of its digits and the sum of its digits.


Example 1:

Input: n = 234
Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24
Sum of digits = 2 + 3 + 4 = 9
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation:
Product of digits = 4 * 4 * 2 * 1 = 32
Sum of digits = 4 + 4 + 2 + 1 = 11
Result = 32 - 11 = 21


Constraints:

1 <= n <= 10^5

```
var subtractProductAndSum = function(n) {
    if (n == 0) return 0;

    let digitsProduct = 1;
    let digitsSum = 0;

    let digitsArr = [];
    while(n > 0){
        digitsArr.push(n%10);
        n = Math.floor(n/10);
    }

    for(let i = 0; i < digitsArr.length; i++){
        digitsProduct *= digitsArr[i];
        digitsSum += digitsArr[i];
    }

    return digitsProduct - digitsSum;

};
```
