var phone;
var back;
var suntan;
var tanning = 0;

function preload() {
  phone = loadImage('assets/phone.png');
  back = loadImage('assets/back.jpg');
  suntan = loadImage('assets/tan.png');
}

function setup() {
  createCanvas(750,1334);
  background(0);
  createP('Skitage').position(370,1310);
  sliderTan = createSlider(0,255,0);
  sliderTan.position(320,1300);
  sliderTan.input(setTanning)

  //background(0);
  noLoop();

}

function draw() {

  //var tanning = sliderTan.value();
  image(back,103,181,544,967);
  image(phone,0,0,width,height);
  fill(255);
  noStroke();
  rect(0,0,width,10);
  rect(0,height-10,width,10);
  rect(width-10,0,10,height);
  tint(255,tanning);
  image(suntan,280.5,635,256/1.37,235/1.37);
  textSize(25);
  text('Skitage: '+sliderTan.value(),320,300);

}

function setTanning(){
  tanning = sliderTan.value();
  redraw();
}
