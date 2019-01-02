# KnapSack Classic Question

The famous knapsack problem. You are packing for a vacation on the sea side and you are going to carry only one bag with capacity S (1 <= S <= 2000). You also have N (1<= N <= 2000) items that you might want to take with you to the sea side. Unfortunately you can not fit all of them in the knapsack so you will have to choose. For each item you are given its size and its value. You want to maximize the total value of all the items you are going to bring. What is this maximum total value?

## Input Format

On the first line you are given S and N. N lines follow with two integers on each line describing one of your items. The first number is the size of the item and the next is the value of the item.

## Output Format

You should output a single integer on one like - the total maximum value from the best choice of items for your trip.

## Sample Input

```
4 5
1 8
2 4
3 0
2 5
2 3
```

## Sample Output
```
13
```

## Explanation

The items with value 8 and 5 should be picked, summing up to 13.

```
import os, sys

lines = sys.stdin.read().split('\n')
S, N = [int(x) for x in lines[0].split()]
bestValues = [0] + [-1] * S

for line in lines[1:]:
    line = line.strip()
    if line == '':
        continue
    size, val = [int(x) for x in line.split()]
    for x in range(S - size, -1, -1):
        if bestValues[x] != -1 and bestValues[x] + val > bestValues[x + size]:
            bestValues[x+size] = bestValues[x] + val

print(max(bestValues))
```
