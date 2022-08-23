
// simple if
let high = 50
let med = 25
let low = 1
let current = 19
var found = -1;

// if-else statement
if (current < med) {
  med = current - low / 2

} else if (current > med) {
  med = current + med / 2

} else {
  med = found
}

// switch

let result = 0

switch (result) {
  case "inc":
    result++
    break;
  case "dec":
    result--

  default:
    console.log(result)
    break;
}
