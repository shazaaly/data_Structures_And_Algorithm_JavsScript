/* When a function is called recursively, the results of the function’s computation are tem‐
porarily suspended while the recursion is in progress.  */

function factorial(num) {
  if (num === 1) {
    return 1

  } else {
    return num * factorial(num - 1)
  }


}
let res = factorial(5)
console.log(res);