# Range Sum of BST

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

```
Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

```

Note:

The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.

```
var rangeSumBST = function(root, L, R) {
    if(root == null) return 0;

    let total = 0;
    let stack = [];
    let currNode = root;

    while (stack.length > 0 || currNode != null){
        if (currNode != null) {
            stack.push(currNode);
            currNode = currNode.left;
        } else {
            currNode = stack.pop();
            if (currNode.val >= L && currNode.val <= R) {
                total += currNode.val;
            }
            if (currNode.val >= R)
            {
                break;
            }
            currNode = currNode.right;
        }
    }
    return total;
};
```
