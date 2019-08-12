var drumButton = document.querySelectorAll(".drum");

for (var i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener('click', function() {
    var leterFromHtml = this.innerHTML; // bech njibo el contenu t3 el button
    makeSound(leterFromHtml);
    animatedButton(leterFromHtml);
  });
}
document.addEventListener('keypress', function(e) {
  // el event ta3ml list feha barcha info menhom el key el nzelna 3leha
  makeSound(event.key);
  animatedButton(event.key);
});

// function for sounds
function makeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;
    case "l":
      var audio7 = new Audio("sounds/kick-bass.mp3");
      audio7.play();
      break;
    default:
      console.log(key);

  }
}

// animation drumButton
function animatedButton(currentKey){
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  // remove pressed class
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },300);
}
