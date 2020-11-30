# Sorted Array to BST

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 
 ```
 var sortedArrayToBST = function(nums) {
     if (nums.length == 0) return null;
     let pivot = Math.floor(nums.length/2);
     let head = new TreeNode(nums[pivot]);


     if (pivot > 0) {
         head.left = sortedArrayToBST(nums.slice(0,pivot));
     }
     if (pivot + 1 != nums.length){
        head.right = sortedArrayToBST(nums.slice(pivot+1,nums.length));
     }

     return head;
 };
 ```
