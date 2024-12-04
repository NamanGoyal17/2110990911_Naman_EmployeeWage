function checkattendence(){
    let employee = Math.floor(Math.random()*11);
    console.log(employee);
    if(employee < 1){
        console.log("Employee is Absent");
    }
    else{
        console.log("Employee is Present");
    }
}

checkattendence();