var data = JSON.parse(localStorage.getItem("data"))
console.log(data["user"][data["current"]])
var p = ""
for(var i of data["user"][data["current"]]["history"]){
    p+=i+"</br>"
}
if(p=="")p="EMPTY"
document.getElementById('message').innerHTML = p;