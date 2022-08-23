/* Summing integers using a while loop */

let num = 1
let sum = 0

while (num < 5) {
  sum += num
  ++num
}

console.log(sum)   /*  => 1+2+3+4 =  10  */

// /* Summing integers using a for loop */
let index = 1
sum = 0

for (let index = 0; index < 11; index++) {
  sum += index;

}
console.log(sum);  /* => 55  */



// for loop in array:
let numbers = [3, 7, 5, 8, 1];
let res = 0
for (let index = 0; index < numbers.length; index++) {
  res += numbers[index]

}
console.log(res)   /* 24 */ 