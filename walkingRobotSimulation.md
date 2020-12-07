# Walking Robot Simulation

A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can receive one of three possible types of commands:

-2: turn left 90 degrees
-1: turn right 90 degrees
1 <= x <= 9: move forward x units
Some of the grid squares are obstacles.

The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])

If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)

Return the square of the maximum Euclidean distance that the robot will be from the origin.

```
Example 1:

Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation: robot will go to (3, 4)
Example 2:
 
Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
Output: 65
Explanation: robot will be stuck at (1, 4) before turning left and going to (1, 8)
```

Note:

0 <= commands.length <= 10000
0 <= obstacles.length <= 10000
-30000 <= obstacle[i][0] <= 30000
-30000 <= obstacle[i][1] <= 30000
The answer is guaranteed to be less than 2 ^ 31.

```
const STEP = [[1,0], [0,1], [-1,0], [0,-1]];

var robotSim = function(commands, obstacles) {
    let dir = 1;
    let x = 0, y = 0;
    let obsSet = new Set();
    let ans = 0;

    for(let i = 0; i < obstacles.length; i++){
        obsSet.add(obstacles[i]+"");
    }

    for(let i = 0; i < commands.length; i++){
        let cmd = commands[i];
        if(cmd == -2){
            dir = (dir + 1)%4;
        } else if (cmd == -1){
            dir = (dir + 3)%4;
        } else {
            for(let j = 0; j < cmd; j++){
                let nextX = x + STEP[dir][0];
                let nextY = y + STEP[dir][1];
                let coords = [nextX,nextY]+"";
                if(obsSet.has(coords)){
                    break;
                }
                x = nextX;
                y = nextY;
                ans = Math.max(ans, x*x + y*y);
            }
        }
    }
    return ans;
};
```
