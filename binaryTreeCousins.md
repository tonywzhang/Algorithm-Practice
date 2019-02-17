# Binary Tree Cousins

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.


```
Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
 ```

Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.

```
var isCousins = function(root, x, y) {
    if(root == null) return false;
    let nodeInfo = [];
    let queue = [[root, null, 0]];
    while(queue.length > 0){
        let node = queue.shift();
        if(node[0].val == x || node[0].val == y){
            // console.log(node);
            nodeInfo.push(node);
            if(nodeInfo.length == 2) break;
        }
        if(node[0].left != null) queue.push([node[0].left, node[0], node[2] + 1 ]);
        if(node[0].right != null) queue.push([node[0].right, node[0], node[2] + 1 ]);
    }
    // console.log(nodeInfo);
    return nodeInfo[0][2] == nodeInfo[1][2] && nodeInfo[0][1].val != nodeInfo[1][1].val;
};
```
