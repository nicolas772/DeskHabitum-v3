let model, webcam, labelContainer, maxPredictions;
const URL = "https://teachablemachine.withgoogle.com/models/6a0wreOBI/";
const FPS = 0.5;
const interval = 1000 / FPS;

async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const flip = true;
  webcam = new tmImage.Webcam(200, 200, flip);
  await webcam.setup();
  await webcam.play();

  document.getElementById("webcam-container").appendChild(webcam.canvas);
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    labelContainer.appendChild(document.createElement("div"));
  }

  loop();
}

async function loop() {
  webcam.update();
  await predict();
  setTimeout(loop, interval);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);
  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction =
      prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    labelContainer.childNodes[i].innerHTML = classPrediction;
  }
  if (prediction[0].probability.toFixed(2) >= 0.8) {
    console.log("nueva notificacion");
    window.api.newNotification();
  }
}

init();
