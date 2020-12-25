# Surface Area of 3D Shapes

On a N * N grid, we place some 1 * 1 * 1 cubes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Return the total surface area of the resulting shapes.

```
Example 1:

Input: [[2]]
Output: 10
Example 2: 

Input: [[1,2],[3,4]]
Output: 34
Example 3:

Input: [[1,0],[0,2]]
Output: 16
Example 4:

Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: 32
Example 5:

Input: [[2,2,2],[2,1,2],[2,2,2]]
Output: 46
 ```

Note:

1 <= N <= 50
0 <= grid[i][j] <= 50

```
var surfaceArea = function(grid) {
    let top = 0;
    let left = 0;
    let right = 0;
    let front = 0;
    let back = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 0) continue;

            top += 1;

            if(j == 0){
              left += grid[i][j];    
            } else {
                if(grid[i][j] - grid[i][j-1] > 0){
                    left += grid[i][j] - grid[i][j-1];
                }
            }

            if (j == grid[0].length - 1) {
                right += grid[i][j];
            } else {
                if(grid[i][j] - grid[i][j+1] > 0){
                    right += grid[i][j] - grid[i][j+1];
                }
            }

            if (i == 0) {
                back += grid[i][j];
            } else {
                if(grid[i][j] - grid[i-1][j] > 0){
                    back += grid[i][j] - grid[i-1][j];
                }
            }

            if (i == grid.length - 1) {
                front += grid[i][j];
            } else {
                if(grid[i][j] - grid[i+1][j] > 0){
                    front += grid[i][j] - grid[i+1][j];
                }
            }
        }
    }

    return top*2 + left + right + front + back;
};
```
