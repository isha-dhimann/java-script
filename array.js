// BUILT - IN FUNCTIONS

// function dream(){
//     console.log("my name is isha")
// }
// setTimeout(dream,3000);

// function dream(){
//     console.log("ishaa anchlas")
// }
// setInterval(dream,3000);

// anonomyus
// setTimeout(function (){
//     console.log("isha");
// }, 3000);

// ARRAYS(collections of elements,char,numbers.....its denoted by the square brackets[]

// step -1
// let ar = [10,20,30,40,50,60,70]
// console.log(ar)

// let ar=[]
// console.log(ar);

// let ar = [10,20,30,40,50,60,70]
// console.log(ar[3])

// step-2

// let ar=new Array(6);
// ar[0]=20;
// console.log(ar);

// let arr=A
// rray.of(1,2,3,4,5);
// console.log(arr);

// step -3

// let str = "ishaa"
// let ar= Array.from(str)
// console.log(ar);

// let str = "my name is isha"
// let ar= Array.from(str)
// console.log(ar);

// step-4(others array are stored)

// let ar1 =[100,200,300,400,500]
// let ar2=[10,20,30,40,50,60]
// let ar =[ar1,ar2]
// console.log(ar);

// let ar1 =["isha" , "muskan" , "nikitaa"]
// let ar2=["veduu" , "musuu" , "ishuu"]
// let ar =[ar1,ar2]
// console.log(ar);

// let ar1 =["isha" , "muskan" , "nikitaa"]
// let ar2=[1000,2000,3000,4000]
// let ar =[ar1,ar2]
// console.log(ar);

// VARIOUS FUNCTION USED IN ARRAYS
// PUSH

// let ar =[100,200,300,400]
// ar.push(1000,2000)
// console.log(ar);

// let ar =[100,200,300,400]
// ar.push("isha" , "muskan")
// console.log(ar);

// POP

// let ar = [1,2,3,4,5,6]
// ar.pop()
// ar.pop()
// console.log(ar);

// let ar =["isha" , "ishuu"]
// ar.pop()
// console.log(ar);

// SHIFT(queue)

// let ar = [10,20,30]
// ar.shift(100,200)
// console.log(ar);

// UNSHIFT (add data starting)

// let ar = [10,20,30,40]
// ar.unshift("isha","musu" , 100000)
// console.log(ar);

// let ar = [10,20,30,40]
// ar.unshift(9000)
// console.log(ar);

// CONCAT(combibe)

// let ar1=["isha","muskan" , "veduu"]
// let ar2=["vishali" , "tannu"]
// let ar = ar1.concat (ar2)
// console.log(ar);

// let ar1=[100,200,300]
// let ar2=[400,500,600]
// let ar = ar1.concat (ar2)
// console.log(ar);

// FOREACH(har ek member k liye call)

// step-1
// let ar=[10,20,30,40,50]
// ar.forEach(item => console.log(item));

// step-2
// let ar=[10,20,30,40,50]
// ar.forEach(function fn(item)
// {
//     console.log(item)
// });

// MAP(all elements are mapped but only returns the new values)

// let ar=[1,2,3,4]
//  let newArr=ar.map((item)=>{
// return item * 2
// }
// );
// console.log(newArr);

// let ar=[100,200,300,400,500]
//  let newArr=ar.map((item)=>{
// return item * 2
// }
// );
// console.log(newArr);

// let ar=[1,2,3,4,5,6]
//  let newArr=ar.map((item)=>{
// return "ishadhiman"
// }
// )
// console.log(newArr);

// let ar=[5]
//  let newArr=ar.map((item)=>{
// return item * 5
// }
// )
// console.log(newArr);

// step - 2

// let ar = [10,20,30,50]
// let newArr = ar.map((item) => item * 3)
// console.log(newArr);

// let ar = [10,20,30,50]
// let newArr = ar.map((item) => item * 10)
// console.log(newArr);

// let ar = [10,20,30,50]
// let newArr = ar.map((item) => "ishaanchlas")
// console.log(newArr);

// let ar = [10,20,30,50]
// let newArr = ar.map((item) => "Rainy Season")
// console.log(newArr);

// Extra questions............

// let marks = [10,30,60,90,80,70]
// console.log(marks[0]);

// let arr = [10, 20, 50, 60];
// let newarr = arr.push(1000,67);
// console.log(arr);


// let arr = [10, 20, 50, 60];
// let newarr = arr.push(1000,67);
// console.log(arr);
// console.log(newarr);

// let arr = [20,40,60,80]
// arr.pop()
// console.log(arr);

// let arr = [20,40,60,80]
// arr.shift()
// console.log(arr);

// let arr = [20,40,60,80]
// arr.unshift(100)
// console.log(arr);


// SPLICE (bich se value are remove)
// let arr = [1,2,3,4,5]
// arr.splice(2,1)
// console.log(arr);

// let arr = [1,2,3,4,5,6]
// arr.splice(2,3)
// console.log(arr);

// let arr = ["isha" , "muskan" , 10,20,30,70]
// arr.splice(1,4)
// console.log(arr);

// let arr = ["isha" , "muskan" , 10,20,30,70,"soma"]
// arr.splice(1,6)
// console.log(arr);

// SLICE (main array are don't change its return the new array)

// let arr = [20,30,40,50]
// let  newarr = arr.slice(0,3)
// console.log(newarr);
// console.log(arr);

// let arr = [1,2,3,4,5];
// let  newarr = arr.slice(0,3);
// console.log(newarr);

// let arr = ["isha" , "muskan" , 10,20,30,70]
//  let newarr=arr.slice(1,4)
// console.log(newarr);

// REVERSE (only change main array )

// let arr=[10,20,30,40,50]
// arr.reverse()
// console.log(arr);

// let arr = ["isha" , "muskan" , 10,20,30,70]
// arr.reverse()
// console.log(arr);

// SORT (orders = acending , decending)

// let arr = [11,56,100,3,7]
// arr.sort(function(x,y){
//     return x - y 
// }
// );
// console.log(arr);

// let arr = [11,56,100,3,7]
// arr.sort(function(x,y){
//     return y - x 
// }
// );
// console.log(arr);

// let arr = [11,56,100,3,7,"isha"]
// arr.sort(function(x,y){
//     return y - x 
// }
// );
// console.log(arr);


// MAP , FILTER , REDUCE , FOREACH

// let arr = [11,62,3,4,25]
// arr.forEach(function(val){
// console.log(val)
// }
// );

// let arr = [11,62,3,4,25]
// arr.forEach(function(val){
// console.log(val + 5)
// }
// );

// let arr = [100,200,300]
// arr.forEach(function(item){
// console.log(item + 10)
// }
// );

// let arr = [100,200,300,"isha"]
// arr.forEach(function(item){
// console.log(item + 10)
// });
// 

// FILTER

// let arr = [1,2,3,4,5,6,7,8]
//  let newarr = arr.filter(function(val){
//     if (val > 3)  return true ;
// });
// console.log(newarr);

// REDUCE

// let arr = [1,2,3,4,5,6];
// let ans = arr.reduce(function(accumulator , val) {
//     return accumulator + val 
// } , 0)
// console.log( ans);

// let arr = [1,2,3,4,5,6];
// let ans = arr.reduce(function(accumulator , val) {
//     return accumulator + val 
// } , 1)
// console.log( ans);


// MAP

// let ar=[1,2,3,4]
//  let newArr=ar.map((item)=>{
// return item * 2
// }
// );
// console.log(newArr);

// let ar=[100,200,300,400,500]
//  let newArr=ar.map((item)=>{
// return item * 2
// }
// );
// console.log(newArr);

// INDEXOF

// let ar = [10,20,30,40,50,60]
// console.log(ar .Indexof(10));
// console.log(ar. lastIndexOf(30));

// let ar = [100,200,"isha"]
// console.log(ar. lastIndexOf("isha"));

// let ar=[1,2,3,4,5,6,7,8,9,10]
// console.log(ar. lastIndexOf(8));


// INCLUDES (true/false)

// let arr = [100,200,300,400,500]
// console.log(arr.includes(300));

// let arr = [100,200,300,400,500]
// console.log(arr.includes(600));

// let arr = [100,200,300, "isha","musuu",400,500]
// // console.log(arr.includes("ishu"));
// console.log(arr.includes("musuu"));


// QUESTIONS-ANSWER

// let arr = ["apple" , "banana" , "mango"]
// console.log(arr);

// let colors = ["red", "green", "blue", "yellow"];
// console.log(colors[colors.length - 1]);

// let arr = [1,2,3,4,5,6,7]
// let max = Math.max(...arr)
// console.log(max);

// let arr = [1,2,3,4,5,6,7]
// let min = Math.min(...arr)
// console.log(min);

// let arr = [3, 7, 1, 9, 2, 5];
// let sum = arr.reduce((acc,curr)=> acc + curr,0);
// console.log(sum);

// let arr=[100,200,300,400]
// let sum = arr.reduce((acc,curr)=> acc + curr ,0);
// console.log(sum);

// let ar = [1,2,3,4,5]
// ar.splice(1,2)
// console.log(ar);

// let arr = [1,2,3,4,5,6,7,8]
// arr.filter(function(val){
//     if(val>4)  return true;
// }
// )

 // let arr=[100,200,300,400]
// let sum = arr.reduce((acc,curr)=> acc + curr ,0);
// console.log(sum);



// SOME , EVERY , FILL , JOIN , FIND 

// let arr =[1,2,3,4,5,6]
// console.log(arr.find((i) => i > 5));

// let arr=[3,4,5,6,7,8,9]
// console.log(arr.find((i) => i<5));

// let arr = [10,30,32,90]
// let any = arr.some(function(val){
//     return val > 50
// });
// console.log(any)

// let arr = [10,30,32,90]
// let any = arr.some(function(val){
//     return val < 50
// });
// console.log(any);

// let arr =[10,30,32,90,100]
//  let any = arr.every(function(val){
//     return val > 150
//  });
//  console.log(any)

// let arr =[10,30,32,90,100]
//  let any = arr.every(function(val){
//     return val > 2
//  });
//  console.log(any)

// let arr =[10,30,32,90,100]
// let s = arr.join( "@")
// console.log(s);

// let arr =[10,30,32,90,100]
// let s = arr.join( "  ")
// console.log(s);

// let arr =[10,30,32,90,100]
// let s = arr.join( "##")
// console.log(s);

// let arr =[10,30,32,90,100]
// let s = arr.join( "---")
// console.log(s);

// let arr =[10,30,32,90,100]
// console.log(arr.fill(0,2,4,6));

// let arr =[10,30,32,90,100,80]
// console.log(arr.fill(0,2,4,6));

// let arr = [1,2,3,4,5,6]
// let [a,b, ,d] = arr;
// console.log(a,b,d)

// let arr=[1,2,3,4,5,6,7,8,9]
// let arr2 = [...arr]
// console.log(arr);


// let colors= ["green" , "yellow"];
// colors.splice(1,0,"red" , "blue")
// console.log(colors);