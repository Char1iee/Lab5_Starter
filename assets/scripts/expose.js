// expose.js

window.addEventListener('DOMContentLoaded', init);

function changeImage(source) {
  let img = document.querySelector('img[alt="No image selected"');
  img.src = source;
}

function changeSoundAndPlay(source) {
  let sound = document.querySelector("audio");
  sound.src = source;
  // sound.volume = document.querySelector("#volume").value/100;
  sound.play();
}

function init() {

  // change to immediately image change
  const horns = document.getElementById("horn-select");
  horns.addEventListener('input', function(){
    let currHorn = horns.options[horns.selectedIndex].value;
    changeImage("./assets/images/" + currHorn + ".svg");
  })

  const button = document.querySelector("button");
  button.addEventListener("click", function() {
    let horns = document.getElementById("horn-select");
    let currHorn = horns.options[horns.selectedIndex].value;
    if(currHorn == "select") {
      // changeImage("/assets/images/no-image.png");
      document.querySelector("audio").src = "";
    } else {
      // changeImage("/assets/images/" + currHorn + ".svg");
      changeSoundAndPlay("./assets/audio/" + currHorn + ".mp3");
      if(currHorn == "party-horn") {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }
    }
  })

  // change the "change" to "input" so it can immediately change the volumn picture
  const volume_ctrl = document.getElementById("volume-controls");
  volume_ctrl.addEventListener("input", function() {
    let volume = volume_ctrl.querySelector("#volume");
    let volume_img = document.querySelector('img[alt="Volume level 2"]');
    if(volume.value == 0) {
      volume_img.src = "./assets/icons/volume-level-0.svg";
    } else if(volume.value >= 1 && volume.value < 33) {
      volume_img.src = "./assets/icons/volume-level-1.svg";
    } else if(volume.value >= 33 && volume.value < 67) {
      volume_img.src = "./assets/icons/volume-level-2.svg";
    } else {
      volume_img.src = "./assets/icons/volume-level-3.svg";
    }
    
    let sound = document.querySelector("audio");
    sound.volume = document.querySelector("#volume").value/100;

  })
}