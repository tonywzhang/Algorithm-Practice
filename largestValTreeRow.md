# Largest Value Tree Row

You need to find the largest value in each row of a binary tree.

```
Example:
Input:

          1
         / \
        3   2
       / \   \  
      5   3   9

Output: [1, 3, 9]
```

```
var largestValues = function(root) {
    if(root == null) return [];
    let valMap = new Map();

    let queue = [[root, 0]];

    while(queue.length > 0){
        let node = queue.shift();
        if(!valMap.has(node[1])){
            valMap.set(node[1], node[0].val);
        }else if(valMap.get(node[1]) < node[0].val) {
            valMap.set(node[1], node[0].val);
        }
        if(node[0].left != null){
            queue.push([node[0].left, node[1] - 1]);
        }
        if(node[0].right != null){
            queue.push([node[0].right, node[1] - 1]);
        }
    }
    return Array.from(valMap.values());
};
```
