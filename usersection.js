function onNameSubmit(event) {
    event.preventDefault();
    var playerName = document.getElementById('playerName').value;
    window.location = "section.html";
    console.log("playerName", localStorage.getItem("playername"));
    localStorage.setItem("playername", playerName);

}
console.log("this is score",localStorage.getItem("finalscore"))
console.log("this is score",localStorage.getItem("playername"))