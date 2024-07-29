/*const tf = require('@tensorflow/tfjs');
const tmImage = require('@teachablemachine/image');

let model, webcam, labelContainer, maxPredictions;

async function init() {
  const modelURL = '../teachableMachine/model.json';
  const metadataURL = '../teachableMachine/metadata.json';

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const flip = true; // whether to flip the webcam
  webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);

  document.getElementById('webcam').appendChild(webcam.canvas);
}

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);
  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction = prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
    console.log(classPrediction);
  }
}

init();*/
