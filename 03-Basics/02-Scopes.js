// let var const
var c=300;
let a =40;
let b =15;


/*  +++++++++++++++++++++++++ Note +++++++++++++++++++++++++++ */
/*
 this area is global scope 
 if(){
    this area is block scope
 }
*/

if(true){
    let a=10;
    const b=20;
    // var c =30; 
    c=30 // we can write in this way without var


    console.log("Inner value of a :(in block scope)",a)
    console.log("Inner value of b :(in block scope)",b)
}


// console.log(a)
// console.log(b)
// console.log(c)


for (let i =0; i < array.length; i++) {
    const element = array[i];

}

console.log(a); // a is not defined because a is in other scope(out of scope)
console.log(b); // b is not defined because b is in other scope(out of scope)
console.log(c); // 30 c is a valid for other scope 
// Timming 5:14:00
