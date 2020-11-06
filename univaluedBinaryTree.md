# Univalued Binary Tree

A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

```
Example 1:


Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false
```

 
Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].

```
var isUnivalTree = function(root) {

    let queue = [root];

    let target = root.val;

    while(queue.length > 0){
        let currNode = queue.shift();
        if (currNode.val != target) return false;
        if(currNode.left != null) queue.push(currNode.left);
        if(currNode.right != null) queue.push(currNode.right);
    }
    return true;
};
```
