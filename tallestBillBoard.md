# Tallest Billboard

You are installing a billboard and want it to have the largest height.  The billboard will have two steel supports, one on each side.  Each steel support must be an equal height.

You have a collection of rods which can be welded together.  For example, if you have rods of lengths 1, 2, and 3, you can weld them together to make a support of length 6.

Return the largest possible height of your billboard installation.  If you cannot support the billboard, return 0.


```
Example 1:

Input: [1,2,3,6]
Output: 6
Explanation: We have two disjoint subsets {1,2,3} and {6}, which have the same sum = 6.
Example 2:

Input: [1,2,3,4,5,6]
Output: 10
Explanation: We have two disjoint subsets {2,3,5} and {4,6}, which have the same sum = 10.
Example 3:

Input: [1,2]
Output: 0
Explanation: The billboard cannot be supported, so we return 0.
```


Note:

0 <= rods.length <= 20
1 <= rods[i] <= 1000
The sum of rods is at most 5000.

```
var tallestBillboard = function(rods) {

    let topMatch = 0;

    for(let i = 0; i < 3**(rods.length); i++){
        let crapLeg = 0;
        let leftLeg = 0;
        let rightLeg = 0;
        let base3 = parseInt(i, 10).toString(3);

        while(base3.length < rods.length){
            base3 = "0".concat(base3);
        }

        for(let k = 0; k < base3.length; k++){
            if(base3[k] == "0"){
                crapLeg += rods[k];
            } else if(base3[k] == "1"){
                leftLeg += rods[k];
            } else {
                rightLeg += rods[k];
            }

        }
        if(leftLeg == rightLeg && rightLeg > topMatch){
            topMatch = rightLeg;
        }
    }

    return topMatch;
};

```
