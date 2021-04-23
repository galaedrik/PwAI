let mobilenet;
let classifier;
let video;
let label = 'loading model';
let doliButton;
let nuroButton;
let trainButton;
let saveButton;
var description, resultM;


function modelReady() {
  console.log('Model is ready!!!');
   classifier.load('https://cdn.jsdelivr.net/gh/galaedrik/PWaI/model.json', customModelReady);
}

function customModelReady() {
   console.log('Custom Model is ready!!!');
   label = 'model ready';
  // classifier.classify(gotResults);
}

function videoReady() {
  console.log('Video is ready!!!');
  classifier.classify(gotResults);
}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);
// classifyDone;

//   doliButton = createButton('Doliprane');
//   doliButton.mousePressed(function() {
//     classifier.addImage('Doliprane');
//   });

//   nuroButton = createButton('Nurofen');
//   nuroButton.mousePressed(function() {
//     classifier.addImage('Nurofen');
//   });
  
//   trainButton = createButton('train');
//   trainButton.mousePressed(function() {
//     classifier.train(whileTraining);
//   });

//   saveButton = createButton('save');
//   saveButton.mousePressed(function() {
//     classifier.save();
//   });
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}

// function whileTraining(loss) {
//   if (loss == null) {
//     console.log('Training Complete');
//     classifier.classify(gotResults);
//   } else {
//     console.log(loss);
//   }
// }

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    // updated to work with newer version of ml5
    // label = result;
    label = result[0].label;
    classifier.classify(gotResults);
  }
} 
