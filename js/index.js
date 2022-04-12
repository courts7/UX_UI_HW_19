console.log ("Hello World");

let myLogo = document.getElementById('myLogo');
document.getElementById('myButton').onclick = function(){
    myLogo.classlist('fade');

}
document.getElementById('myButton').addEventListener('click', myFunction);

function myFunction() {
    alert ("404 Error will be fix shortly");
}