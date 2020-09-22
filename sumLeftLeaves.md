# Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.
```
Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
```

```
var sumOfLeftLeaves = function(root) {
    let val = 0;
    if(!root)return 0;
    if (root.left && !root.left.left && !root.left.right) val = root.left.val;
    return val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right); 
};
```
