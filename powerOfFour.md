# Power of Four

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

```
Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false
```

```
var isPowerOfFour = function(n) {
    if(n < 1) return false;
    let baseFour = n.toString(4);
    let oneCount = 0;
    let zeroCount = 0;

    for(let i = 0; i < baseFour.length; i++){
        if(baseFour[i] == "1") oneCount += 1;
        if(baseFour[i] == "0") zeroCount += 1;
    }
    return (oneCount == 1 && zeroCount + oneCount == baseFour.length);
};

var isPowerOfFour = function(n){
  if(n < 1) return false;

  while(n > 1){
    n/=4;
  }
  return n == 1;
};
```
