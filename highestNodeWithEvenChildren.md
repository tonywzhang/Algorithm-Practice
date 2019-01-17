# Highest Node With Even Children

Return the highest (e.g. node with smallest depth), node which has the same number of children on the left and on the right? If there's a tie, return the leftmost one.

Some examples:

INPUT:

       1
    /     \
   2       3
  / \     / \
 4       5   6
/ \     / \ / \
7 8    9 10 11 12

OUTPUT: 3



INPUT:

       1
    /     \
   2       3
  /       /
 4       5
/ \     / \
6 7     8 9

Output: 1

```
var evenWeight = function(root){
  if(root == null) return null;

  return helperFunction(root)[0];
};

var helperFunction = function(root){
  if(root == null) return null;

  let leftTraverse;
  if(root.left != null){
    leftTraverse = helperFunction(root.left);
    leftTraverse[2] += 1;
  }

  let rightTraverse;
  if(root.right != null){
    rightTraverse = helperFunction(root.right);
    rightTraverse[2] += 1;
  }

  if(leftTraverse == 'undefined' && rightTraverse == 'undefined'){
    return [root, 1, 0];
  }

  if(leftTraverse[1] == rightTraverse[1]){
    return [root, leftTraverse[1]+rightTraverse[1] + 1, 0];
  }

  if(leftTraverse[2] <= rightTraverse[2]){
    return [leftTraverse[0], leftTraverse[1] + rightTraverse[1] + 1, leftTraverse[2]];
  } else {
    return [rightTraverse[0], leftTraverse[1] + rightTraverse[1] + 1, rightTraverse[2]];
  }
};
```
