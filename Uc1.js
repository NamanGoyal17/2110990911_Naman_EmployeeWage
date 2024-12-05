const prompt = require('prompt-sync')();
// Use to Calculate Attenddence
function checkattendence(){
    //Generate a random number
    let employee = Math.floor(Math.random()*11);
    if(employee < 1){
        var status = false;
    }
    else{
        var status = true;
    }
    return status;
}
var ans = checkattendence();
if(ans){
    console.log("Employee is Present");
}
else{
    console.log("Employee is absent");
}

// Use to calculate the daily wage
function getrandomValue(){
    const numbers = [0,4,8];
    const randomIndex = Math.floor(Math.random()*numbers.length);
    return numbers[randomIndex];
}
function calculatewage(){
    const hour = getrandomValue();
    let Totalwage = 0;
    if(ans){
        switch (hour){
            case 0:
                Totalwage = 0;
                //console.log("He did not do work "+ Totalwage);
                break;
            case 1:
                Totalwage = Totalwage+20;
                //console.log("He is per hour worker and his salary is : " + Totalwage );
                break;
            case 4:
                Totalwage = Totalwage +(4*20);
                //console.log ("He is a part time worker and his salary is: "+Totalwage);
                break;
            case 8:
                Totalwage = Totalwage + (8*20);
                //console.log ("He is a full time worker and his salary is: "+ Totalwage);
                break;
        }
    }
    return {Totalwage,hour};
}
//console.log(calculatewage());


//Refactor the Code to write a function to get work hours
function totalhour(){
    let Totalhour = 0;
    let {Totalwage,hour}=calculatewage(); 
    if(ans){
        Totalhour = hour;
    }
    return {Totalwage,Totalhour};
}
//console.log("The total daily working hour "+totalhour().Totalhour);

//Calculating Wages for a Month assuming 20 Working Days in a Month
function monthlywage(month){
    let monthlywage = 0;
    let monthlyhour = 0;
    let {Totalwage,Totalhour} = totalhour();
    
    for(let i=0;i<20;i++){
        monthlywage = monthlywage + Totalwage;
        monthlyhour = monthlyhour + Totalhour;
    }
    return {month,monthlywage,monthlyhour};
}
//console.log(monthlywage());

/*
Calculate Wages till a
condition of total
working hours of 160 or
max days of 20 is
reached for a month
*/
// function monthlyusingwhile(){
//     let i = 0;
//     let totalmonthlywage = 0;
//     let totalmonthlyhour = 0;
//     let {Totalwage,Totalhour} = totalhour();
//     while(i<20){
//         totalmonthlywage = totalmonthlywage + Totalwage;
//         totalmonthlyhour = totalmonthlyhour + Totalhour;
//         i++;
//     }
//     console.log(totalmonthlyhour);
//     console.log(totalmonthlywage);
// }
// monthlyusingwhile();

// Yearly salary of worker and its a on a uc6

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function yearlysalary() {
    let employee_monthlywage = [];
    for(let i=0;i<12;i++){
        const salary = monthlywage(month[i])
        //salary.month = month[i];
        employee_monthlywage.push(salary);
    }

    return employee_monthlywage;
    //
}
//console.log(yearlysalary());

// uc7 now add employee
let data = []
function addemployee(){
    const n = parseInt(prompt("Enter the number of emplyees: "));
    for(let i=1;i<=n;i++){
        const name =prompt("Enter the name of the employee: ");
        data.push(name);
        data.push(yearlysalary());
        
    }
    return data;
}
//console.log(addemployee());
//addemployee();

// uc8 find the data of employee with the help of employee name
function find(){
    let name = prompt("Enter the name ");
    let index = data.indexOf(name);
    return data[index+1];
}
addemployee();
console.log(find());
