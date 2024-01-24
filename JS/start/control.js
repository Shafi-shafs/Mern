// let marks = 71;
// const marks= 55;
// var marks = 90;

// let marks = prompt("enter your marks")

function getUser() {
    var marks = document.getElementById("usermarks").value;

    var result = document.getElementById("result");
    
    if (marks >= 80) {
        result.textContent = "First Class";
    } else if (marks > 70 && marks < 80) {
        result.textContent = "Second Class";
    } else if (marks >= 50 && marks < 70) {
        result.textContent = "Third Class";
    } else {
        result.textContent = "Fail";
    }

    
}





// if (marks >= 80) {

//     console.log("First Class");
//     // document.write("First Class");

// }

// else if (marks > 70 && marks < 80) {

//     console.log("Secound class");
//     // document.write("Secound class");

// }

// else if (marks >= 50 && marks < 70) {

//     console.log("Third Class");
//     // document.write("Third Class");
// }
// else {

//     console.log("fail")
//     // document.write("fail");
// }

// const marks= 55;
// let marks = 70;
// var marks = 55;