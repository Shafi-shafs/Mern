// Arthametic Operators

let x = 5;
let y = 3;

console.log('x + y = ', x + y);  

console.log('x - y = ', x - y); 

console.log('x * y = ', x * y);

console.log('x / y = ', x / y); 

console.log('x % y = ', x % y);  

console.log('x ** y =', x ** y);

// relatinal operaters

console.log(x<y);
console.log(x>y);
console.log(x<=y);
console.log(x==y);
console.log(x!=y);

// logical operaters

console.log((x > 2) && (y < 2));
console.log((x>2) || (y<2));

// assignment operaters 

console.log(x+=5);
console.log(x-=2);


// unary operater

x++;
console.log(x)

// postincrement

console.log(x++);

// pre incrementt

console.log(--y);

// ternary operater/

const age =20;
const checkEligibility = (age>20)? "your are eligible to vote":
                                    "not eligible";

console.log(checkEligibility)
