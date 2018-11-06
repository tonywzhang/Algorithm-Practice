# Average of Levels in Binary Tree

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.

```
var averageOfLevels = function(root) {
    if (root == null) return;
    let queue = [root];
    let result = [];

    while (queue.length > 0) {
        let nodeLength = queue.length;
        let total = 0;
        for(let i = 0; i < nodeLength; i++){
            total += queue[i].val;
            if (queue[i].left != null) queue.push(queue[i].left);
            if (queue[i].right != null) queue.push(queue[i].right);
        }
        for(let i = 0; i < nodeLength; i++){
            queue.shift();
        }
        result.push(total/nodeLength);
    }

    return result;
};
```
