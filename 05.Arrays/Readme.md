# Arrays



``` javascript
// Loops/Demos
// 05.Repetition.js


let array = [2, 4, 6, 6, 3, 2]; // The array is symmetric: false
let length = array.length;
let isSymmetric = true;

for (let i = 0; i < length / 2; i++) {
  if (array[i] !== array[length- i - 1]) {
    isSymmetric = false;
    break;
  }
}
console.log(`The array is symmetric: ${isSymmetric}`);
```

```javascript
-->   array[i]                 // 2,4,6  // index 0,1,2
<--   array[length- i - 1]     // 2,3,6, // index 5,4,3
```


