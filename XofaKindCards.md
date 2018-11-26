# X of a Kind in a Deck of Cards

In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.

```
Example 1:

Input: [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
Example 2:

Input: [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
Example 3:

Input: [1]
Output: false
Explanation: No possible partition.
Example 4:

Input: [1,1]
Output: true
Explanation: Possible partition [1,1]
Example 5:

Input: [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2]
```

Note:

1 <= deck.length <= 10000
0 <= deck[i] < 10000

```
var hasGroupsSizeX = function(deck) {
    let cardMap = new Map();

    for(let i = 0; i < deck.length; i++){
        if(cardMap.has(deck[i]) == false){
            cardMap.set(deck[i], 1);
        }else{
            cardMap.set(deck[i], cardMap.get(deck[i]) + 1);
        }    
    }

    let values = Array.from(cardMap.values());
    let min = Math.min(...values);

    console.log(min);

    if (min < 2){
        return false;
    }

    for(let i = 0; i < values.length; i++){
        if(gcd(values[i], min) < 2){
            return false;
        }
    }
    return true;
};

var gcd = function(a, b){
    let gcd = 1;
    for(let i = 2; i <= b; i++){
        if(a%i == 0 && b%i == 0){
            gcd = i;
        }
    }
    return gcd;
}
```
