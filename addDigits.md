# Add Digits

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.

```

var addDigits = function(num) {
    while (num>=10){
        num = addDigitStep(num);
    }
  return num;
};

function addDigitStep(num) {
  let root = 0;

  while (num > 0) {
    root += num % 10;
    num = Math.floor(num/10);
  }
  return root;
}
```
