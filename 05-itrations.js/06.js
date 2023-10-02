//Timming 8:24:29
//const coding = ["js","ruby","java","python","c++"]


// const values = coding.forEach( (item) =>{
//     console.log(item);
    
// })
// console.log(values) // undefined


// const values = coding.forEach( (item) =>{
//    // console.log(item);
//     return item;
    
// })
// console.log(values)  // undefined 



const myNums =[1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((num) => num>4)
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


//+++++++++++++++++++++++++++++++++++++++++++++++++
// const newNums = myNums.filter((num) => {
//    return num > 4   // bina return ke empty array print hoga
//    // scope ke sath retrun use krna hi padega  ==> []
// })

// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ] ab shi hai


// +++++++++++++++++++++++++++++ By foreach loop+++++++++++++++
// const newNums = myNums.filter((num) => {
//    return num > 4   
// })

const newNums =[]

myNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
    // else{
    //     console.log("Found Error")
    // }
});

console.log(newNums);

/* Output
Found Error
Found Error
Found Error
Found Error
[ 5, 6, 7, 8, 9, 10 ]
*/







