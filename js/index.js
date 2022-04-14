console.log ("Hello World");

let myLogo = document.getElementById('myLogo');
document.getElementById('myButton1').onclick = function(){
    myLogo.classlist('fade');

}
document.getElementById('myButton').addEventListener('click', myFunction);

function myFunction() {
    alert ("404 Error Projects page coming soon");

if (this.hash !== "") {
    
    event.preventDefault();
var hash = this.hash;
$('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function() {
    window.location.hash = hash;
});
}
  
}