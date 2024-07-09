// Your code goes here
document.addEventListener("DOMContentLoaded", callBack, (e) =>
    {
    console.log("The DOM has Loaded")
})

function callBack (e){
    let change = document.getElementById("text")
    change.innerHTML = "This is really cool!"

}
console.log(change())