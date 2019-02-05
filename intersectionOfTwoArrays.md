# Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

```
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
```

```
var intersection = function(nums1, nums2) {
    let numSet = new Set();
    for(let i = 0; i < nums1.length; i++){
        numSet.add(nums1[i]);
    }

    let result = [];
    for(let i = 0; i < nums2.length; i++){
        if(numSet.has(nums2[i]) && result.indexOf(nums2[i]) == -1){
            result.push(nums2[i]);
        }
    }
    return result;
};
```
