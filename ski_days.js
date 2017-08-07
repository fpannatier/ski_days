var phone;
var back;
var suntan;
var tanning = 0;

//snow variables
var quantity = 100;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 10;
var snowColor = 255;

function preload() {
  phone = loadImage('assets/phone.png');
  back = loadImage('assets/back.jpg');
  suntan = loadImage('assets/tan.png');
}

function setup() {
  createCanvas(750,1380);
  background(0);
  textFont('DINOT');
  //createP('Skitage').position(370,1310);
  sliderTan = createSlider(0,255,0);
  sliderTan.position(310,1350);
  sliderTan.input(setTanning);



  //snow setup
  frameRate(25);
  for(var i = 0; i < quantity; i++) {
    flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPosition[i] = random(0, width);
    yPosition[i] = random(0, height);
    direction[i] = round(random(0, 1));
  }


}

function draw() {


  //var tanning = sliderTan.value();
  image(back,103,181,544,967);
  fill(255);
  drawSnow();
  image(phone,0,0,width,1334);

  textSize(25);
  fill(255);
  text('Skitage: '+sliderTan.value(),320,300);


  fill(255);
  noStroke();
  rect(0,0,width,10);
  rect(0,height-50,width,60);
  rect(width-10,0,10,height);

  push();
  tint(255,tanning);
  image(suntan,280.5,635,256/1.37,235/1.37);
  pop();
  fill(0);
  textSize(35);
  text('Skitage',320,1340);

}

function setTanning(){
  tanning = sliderTan.value();
  console.log('tanning',tanning);
  redraw();

}

function drawSnow() {
	for(var i = 0; i < xPosition.length; i++) {
    noStroke();
    ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);

    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }

    yPosition[i] += flakeSize[i] + direction[i];

    if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
      xPosition[i] = random(0, width);
      yPosition[i] = -flakeSize[i];
    }
  }
}
