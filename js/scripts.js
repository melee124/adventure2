//biz logic
// Check if the user is ready to play!
confirm("Ready?")

// Prompt user and check their age.
var age = prompt("This adventure can get quite dangerous. How old are ya?");

if ( age > 13 )
{
    console.log("Welcome adventurer! You're all set to play!");
}
else ( age < 13 )
{
    console.log("You do know you are too young to face such grave danger?");
}


function mazeOrWuss() {
    var response = document.getElementById("response").value;
    debugger;
    if (response === 'ENTER MAZE HOUSE') {
      document.getElementById("maze").classList.toggle('hidden');
      document.getElementById("story").classList.toggle('hidden');
    } else if (response == 'WUSS OUT') {
      document.getElementById("Wuss").classList.toggle('hidden');
      document.getElementById("story").classList.toggle('hidden');
    }
}
function whichDoor() {
  var chooseDoor = document.getElementById("chooseDoor").value;

    debugger;
  if (whichDoor === '1') {
    document.getElementById("mazeRoom").classList.toggle('hidden');
    document.getElementById("maze").classList.toggle('hidden');
  } else if (whichDoor === '2') {
    document.getElementById("attic").classList.toggle('hidden');
    document.getElementById("story").classList.toggle('hidden');
  } else { document.getElementById("basement").classList.toggle('hidden');
    document.getElementById("story").classList.toggle('hidden');
  }
}


//UL Logic
//$(document).ready(function() {
//  $("#form-group form").submit(function(event) {
//    var inputheroName = $("input#heroName").val();
