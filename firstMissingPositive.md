# First Missing Positive

Given an unsorted integer array, find the smallest missing positive integer.

```
Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
```

```
var firstMissingPositive = function(nums) {
    let numSet = new Set();
    for(let i = 0; i < nums.length; i++){
        numSet.add(nums[i]);
    }

    let currNum = 1;
    while(numSet.has(currNum)){
        currNum += 1;
    }
    return currNum;
};
```
