//A function for doubling array values
//This is a "for loop" and is the oldest and most widely supported of loops
// It allows you to be more intentional about which is the starting/ending element and which direction the iteration should go
//"i" represents the index of the array

function doubleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  console.log("The answer is: " + arr);
}

let test = [1,2,3,4,5];
doubleArray(test);
//logs: 'The answer is: 2,4,6,8,10'



//A function for finding the average of the values in an array
//This is a "for in loop" and is more meant for objects (it is less efficient for arrays)
//"i" represents the index of the array

function arrayAverage(arr) {
  let x = 0;
  for (let i in arr) {
    x += arr[i];
  }
  let ans = x / arr.length;
  console.log("The average is: " + ans);
}

let test2 = [6,12,9,27,54];
arrayAverage(test2);
//logs: 'The average is: 21.6'



//This shows the difference between "for in" and "for of" loops:

let list = [4, 5, 6];

for (let i in list) {
   //console.log(i); (logs: "0", "1", "2") ---> The indexes/keys
}

for (let i of list) {
   //console.log(i); (logs: "4", "5", "6") ---> The elements/values
}



//So... I could rewrite the arrayAverage function using a "for of" loop
//"i" representing the elements of the array

function arrayAverage2(arr) {
  let x = 0;
  for (let i of arr) {
    x += i;
  }
  let ans = x / arr.length;
  console.log("The average is: " + ans);
}

let test3 = [6,12,9,27,54];
arrayAverage2(test3);
//logs: 'The average is: 21.6'
