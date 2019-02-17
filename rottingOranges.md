# Rotting Oranges

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.


```
Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 ```

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.

```
var orangesRotting = function(grid) {
    let time = 0;
    let done = false;
    while(done == false){
        let moveInfo = orangeMove(grid,time);
        grid = moveInfo[0];
        done = moveInfo[1];
        time = moveInfo[2];
    }
    if(!checkDone(grid)) return -1;
    return time - 1;
};

var orangeMove = function(grid, time){
    let done = true;
    let badOranges = [];
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 2) badOranges.push([i,j]);
        }    
    }
    // console.log(badOranges);

    for(let i = 0; i < badOranges.length; i++){
        let x = badOranges[i][0];
        let y = badOranges[i][1];
        // console.log(x);
        // console.log(y);
        if(x-1 >= 0 && grid[x-1][y] == 1){
            grid[x-1][y] = 2;
            done = false;
        }
        if(x+1 <= grid.length - 1 && grid[x+1][y] == 1){
            // console.log("changing");
            grid[x+1][y] = 2;
            done = false;
        }
        if(y-1 >= 0 && grid[x][y-1] == 1){
            grid[x][y-1] = 2;
            done = false;
        }
        if(y+1 <= grid[0].length-1 && grid[x][y+1] == 1){
            grid[x][y+1] = 2;
            done = false;
        }
    }
    console.log(grid);
    return [grid, done, time + 1];
};

var checkDone = function(grid){
    let oneCount = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 1) return false;
        }
    }
    return true;
};
```
