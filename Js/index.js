let play = document.getElementById("play");
let about = document.getElementById("about");
let store = document.getElementById("store");

let otherGames = document.getElementById("other");
play.addEventListener("click", function () {
  window.location.href = "user.html";
  // let mp5=new Audio('./alex-productions-epic-cinematic-trailer-elite (2).mp3')
  // mp5.play()
});
about.addEventListener("click", function () {
  window.location.href = "about.html";
  // let mp5=new Audio('./alex-productions-epic-cinematic-trailer-elite (2).mp3')
  // mp5.play()
});
store.addEventListener("click", function () {
  window.location.href =
    "https://www.microsoft.com/en-in/store/top-free/apps/pc";
});
otherGames.addEventListener("click", function () {
  window.location.href = "https://www.microsoft.com/en-in/store/games";
});
