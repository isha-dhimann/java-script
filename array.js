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


// let arr=Array.of(1,2,3,4,5);
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