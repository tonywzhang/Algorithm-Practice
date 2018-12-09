# Lowest Common Ancestor Binary Search Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

        _______3______
       /              \
    __5__          __1__
   /      \        /      \
   6       2       0       8
         /  \
         7   4

```
Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself
             according to the LCA definition.
```

Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.

```
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) return null;
    if (root.val == p.val) return root;
    if (root.val == q.val) return root;

    let leftAns = lowestCommonAncestor(root.left, p , q);
    let rightAns = lowestCommonAncestor(root.right, p , q);

    if (leftAns && rightAns){
        return root;
    } else if (!leftAns){
        return rightAns;
    } else if(!rightAns){
        return leftAns;
    }
};
```
