var letters = document.getElementById("qwerty");
var phrase = document.getElementById("phrase");
var missed = 0;
var start = document.getElementById("start")

start.addEventListener( "click", () => {
    start.parentElement.style.display = "none";
});