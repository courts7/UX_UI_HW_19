console.log ("Hello World");

$( "button" ).click(function() {
    $( "p" ).toggle();
  });

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
 