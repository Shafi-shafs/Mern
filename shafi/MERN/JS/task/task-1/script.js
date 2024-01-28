// // let eid = 123;
// // let ename = "samad";
// // let sal = 12000;
// // let allow = 2000;
// // let hra = 5000;


// // let total = sal + allow + hra ;

// // if(total > 20000){

// //     console.log(total);
// // } else if( total < 20000){
    
// //     total = total + bonus;
// //     console.log(total)
// // }


let eid = prompt("Employee id");
let ename = prompt("Employee name");
let x = parseFloat(prompt("Total salary"));
let y = parseFloat(prompt("Your allowances"));
let z = parseFloat(prompt("Your HRA"));

document.write(eid);
document.write(ename);

function total(sal, allow, hra) {
    let totalAmount = sal + allow + hra;
    let bonus = 500;

    if (totalAmount > 20000) {
        document.write(totalAmount);
    } else if (sal < 20000) {
        totalAmount = totalAmount + bonus;
        document.write(totalAmount);
    }

    return totalAmount;
}

total(x, y, z);


