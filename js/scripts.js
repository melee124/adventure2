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


function stairsOrDoor() {
    var response = document.getElementById("response").value;

    if (response === 'TAKE STAIRS') {
      document.getElementById("stairs").classList.toggle('hidden');
      document.getElementById("story").classList.toggle('hidden');
    } else if (response == 'OPEN DOOR') {
      document.getElementById("Door").classList.toggle('hidden');
      document.getElementById("story").classList.toggle('hidden');
    } else { document.getElementById("error").innerHTML = "You are a Wuss!" }
}

//UL Logic
