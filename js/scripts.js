//biz logic
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
// Check if the user is ready to play!
confirm("Ready?")

// Prompt user and check their age.
var age = prompt("How old are ya?");

if ( age < 13 )
{
    console.log("You must be at least 13 to play, but I like you so go ahead.");
}
else
{
    console.log("YEah, you're old enough... Go ahead!");
}
