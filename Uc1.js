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
function monthlywage(){
    let monthlywage = 0;
    let monthlyhour = 0;
    let {Totalwage,Totalhour} = totalhour();
    
    for(let i=0;i<20;i++){
        monthlywage = monthlywage + Totalwage;
        monthlyhour = monthlyhour + Totalhour;
    }
    return {monthlywage,monthlyhour};
}
console.log(monthlywage());