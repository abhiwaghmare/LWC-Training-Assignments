import { employeeInfo } from "./employeeInfo.js";
console.log(employeeInfo);

const getEmployee = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(employeeInfo)
    }, 1500);
});

let allEmps = [];
getEmployee.then((resData) => {
    allEmps = resData;
    allEmps.map((emp) => {
        emp.company = "Deloitte";
        emp.isYoungest = false;
        displayCards(allEmps);
        clickEvent();
        emp.age = calculateAge(emp);

    });
    document.getElementsByClassName("young")[0].innerHTML = "Youngest Employee: " + YoungestEmp(allEmps);
    bonus(allEmps);
    richest(allEmps);

});

function displayCards(allEmps) {
    let str = "";
    allEmps.map((elem) => {
        str += `<div class="grid-item"><h2>Company Name : ${elem.company}</h2><h2>Full Name : ${elem.fname} ${elem.lname}</h2><h2>Level : ${elem.role}</h2><h2>Employee ID : ${elem.id}</h2></div>`
    })
    document.getElementsByClassName("grid-Container")[0].innerHTML = str;

}
// function newData(elem) {
//     let newstr = "";
//     allEmps.map((elem) => {
//         newstr += `<div class="grid-item"><h2>Full Name : ${elem.fname} ${elem.lname}</h2><h2>DOB : ${elem.dob}</h2><h2>Level : ${elem.role}</h2><h2>Salary : ${elem.salary}</h2><h2>Expected Bonus : ${elem.bonus}</h2></div>`
//     })
//     document.getElementsByClassName("grid-Container")[0].innerHTML = newstr;

// }

function clickEvent() {
    newstr = "";
        elem.addEventListener("click", function () {
            newData = `<div class="grid-item"><h2>Full Name : ${elem.fname} ${elem.lname}</h2><h2>DOB : ${elem.dob}</h2><h2>Level : ${elem.role}</h2><h2>Salary : ${elem.salary}</h2><h2>Expected Bonus : ${elem.bonus}</h2></div>`
            document.getElementsByClassName("card").innerHtml = newstr + newData;
        })
}

function calculateAge(elem) {
    var dob = new Date(elem.dob);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
}

function YoungestEmp(allemp) {
    let min_int = 999;
    let youngestName = "";
    allemp.map((elem) => {
        if (elem.age < min_int) {
            min_int = elem.age;
            youngestName = elem.fname + " " + elem.lname;
        };
    });
    return youngestName;
}

function bonus(allEmps) {
    allEmps.map((emp) => {
        if (emp.role = "Level 1") {
            emp.bonus = 0.1 * emp.salary;
        }
        if (emp.role = "Level 2") {
            emp.bonus = 0.15 * emp.salary;
        }
        if (emp.role = "Level 3") {
            emp.bonus = 0.2 * emp.salary;
        }
        emp.final = emp.bonus + emp.salary;
    });
}


function richest(allEmps) {
    var richman = "";
    var hmoney = 0;
    allEmps.map((emp) => {
        if (hmoney < emp.salary) {
            hmoney = emp.salary;
            richman = "Highest Paid Employee : " + emp.fname + " " + emp.lname;
        }
    })
    document.getElementsByClassName("showcase")[0].innerHTML = richman;

}




