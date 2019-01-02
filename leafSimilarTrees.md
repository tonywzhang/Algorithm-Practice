# Leaf Similar Trees

Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Note:

Both of the given trees will have between 1 and 100 nodes.

```
var leafSimilar = function(root1, root2) {
    let s1 = leafSequence(root1);
    let s2 = leafSequence(root2);

    if(s1.length !== s2.length) return false;

    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]) return false;
    }
    return true;
};

var leafSequence = function(root){
    if(root === null) return [];
    if(root.left === null && root.right === null) return [root.val];

    let result = [];
    result = result.concat(leafSequence(root.left));
    result = result.concat(leafSequence(root.right));
    return result;
};
```
