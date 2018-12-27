# Count And Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

```
var countAndSay = function(n) {
    var str = "1";
        for(let i = 2; i <= n; i++) {
          str = getValue(str);
        }
    return str;
}

var getValue = function(str){
    let result = "";
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      count+=1;
      if(str[i] != str[i+1]) {
       result = result + count + str[i];
       count = 0;
      }
    }
    return result;
}
```
