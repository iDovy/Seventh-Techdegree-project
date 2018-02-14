var letters = document.getElementById("qwerty");
var phrase = document.getElementById("phrase");
var missed = 0;
var start = document.getElementById("start");
var game = document.querySelector("#phrase ul");
var phrases =[
    "javascript is cool",
    "this is a word guessing game",
    "the greatest phrase of all phrases",
    "a wheel of success",
    "i hope you wont get this one"
];

function getRandomPhraseAsArray(arr){
    var i = Math.floor(Math.random() * 5);
    var array = arr[i].split("")
    return array;
};

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li")
        li.textContent = arr[i];
        game.appendChild(li);
        if (game.lastElementChild.textContent != " ") {
            game.lastElementChild.className += " letter";
        }
    }
};

function checkLetter(button){
    let letters = document.querySelectorAll(".letter");
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].textContent == button.textContent) {
            letters[i].className += " show";
        }
        else{
            return null;
        }
    }
}


// Start

getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

start.addEventListener( "click", () => {
    start.parentElement.style.display = "none";
});

letters.addEventListener( "click", (e) => {
    if (e.target.nodeName == "BUTTON") {
        let key = e.target;
        let letterFound = checkLetter(key);
        key.className += " chosen";
        key.setAttribute("disabled", "");
    }
})