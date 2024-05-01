// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }

  const synth = window.speechSynthesis;

  const speakButton = document.querySelector("button");
  // const inputForm = document.querySelector("#explore");
  const inputTxt = document.querySelector("#text-to-speak");
  const voiceSelect = document.querySelector("#voice-select");
  const faceImage = document.querySelector('img[alt="Smiling face"]')

  function speak() {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    // utterThis.pitch = 1;
    // utterThis.rate = 1;
    utterThis.onstart = () => {
        faceImage.src = 'assets/images/smiling-open.png';
    };

    utterThis.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
    };
    synth.speak(utterThis);
    inputTxt.blur();
  }

  speakButton.addEventListener('click', speak);
}





