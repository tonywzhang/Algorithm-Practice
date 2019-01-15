# Minimum Value

Return the Minimum Value of a Binary Tree

```
var minVal = function(root){
  if(root == null) return null;

  if(root.left != null && root.right != null){
    return Math.min(minVal(root.left), minVal(root.right), root.val);
  } else if (root.left == null && root.right != null){
    return Math.min(minVal(root.right), root.val);
  } else if (root.left != null && root.right == null){
    return Math.min(minVal(root.left), root.val);
  }

  return root.val;
}
```
