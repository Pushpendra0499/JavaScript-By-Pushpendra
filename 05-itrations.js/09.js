// const myNums = [1,2,3];

// const myTotal = myNums.reduce(fucntion (accumulator, currval) {
//     return accumulator + currval;
// }, 0)

// console.log(myTotal);

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (accumulator, currval) {
    console.log(`acc: ${accumulator} and currval : ${currval}`);
    return accumulator + currval;
}, 0);  // here we can give 3 vakue or any number <element of arr

console.log(myTotal);  ///6



/////////////// _+++++++++++++++++++++++ 
// 8:56:00
