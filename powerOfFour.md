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
var isPowerOfThree = function(n) {
    if(n < 1) return false;
    let baseThree = n.toString(3);
    let oneCount = 0;
    let zeroCount = 0;

    for(let i = 0; i < baseThree.length; i++){
        if(baseThree[i] == "1") oneCount += 1;
        if(baseThree[i] == "0") zeroCount += 1;
    }
    return (oneCount == 1 && zeroCount + oneCount == baseThree.length);
};

var isPowerOfThree = function(n){
  if(n < 1) return false;

  while(n > 1){
    n/=3;
  }
  return n == 1;
};
```
