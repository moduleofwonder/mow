var mArray = ['module', 'mow', 'material', 'micro', 'maintain', 'matter', 'make', 'manifestos', 'move', 'mastering'];
var oArray = ['of', 'oss', 'our', 'on', 'over', 'outside', 'or', 'observe', 'out'];
var wArray = ['wonder', 'words', 'window', 'what', 'workshop', 'when', 'women', 'work', 'water', 'world', 'worlding', 'weaving', 'wording'];
var m = 'module';
var o = 'of';
var w = 'wonder';
var mNum = 0;
var oNum = 0;
var wNum = 0;
var canvasHeight, canvasWidth, fontSize; 
var spacingM, spacingO, spacingW;

function setup() {
	canvasHeight = 50;//windowHeight/10;
	canvasWidth = windowWidth;
	var canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.parent('sketch-holder'); // put sketch inside 'sketch-holder' div
	if (windowWidth < windowHeight){
		spacingW = windowWidth-40;
		spacingO = (windowWidth/2)-20;
		canvasWidth = windowWidth+(windowWidth/2);
	}
	else{
		spacingO = canvasWidth/4;
		spacingW = canvasWidth/2;
	}
	fontSize = canvasWidth/28;
	background(255);
	spacingM = 0;
	setInterval(chooseChange, 1000); // change a word every second
	setInterval(MOW, 10000); // show "mow" every 2 minutes(?)
	textFont('Arial');
	textSize(fontSize);
	fill(255, 186, 21);
}

// random number chooses which word gets changed
function chooseChange() {
var seed = random(1,3);
var choice = round (seed);
	if (choice == 1){
	changeWordM();
	}
	if (choice == 2){
	changeWordO();
	}
	if (choice == 3){
	changeWordW();
	}
}

function changeWordM() {
var seed = random(1,mArray.length-1);
var choice = round (seed);
	mNum = choice;
}

function changeWordO() {
var seed = random(1,oArray.length-1);
var choice = round (seed);
	oNum = choice;
}

function changeWordW() {
var seed = random(1,wArray.length-1);
var choice = round (seed);
	wNum = choice;

}

function MOW () {
mNum = 0;
oNum = 0;
wNum = 0;
}

function draw() {
	background(255);
	m = mArray[mNum];
	o = oArray[oNum];
	w = wArray[wNum];
	textAlign(LEFT);
	text(m, spacingM, canvasHeight-10);//text(m, canvasWidth/2-100, canvasHeight/2);
	textAlign(CENTER);
	text(o, spacingO, canvasHeight-10);//text(o, canvasWidth/2, canvasHeight/2);
	textAlign(RIGHT);
	text(w, spacingW, canvasHeight-10);//text(w, canvasWidth/2+100, canvasHeight/2);
}

function windowResized() {
	if (windowWidth < windowHeight){
		spacingW = windowWidth-40;
		spacingO = (windowWidth/2)-20;
		canvasWidth = windowWidth+(windowWidth/2);
	}
	else{
		canvasWidth = windowWidth;	
		resizeCanvas(canvasWidth, canvasHeight);
		spacingO = canvasWidth/4;
		spacingW = canvasWidth/2;
	}
	fontSize = canvasWidth/28;
	textSize(fontSize);
}
