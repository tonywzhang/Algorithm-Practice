# Max Depth

Find the maximum depth of a binary tree

```
var maxDepth = function(root){
  if(root == null) return 0;  

  let leftTraverse = 1 + maxDepth(root.left);
  let rightTraverse = 1 + maxDepth(root.right);

  return Math.max(leftTraverse, rightTraverse);
};

```
