//4:36:00
// console.log("H");
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("H")


// function sayMyName(){
// console.log("H");
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("Hello")
// }

// sayMyName // this is no shown error
// sayMyName()



// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2 );
// }


// addTwoNumbers()  //NaN
// addTwoNumbers(2,"4") //24
addTwoNumbers(3,4) //7
// addTwoNumbers(2,a) //a is not defined(Error)
// addTwoNumbers(2,null) //2

// addTwoNumbers(2,"a")  // 2a
// addTwoNumbers("a","b") //ab

function addTwoNumbers(num1,num2){
//    let result =num1+num2;
//    console.log("Pushpendra kuamr"); // string will be print in the output
//    return result;
//    console.log("Pushpendra kuamr"); // string will not be print in the output

    return num1+num2; // yhis is inside the scope
}
//  Timming 4:44:00
const result =addTwoNumbers(3,5) 
//   console.log("Result :",result) //undefined how to go undefined value

function loginUserrMessage(username){ // <== loginUserrMessage(username ="sam")
    if(username===undefined) {  // <== we can use also this method if(!username)
        console.log("Please enter a username")

        // ("") empty string will be taken like false value
        // return 
        // output will be undefined // if here we use return value than code does not exist in the next itration

    }
    return `${username} just loggeg in`
}

// loginUserrMessage("pushpendra")// this value will not print in the output

console.log(loginUserrMessage("pushpendra")); //  pushpendra just loggeg in   string print in the output
console.log(loginUserrMessage("")); // just loggeg in
console.log(loginUserrMessage());  //undefined just loggeg in




