const removePx = pxString => parseInt(pxString.slice("px"));

const processWarpedItems = arrayOfWarpedItems => [...arrayOfWarpedItems].map(item => {
	const text = item.innerText;
	const itemStyles = window.getComputedStyle(item);
	const { fontSize, width, height, fontFamily } = itemStyles;

	const canvasWidth = removePx(width);
	const canvasHeight = removePx(height)
	const textSize = removePx(fontSize);
	const { id, tilesx, tilesy, wavesize, speed, xdelay, ydelay, warp } = item.dataset;
	const canvasDiv = document.createElement('div');
	canvasDiv.setAttribute("id", id);
	item.insertAdjacentElement('afterend', canvasDiv);

	return ({
		id,
		warp,
		text,
		textSize,
		fontFamily,
		canvasWidth,
		tilesx,
		tilesy,
		wavesize,
		speed,
		xdelay,
		ydelay,
		canvasHeight
	})
})

const buildText = textOptions => p => {
	const { 
		id,
		warp,
		text, 
		textSize, 
		canvasWidth, 
		canvasHeight,
		fontFamily,
		tilesx = 50,
		tilesy = 5,
		wavesize = 5,
		speed = 5,
		xdelay = 5,
		ydelay = 5
	} = textOptions;

	let graphic;

	p.setup = function() {
		let canvas = p.createCanvas(canvasWidth, canvasHeight);
		graphic = p.createGraphics(canvasWidth, canvasHeight);
		canvas.parent(id);

		graphic.background("transparent")
		graphic.textSize(textSize);
		graphic.textFont(fontFamily);
		graphic.fill(0);
		graphic.text(text, 0, canvasHeight - (canvasHeight / 4));
	};

	const drawFunctions = {
		sinWaveGrid: () => {
			const computedValues = {
				wavesize: wavesize * 6,
				speed: speed * 0.02,
				xdelay: xdelay * 0.06,
				ydelay: ydelay * 0.06
			}
		
			const tileWidth = canvasWidth / tilesx;
			const tileHeight = canvasHeight / tilesy;
	
			for (let x = 0; x < tilesx; x++) {
				for (let y = 0; y < tilesy; y++) {
					const distortion = p.sin((p.frameCount * computedValues.speed) + (x * computedValues.xdelay) + (y * computedValues.ydelay)) * computedValues.wavesize;

					p.image(
						graphic,
						x * tileWidth,
						y * tileHeight,
						tileWidth,
						tileHeight,
						x * tileWidth + distortion,
						y * tileHeight,
						tileWidth,
						tileHeight
					);
				}
			}
		}
	}

	p.draw = drawFunctions[warp || "sinWaveGrid"];
};

const buildFancyText = () => {
	// Set up 'visually-hidden' class.
	var style = document.createElement('style');
	style.innerHTML = '.visually-hidden { border: 0; clip: rect(1px, 1px, 1px, 1px); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; }';
	document.getElementsByTagName('head')[0].appendChild(style);

	const warpedItems = document.querySelectorAll("[data-warp]");
	const warpedItemsInfo = processWarpedItems(warpedItems);

	// Create p5 Canvases
	warpedItemsInfo.forEach(item => new p5(buildText(item)));

	// Hide the original text
	warpedItems.forEach(item => item.classList.add('visually-hidden'));
};

buildFancyText();


