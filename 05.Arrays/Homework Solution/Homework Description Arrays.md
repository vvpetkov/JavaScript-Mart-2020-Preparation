JavaScript Mar'20 - Preparation

# Arrays

## Homework Description

### Problem 1. Compare arrays

Write a program that reads two `number` arrays of size `N` from a sample input and compares them element by element.



##### Input:

- On the first line you will receive the number `N`
- On the next `N` lines the numbers of the first array will be given
- On the next `N` lines the numbers of the second array will be given



##### Output:

Print `Equal` if the two arrays are the same and `Not equal` if they are not



##### Examples:



| Input         | Output |
| ------------- | ------ |
| 3 1 2 3 1 2 3 | Equal  |

| Input         | Output    |
| ------------- | --------- |
| 3 2 4 6 6 4 2 | Not equal |

------





### Problem 2. Compare Character Arrays Lexicographically

Write a program that compares two arrays of single-letter strings lexicographically (letter by letter). Research how to convert string to and array of single-letter strings.



##### Input:

- On the first line you will receive the first array as string
- On the second line you will receive the second array as string



##### Output:

- Print `First` if the first array is lexicographically smaller
- Print `Second` if the second array is lexicographically smaller
- Print `Equal` if the arrays are equal



##### Examples:



| Input           | Output |
| --------------- | ------ |
| telerik teleric | Second |



| Input     | Output |
| --------- | ------ |
| own owned | First  |



| Input   | Output |
| ------- | ------ |
| omg omg | Equal  |

------





### Problem 3. Maximum Sequence

Write a program that finds the length of the `maximum sequence` of equal elements in an array of integers.



##### Examples:



| Input                   | Output |
| ----------------------- | ------ |
| 2 1 1 2 3 3 **2 2 2** 1 | 3      |

------





### Problem 4. Is Array Sorted?

Write a program that determines if an array of numbers is sorted in increasing order.



##### Examples:



| Input                  | Output |
| ---------------------- | ------ |
| 1 2 4 8 12 34 200 2000 | Yes    |

| Input                  | Output |
| ---------------------- | ------ |
| 7 8 9 10 11 12 11 13 9 | No     |

------





### Problem 5. Find Two Biggest Numbers

Write a program that finds the two biggest numbers from an array of numbers



##### Examples:



| Input                | Output |
| -------------------- | ------ |
| 8 2 1 3 5 8 9 11 2 5 | 11 9   |

| Input                | Output |
| -------------------- | ------ |
| 8 7 8 11 7 11 5 8 10 | 11 11  |

------





### Problem 6. Is Array Symmetric

Write a program that finds if an array of numbers is symmetric - that is, the first number is equal to the last, the second - to the second last and so on



##### Examples:



| Input           | Output |
| --------------- | ------ |
| 1 2 3 4 4 3 2 1 | Yes    |

| Input     | Output |
| --------- | ------ |
| 7 8 9 8 7 | Yes    |

| Input       | Output |
| ----------- | ------ |
| 3 4 5 3 4 5 | No     |

------





### Problem 7. Is Array in Wave Form

Write a program that determines if an array of numbers is in Wave Form -
e.g. `first > second < third > fourth < fifth > ...`



##### Examples:



| Input         | Output |
| ------------- | ------ |
| 2 1 2 1 2 1 2 | Yes    |

| Input       | Output |
| ----------- | ------ |
| 7 3 5 2 8 4 | Yes    |

| Input       | Output |
| ----------- | ------ |
| 2 1 3 4 2 3 | No     |

------





### Problem 8. Negative-Positive Sort

Write a program that moves all negative numbers to the beginning and all positive to the end, without changing the order of positive negative



##### Examples:



| Input                | Output               |
| -------------------- | -------------------- |
| 7 2 -2 1 -5 4 5 -3 1 | -2 -5 -3 7 2 1 4 5 1 |

------





### Problem 9. Print Maximum Increasing Subsequence

Write a program that prints the maximum length increasing subsequence to the console. If two or more are of the same length, print the last one



##### Examples:



| Input                       | Output |
| --------------------------- | ------ |
| 6 7 3 8 1 9 **4 5 6** 2 1 3 | 4 5 6  |

| Input                          | Output   |
| ------------------------------ | -------- |
| **1 2 3 4** 3 1 9 **4 5 6 11** | 4 5 6 11 |

------





### Problem 10. Repeating Numbers

Write a program that finds the repeating number. All other numbers occur only once.



##### Examples:



| Input             | Output |
| ----------------- | ------ |
| 1 2 3 4 5 6 5 8 9 | 5      |

------





### Problem 11. Pairs

Write a program that find all pairs of numbers whose sum is equal to a given number. On the first line you will receive the target sum, on the second line - the array.



##### Examples:



| Input                 | Output                   |
| --------------------- | ------------------------ |
| 6 1 2 3 4 3 6 5 8 3 9 | 1, 5 2, 4 3, 3 3, 3 3, 3 |

