const warpedItems = document.querySelectorAll("[data-warped]");

const processWarpedItems = arrayOfWarpedItems => {	
	arrayOfWarpedItems.forEach(item => {
		console.dir(item)
		
		// Get font details
		// TODO
		const itemStyles = window.getComputedStyle(item);
		const { fontSize , width, height } = itemStyles;
		console.log(fontSize, width, height);

		// Get width of canvas

		// Setup function
		// Draw funtion
	})
}

processWarpedItems(warpedItems);

// let font;
// let graphic;

// const waveSlider = document.querySelector(".wave");
// const line1Input = document.querySelector(".line1");
// const line2Input = document.querySelector(".line2");
// const distortionXIntensity = document.querySelector("#distortionX");
// const distortionYIntensity = document.querySelector("#distortionY");
// const blockSize = document.querySelector("#tileSize");

// function preload() {
//   font = loadFont("spacegrotesk-medium.otf")
// }

// const canvasWidth = 1200;
// const canvasHeight = 600;

// function setup() {
//   createCanvas(canvasWidth, canvasHeight);
//   createCopy();
// }

// function draw() {
// 	background('#ebe2d8');
//   let tileSize = blockSize.value;
//   let wave = waveSlider.value;

//   for (let x = 0; x < 120; x++) {
//     for (let y = 0; y < 60; y++) {
		
// 		//x 0.1
// 		//y 1
// 		const distortionX = sin(frameCount * wave + x * 0.5 + y * 0.1) * distortionXIntensity.value;
// 		const distortionY = sin(frameCount * wave + x * 0.5 + y * 1) * distortionYIntensity.value;

// 		const sx = x * tileSize + distortionX;
// 		const sy = y * tileSize + distortionY;
// 		const sw = tileSize;
// 		const sh = tileSize;

// 		const dx = x * tileSize;
// 		const dy = y * tileSize;
// 		const dw = tileSize;
// 		const dh = tileSize;

// 		image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
//     }
//   }
// }

// const createCopy = () => {
// 	graphic = createGraphics(canvasWidth, canvasHeight);
// 	graphic.fill("#ff0000");
// 	graphic.textFont(font);
// 	graphic.textSize(300);
// 	graphic.textAlign(CENTER, CENTER);
// 	graphic.textLeading(200);
// 	graphic.text(`${line1Input.value}\n${line2Input.value}`, 600, 300);
// }

// line1Input.addEventListener("input", ({ target: { value }}) => {
// 	createCopy();
// });

// line2Input.addEventListener("input", ({ target: { value }}) => {
// 	createCopy();
// })