# Tree Map Implementation

```
class TreeMap{

  constructor(){
    this.map = null;
  };

  get(key){
    let currNode = this.map;
    while(currNode){
      if(currNode.key == key) return currNode.val;

      if(currNode.key > key){
        currNode = currNode.left;
      }else{
        currNode = currNode.right;
      }
    }
    return undefined;
  };

  set(key, val){
    let newNode = new Node(key, val);
    let currNode = this.map;

    while(currNode){
        if(currNode.key == key){
          currNode.val = val;
        }else if(currNode.key > newNode.key){
        if(currNode.left != null){
          currNode = currNode.left;
        }else{
          currNode.left = newNode;
          return;
        }
      }else{ 
        if(currNode.right != null){
          currNode = currNode.right;
        }else{
          currNode.right = newNode;
          return;
        }
      }
    }
    this.map = newNode;
  };
};
```
