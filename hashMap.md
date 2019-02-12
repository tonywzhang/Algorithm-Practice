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
    return this.map[_hash(key)].filter(el => el[0] == key)[0_____][1];
  };

  set(key, value){
    /// erase any old values for key.
    this.map[_hash(key)].push([key,value]);
  };

  _hash(key){
    let weight = 0;
    for(let i = 0;i < key.length; i++){
      weight *= 128; // or another big-prime.
      weight += key.charCodeAt(i);

    }
    return NUMBER.BIG_PRIME * weight%10000;
  };
```


};
