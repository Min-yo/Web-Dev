function readNumber(){
    let a;
    do{
        a = prompt("Valid numeric!", 0)
    } while(!isFinite(a));
    if(a == null || a == "") return null;
    return +a;
}