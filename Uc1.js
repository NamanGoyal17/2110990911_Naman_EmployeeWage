// Use to Calculate Attenddence
function checkattendence(){
    //Generate a random number
    let employee = Math.floor(Math.random()*11);
    if(employee < 1){
        console.log("Employee is Absent");
    }
    else{
        console.log("Employee is Present");
        calculatewage();
    }
}
checkattendence();

// Use to calculate the daily wage
function calculatewage(){
    // const array of valid numbers
    const numbers = [0,1,4,8];
    const randomIndex = Math.floor(Math.random()*numbers.length);
    let hour = numbers[randomIndex];
    //console.log(hour);
    let Totalwage = 0;
    switch (hour){
        case 0:
            Totalwage = 0;
            console.log("He did not do work "+ Totalwage);
            break;
        case 1:
            Totalwage = Totalwage+20;
            console.log("He is per hour worker and his salary is : " + Totalwage );
            break;
        case 4:
            Totalwage = Totalwage +(4*20);
            console.log ("He is a part time worker and his salary is: "+Totalwage);
            break;
        case 8:
            Totalwage = Totalwage + (8*20);
            console.log ("He is a full time worker and his salary is: "+ Totalwage);
            break;
    }
}
