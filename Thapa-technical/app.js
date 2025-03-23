// // challange Time 


// // // It will concatenate 
// // console.log(10 + "20")

// // // it will calculation (-,/,*)
// // console.log(-10 - "20")


// // // String will concatenate with 0 
// // console.log(" " + 0)

// // // string calculation 

// // // When string perfrom excpet +  answer will be NaN
// // console.log("sadiq" * "shah")



// // Interview Questions :

// // 1.Differnce between null and undefined


// // var p=1;
// // for(var i=1; i<=7; i++){
// //     if(i%2==1)
// //     {
// //     p=p*i;
// //     }
// // }
// // document.write("The Product of  odd integer from 1 to 7 is " + p);

// var no = + prompt("Enter a table no : ")
// document.write(no  + " x  1 = " + no*1 + "<br>")
// document.write(no  + " x  2 = " + no*2 + "<br>")
// document.write(no  + " x  3 = " + no*3 + "<br>")
// document.write(no  + " x  4 = " + no*4 + "<br>")
// document.write(no  + " x  5 = " + no*5 + "<br>")
// document.write(no  + " x  6 = " + no*6 + "<br>")
// document.write(no  + " x  7 = " + no*7 + "<br>")
// document.write(no  + " x  8 = " + no*8 + "<br>")
// document.write(no  + " x  9 = " + no*9 + "<br>")
// document.write(no  + " x  10 = " + no*10+ "<br>")

// var Arr = [56,67,45,78,34,76,22,61,98,45,98,32]

// for (var i = 1; i < Arr.length; i++){
//     for (var j = 0; j < i; j++){
//         // if (Arr[i] < Arr[j]) {
//         //   var x = Arr[i];
//         //   Arr[i] = Arr[j];
//         //   Arr[j] = x;
//         // console.log(Arr[i],Arr[j])
//         // console.log(Arr[i],[j])
//         console.log(i,j)
// }
// }

// min = Arr.shift();
// max = Arr.pop()

// console.log(min,max)



// Math Object 

function req1() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  
  req1();