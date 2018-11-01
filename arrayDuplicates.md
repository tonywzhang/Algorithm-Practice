# Find all Duplicates in an Array

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

```
var findDuplicates = function(nums) {
    let numSet = new Set();
    let dups = [];
    for(let i=0; i < nums.length; i++){
        if (numSet.has(nums[i])) dups.push(nums[i]);
        if (numSet.has(nums[i]) == false) numSet.add(nums[i]);
    }
    return dups;
};
```
