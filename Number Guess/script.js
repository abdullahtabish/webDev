const messageElement = document.getElementById("msg");

const randomNumber = getRandomNumber();
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();
recognition.start();

function writeMessage(message) {
  messageElement.innerHTML = `
    <div>You said: </div>
    <span class="box">${message}</span>
  `;
}

function checkNumber(message) {
  const number = +message;

  if (Number.isNaN(number)) {
    messageElement.innerHTML += "<div>This is not a valid number</div>";
    return;
  }

  if (number > 100 || number < 1) {
    messageElement.innerHTML += "<div>Number must be between 1 and 100</div>";
    return;
  }

  if (number == randomNumber) {
    document.body.innerHTML = `
      <h2>Congrats🎉 You have guessed the number!<br><br>It was ${number}</h2>
      <button class="play-again" id="play-again">Play Again</button>
    `;
  } else if (number > randomNumber) {
    messageElement.innerHTML += "<div>GO LOWER</div>";
  } else {
    messageElement.innerHTML += "<div>GO HIGHER</div>";
  }
}

function onSpeak(e) {
  const message = e.results[0][0].transcript;

  writeMessage(message);
  checkNumber(message);
}

recognition.addEventListener("result", onSpeak);

recognition.addEventListener("end", () => {
  recognition.start();
});

document.body.addEventListener("click", (e) => {
  if (e.target.id == "play-again") {
    window.location.reload();
  }
});
