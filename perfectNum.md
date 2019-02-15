# Perfect Number

We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
```
Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
```

```
var checkPerfectNumber = function(num) {
    if(num < 2) return false;
    let total = 0;
    for(let i = 1; i <= Math.ceil(num/2); i++){
        if(num%i == 0 && num != i) total += i;
    }
    return total == num;
};
```
