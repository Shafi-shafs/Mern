// Using for loop
console.log("Using for loop:");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Using while loop
console.log("\nUsing while loop:");

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// Using do-while loop
console.log("\nUsing do-while loop:");

let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);


console.log("  ");
// for of loop
// access array -- itereteres

console.log("using for of loop")
const array = ['sai', 'samad', 'afridi', 'subani'];

for(let x of array){

  console.log(x)
};



console.log("  ");
// for in loop
// access object -- itereteres

console.log("using for in loop")
const object = {

  name : "samad",
  roll : 5564654,
  mobile : 6489431894564
};

for(let x in object){

  console.log(object[x]);
};

