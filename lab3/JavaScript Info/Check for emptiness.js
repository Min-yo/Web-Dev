let schedule = {};
function isEmpty(obj){
    let sum = 0;
    for(let key in obj){
        sum++
    }
    return sum ==0;
}

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false