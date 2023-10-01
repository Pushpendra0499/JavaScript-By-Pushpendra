// const userEmail ="Pushpendra.com"
// const userEmail =[]  //Got user email // man lia jata hai ki value true hai
// const userEmail ="" ///Don't have user email.


// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email")
// }

/*
 1. false values ==>
false, 0, -0, bigInt, 0n, "", null, undefined, NaN

2. truthy values ==>
"0", 'false', " ", [], {}, function(){}, 

*/


const userEmail =[]

if(userEmail.length ===0){
    console.log("Array is empty"); // Array is empty
}


const eemptyObj ={}

if (Object.keys(eemptyObj).length===0) {
    console.log("Object is empty")
}