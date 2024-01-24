// iterables
// String, arry, set map 

const  name = 'rahul sharma';

// for(let x of name){

//     console.log(x);
// }

// for (let i = name[0]; i < name.length; i++) {
//     console.log(i);
// }

// foreach 
// const nameArray = name.split('');
// nameArray.forEach(element => {
//   console.log(element)    
// });


// sett
// set 

const snames = new Set(['hello', 'hai', 'are', 'you']);

// for (let x of snames){
//     console.log(x)
// }


// snames.forEach(element => {
//     console.log(element)    
// });




// map 

const product = new Map([['samsung', 20000], ['iphone', 500000], ['redmi', 9000]]);

// for (var x of product){

//     console.log(x)
// }

product.forEach((value, key) => {
    console.log(key + ' - ' + value);
});