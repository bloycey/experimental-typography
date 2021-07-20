let font;
let graphic;

function preload() {
	font = loadFont("spacegrotesk-medium.otf");
}

function setup() {
	createCanvas(500, 500);

	graphic = createGraphics(500, 500);
	graphic.textSize(400);
	graphic.fill("#ef5236");
	graphic.textAlign(CENTER, CENTER);
	graphic.textFont(font);
	graphic.text("01", width / 2, height / 2);
}

function draw() {
	background("#ecf072");

	const speed = 0.05;
	let val = sin(frameCount * speed) * 250;

	copy(graphic, 0, 0, 500, 500, 0, 0, val + 250, 500);
	copy(graphic, 0, 0, 500, 500, 250 + val, 0, 250 - val, 500);
}
