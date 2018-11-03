# Serialize and Deserializing BSTs

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

```
var serializeVal = function(x) {
    if (x == null) return "null ";
    return `${x.val} `;
}

var serialize = function(root) {
    if (root == null) return "";
    let s = serializeVal(root) + " " + serializeVal(root.left) + " " + serializeVal(root.right) + " ";
    s += serialize(root.left);
    s += serialize(root.right);
    return s;
};

var deserialize = function(data) {
    if (data == "") return [];
    let info = data.split(' ').filter(el => el != '').map(el => {
             if (el != "null"){
                 return parseInt(el);
             }
             return null;
         });
    console.log(info);



    let hashTable = new Object();
    for(let i = 0; i < info.length; i+=3){
        hashTable[info[i]] = [info[i+1], info[i+2]];
    }


    let root = new TreeNode(info[0]);

    let queue = [root];
    while (queue.length > 0) {
        // shift, get the one in the front.
        // use the has table to create children.
        // push children into queue.
        let currentNode = queue.shift();
        let leftVal = hashTable[currentNode.val][0];
        let rightVal = hashTable[currentNode.val][1];

        if (leftVal != null) {        
            currentNode.left = new TreeNode(leftVal);
            queue.push(currentNode.left);
        }
        if (rightVal != null) {
            currentNode.right = new TreeNode(rightVal);
            queue.push(currentNode.right);
        }
    }
    return root;
};
```
