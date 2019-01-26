# Flip Binary Tree to Match PreOrder Traversal

Given a binary tree with N nodes, each node has a different value from {1, ..., N}.

A node in this binary tree can be flipped by swapping the left child and the right child of that node.

Consider the sequence of N values reported by a preorder traversal starting from the root.  Call such a sequence of N values the voyage of the tree.

(Recall that a preorder traversal of a node means we report the current node's value, then preorder-traverse the left child, then preorder-traverse the right child.)

Our goal is to flip the least number of nodes in the tree so that the voyage of the tree matches the voyage we are given.

If we can do so, then return a list of the values of all nodes flipped.  You may return the answer in any order.

If we cannot do so, then return the list [-1].

```
Example 1:



Input: root = [1,2], voyage = [2,1]
Output: [-1]
Example 2:



Input: root = [1,2,3], voyage = [1,3,2]
Output: [1]
Example 3:



Input: root = [1,2,3], voyage = [1,2,3]
Output: []

```


Note:

1 <= N <= 100

```
var flipMatchVoyage = function(root, voyage) {
    if(root == null) return null;
    if(voyage.length == 0 || root.val != voyage[0]){
        return [-1];    
    }
    if(root.left == null && root.right == null) return [];
    if(root.left == null){
        return flipMatchVoyage(root.right, voyage.slice(1));
    }
    if(root.right == null){
        return flipMatchVoyage(root.left, voyage.slice(1));
    }

    let result = [];
    let flipIdx = 2;
    for(let i = 2; i < voyage.length; i++){
        if(voyage[i] == root.right.val || voyage[i] == root.left.val){
            flipIdx = i;
            break;
        }
    }

    if(voyage[1] != root.left.val){
        result.push(root.val);
        if(flipMatchVoyage(root.left, voyage.slice(flipIdx))[0] == -1 || flipMatchVoyage(root.right, voyage.slice(1, flipIdx))[0] == -1){
            return [-1];
        }
        result = result.concat(flipMatchVoyage(root.left, voyage.slice(flipIdx)));
        result = result.concat(flipMatchVoyage(root.right, voyage.slice(1, flipIdx)));
    } else {
        if(flipMatchVoyage(root.left, voyage.slice(1,flipIdx))[0] == -1 || flipMatchVoyage(root.right, voyage.slice(flipIdx))[0] == -1){
            return [-1];
        }
        result = result.concat(flipMatchVoyage(root.left, voyage.slice(1, flipIdx)));
        result = result.concat(flipMatchVoyage(root.right, voyage.slice(flipIdx)));
    }

    return result;
}; 

```
