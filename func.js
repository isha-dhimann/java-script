// extra questions

// let a=10
// let b=20
// let c=a+b
// console.log(a + "+" + b + "=" + c);

// let a=10
// let b=20
// let c=a+b
// console.log(`${a}+${b}=${c}`);
// console.log(`sum of ${a}+${b}=${c}`);
// `` this symbol are backtic its only used for the doller sign m.

//  FUNCTIONS CONCEPT

// type 1

// function sum(a,b){
//    console.log(a+b)
// }
// sum(10,20);

// add(10,20,30)
// function add(a,b,c){
//     console.log(a+b+c)
// };  Its follow the hosting concepts its means top se bhi execute hogaa

// type 2

// checknumberoddandeven(21);
// function checknumberoddandeven(n){
//     if(n%2==0){
//         console.log("number is even");
//     } else {
//         console.log("number is odd");
//     }
// }
// checknumberoddandeven(20);

// function checknumberoddandeven(n){
//     if(n%2){
//         console.log(n+" is even");
//     } else {
//         console.log(n+"is odd");
//     }
// }
// checknumberoddandeven(21);
// checknumberoddandeven(100);

// type 3(HOW to works arguments)

// function sum (a,b) {
// console.log(a+b);
// }
// sum(10,20,30,40);agr hum isme kitne bhi arguments k sath call krege tho koi frk nhi pdtaa.

// function sum(...a){
// console.log(a);
// }
// sum(10,20,30);

// function sum(){
//     console.log(arguments[2]);
// }
// sum(10,20,30);
// iska mtlb h ki jo bhi extra data h who hmara arguments m jayegaa hmeshaa

// function sum (a=0,b=0){
//     console.log(a)
//     console.log(b)
//     console.log(arguments);
// }
// sum(40,60,100);


// agr kisi function k name ko print krege tho
// function fn1(x){
// console.log(x)
// }
// let a=40
// console.log(a)
// console.log(fn1)

// function prime(n){
//     for(let i =2; i <n/2; i++) {
//         if(n%i==0) return false;
//     }
//     return true;
// }

// for(let i=1;i<=100;i++){

// if(prime(i)){
// console.log(i);
// }
// }

// function area(a,b){
// if(b==undefined){
//     let area=22/7* a*a;
// console.log("area of circle="+area);
// } else{
// let area= a*b;
// console.log("area of ractangle="+area);
// }
// }
// area(7);

// let a=10;
// var b=20;
// if(true) {
//     let a= 500;
//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);

// 
// function sum(a,b) {
// console.log(a+b);
// }
// // let fn=sum;
// fn(10,50)

// agar kisi function ko variable m store krte h ,declare krte h  function krte tym tho usko hum
// function expression bolte h.

//  let fn =function sum(a,b) {
// console.log(a+b);
// }
// fn(10,50);

// function expression or anonomyus function only declare top to bottom but normal function declare only both top bhi ...or bottom bhi
// ANONOMYUS(jiska koi name nhi pta hota)....its store as a variable
//  let sum=function (a,b) {
//     console.log(a+b);
//  }
// sum(10,50);


// New version of js m dont use the function its use in arrow function
// Arrow Function

//  let sum =(a,b) => {
//     console.log(a+b);
//  }
// sum(10,50);

// let fn =() =>{
//     console.log("my name is isha")
// }
// fn();

// const fn = () =>{
//     console.log("Muskan")
// }
// fn();

// let sum =(a,b)=>{
//     return a+b
// }
// console.log(sum(10,20));

// let sum = (a,b) => a+b;
// console.log(sum(10,20));

// function operation (fn){
// let s = fn (20,40);
// console.log(s);
// }
// operation(sum);

// function fn1(){
//     return 0;
    
// }
// let s=fn1();
// console.log(s);

// function outer(){

// let inner =()=>{
//     console.log("ishaa")
// }
// inner();
// return 0 ;
// }
// outer();


// // function statements
// function hey(){
//    console.log( "raksha bhandan")
// }
// hey();


// // function expression ( variable ki value function)
// let fnc=function(){
// console.log("my name is ishaa")
// }
// fnc();   

// arrow function
// let fnc =() =>{
//     console.log("summer vacations")
// }
// fnc();

// function print(a1){
// console.log(`${a1}`)
// }
// print("screenshot");
// print("images");
// print("audios");
// print("videos");


// function parameters and arguments
// function add (a,b){
//     console.log (a+b)
// }
// add (20,60);

// agar koi value nahi hui tho use default paramrter
// Step -1
// function add(v1=,v2=){
//     console.log(v1+v2);
// }
// add();

// default value use 0
// step -2
// function add(v1=0,v2=0){
//     console.log(v1+v2);
// }
// add();

// step-3
// function add(v1=1,v2=4){
//     console.log(v1+v2);
// }
// add();

// // step-4
// function add(v1=0,v2=0){
//     console.log(v1+v2);
// }
// add(5,9);


// jab arguments bhut saare ho to hme utne hii parameter bnane pdege,isse bchne k liye hum
// bchne k liye use ...koi bhi value ()


// function abcd(...a){
// console.log(a)
// }
// abcd(1,2,3,4,5,6,7,8,9,10);


// function abcd(x,y,z,...a){
// console.log(x,y,z,a)
// }
// abcd(1,2,3,4,5,6,7,8,9,10);

// return (jha se aaye ho whi dalna h),return is always inside function
// function abcd() {
//     return 20;
// }

//   let val = abcd();
// console.log(val);

// function abcd(a) {
//     return 20 + a;
// }

//   let val = abcd(20);
// console.log(val);


// function abcd (val) {
//    val();
// }

// abcd(function (){
//     console.log("isha dhiman");
// });














































