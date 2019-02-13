# Hash Map Implementation

```
class HashMap {
  constructor(){
    this.map = new Array();
    for(let i = 0; i < 10000; i++){
      this.map.push([]);
    }
  }

  get(key){
    let val = "";
    for(let i = 0; i < this.map[_hash(key)].length; i++){
      if(this.map[_hash(key)][i][0] == key){
        return this.map[_hash(key)][i][1];
      }
    };
    return undefined;
  };

  set(key, value){
    /// erase any old values for key.
    for(let i = 0; i < this.map[_hash(key)].length; i++){
      if(this.map[_hash(key)][i][0] == key){
        this.map[_hash(key)][i] = [key, value];
        return;
      }
    }
    this.map[_hash(key)].push([key,value]);
  };

  erase(key){
    for(let i = 0; i < this.map[_hash(key)].length; i++){
      if(this.map[_hash(key)][i][0] == key){
        this.map[hash(key)].splice(i,1);
      }
    };
    return undefined;
  }

  _hash(key){
    let weight = 0;
    for(let i = 0;i < key.length; i++){
      weight *= 128; // or another big-prime.
      weight += key.charCodeAt(i);

    }
    return NUMBER.BIG_PRIME * weight%10000;
  };

};
```

// hwk:

// HashSet, with add, erase, and contains (has) functions.
//
// fix HashMap to properly erase old key,value pairs. also implement erase(key) function.

// implement a TreeMap, e.g. a class with set and get and erase functions, using a Tree as the underlying data structure.

};
