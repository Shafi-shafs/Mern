// function scope
function variable() {

    var pid = 1001;
    var name = "Nokia";

    console.log(pid + " " + name);

}

variable();
console.log(pid);

for (var i = 1; i < 10; i++) {

    console.log(i)
}

console.log(i)

// global scope

var pid = 1001;
var name = "Nokia";

function variable() {



    console.log(pid + " " + name);

}

variable();
console.log(pid);

// block scope  

{

    var pid = 1001;
    var name = "Nokia";
    console.log(pid + " " + name);


}

// console.log(pid + " " + name);


// draback of var 

var j = 55;
var j = 44;
console.log(j)
// advantage of let 

// let k = 55;
// let k = 55;
console.log(k)

// const l = 444;
// const l = 324;
console.log(j)

// reassign with let possible with const no possible 

let p = 12;
    p = 45;
console.log(p);

const q = 45;
      q = 458;
console.log(p);





