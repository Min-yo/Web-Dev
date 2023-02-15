let login = prompt("login", "")
if(login == "" || login == null){
    alert("Canceled")
}
else if(login == "Admin"){
    let password = prompt("password", "")
    if(password =="TheMaster"){
        alert("Welcome!")
    }
    else if(password == "" || password==null){
        alert("Canceled")
    }
    else{
        alert("Wrong password")
    }
} else{
    alert("I don't know you")
}