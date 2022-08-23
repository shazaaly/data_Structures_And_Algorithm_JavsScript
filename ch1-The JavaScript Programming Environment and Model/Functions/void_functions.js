function addToArrayelem(arr, amount) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += amount

  }

}

let grades = [25, 25, 65, 98, 70]
addToArrayelem(grades, 5)
console.log(grades);  /*  => [ 30, 30, 70, 103, 75 ]  */ 
