function stairsOrDoor() {
    var response = document.getElementById("response").value;

    if (response === 'TAKE STAIRS') {
      document.getElementById("stairs").classList.toggle('hidden');
      document.getElementById("story").classList.toggle('hidden');
    } else if (response == 'OPEN DOOR') {
      document.getElementById("door").classList.toggle('hidden');
      document.getElementById("story").classList.add('hidden').toggle('hidden');
    } else { document.getElementById("error").innerHTML = "You are a Wuss!" }
}
