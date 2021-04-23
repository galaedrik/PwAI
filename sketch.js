let mobilenet;
let classifier;
let video;
let label = 'loading model';
let doliButton;
let nuroButton;
let trainButton;
let saveButton;
// var description, resultP;
// import Doliprane from 'https://cdn.jsdelivr.net/gh/galaedrik/PWaI/model.json';
// import NurofenFlash from 'https://cdn.jsdelivr.net/gh/galaedrik/PWaI/model.json';


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
//  resultP=createP();
//  description=createP();

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
    // resultP.html(result[0].label);
    // description.html(result[0].label);
    // classifyDone(result[0].label);
  }
} 

// function classifyDone(label) {
//   if (label  === Doliprane){
//     resultP.html("This medicine is " + Doliprane);
//     description.html("It is an analgesic (pain reliever) and an antipyretic (fever reducer). The active substance of this medicine is paracetamol. It is used to treat pain and/or fever, for example in case of headaches, flu, toothache, aches and pains, painful periods.");
//   }
//   else if (label  === NurofenFlash){
//     resultP.html("This medicine is " + NurofenFlash);
//     description.html("This medicine contains a non-steroidal anti-inflammatory drug: ibuprofen. It is indicated for adults and children weighing 30 kg or more (about 11-12 years) for the short-term treatment of fever and/or pain such as headaches, flu-like conditions, dental pain, aches and pains and painful periods.");
//   }
// }
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
