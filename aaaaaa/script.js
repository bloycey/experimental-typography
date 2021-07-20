let font;
let graphic;

function preload() {
	font = loadFont("spacegrotesk-medium.otf");
}

function setup() {
	createCanvas(600, 600);

	graphic = createGraphics(600, 600);
	graphic.textSize(800);
	graphic.textAlign(CENTER, CENTER);
	graphic.fill("#f3c043");
	graphic.textFont(font);
	graphic.text("a", 300, 240);
}

function draw() {
	background("#e84e3c");

	const tileSize = 50;

	for (let x = 0; x < 12; x++) {
		for (let y = 0; y < 12; y++) {
			const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50;

			// source
			const source = {
				x: x * tileSize + distortion,
				y: y * tileSize,
				width: tileSize,
				height: tileSize,
			};

			// destination

			const destination = {
				x: x * tileSize,
				y: y * tileSize,
				width: tileSize,
				height: tileSize,
			};

			image(
				graphic,
				destination.x,
				destination.y,
				destination.width,
				destination.height,
				source.x,
				source.y,
				source.width,
				source.height
			);
		}
	}
}

// function setup() {
// 	createCanvas(500, 500);

// 	graphic = createGraphics(500, 500);
// 	graphic.textSize(400);
// 	graphic.fill("#ef5236");
// 	graphic.textAlign(CENTER, CENTER);
// 	graphic.textFont(font);
// 	graphic.text("01", width / 2, height / 2);
// }

// function draw() {
// 	background("#ecf072");

// 	const speed = 0.05;
// 	let val = sin(frameCount * speed) * 250;

// 	copy(graphic, 0, 0, 500, 500, 0, 0, val + 250, 500);
// 	copy(graphic, 0, 0, 500, 500, 250 + val, 0, 250 - val, 500);
// }
