const removePx = pxString => parseInt(pxString.slice("px"));

const processWarpedItems = arrayOfWarpedItems => [...arrayOfWarpedItems].map(item => {
	console.dir(item)

	const text = item.innerText;
	const itemStyles = window.getComputedStyle(item);
	const { fontSize, width, height } = itemStyles;

	const canvasWidth = removePx(width);
	const canvasHeight = removePx(height)
	const textSize = removePx(fontSize);
	const id = item.attributes["data-id"].nodeValue;
	const canvasDiv = document.createElement('div');
	canvasDiv.setAttribute("id", id);
	item.insertAdjacentElement('afterend', canvasDiv);

	// Display property? e.g. Block / inline-block;

	return ({
		id,
		text,
		textSize,
		canvasWidth,
		canvasHeight
	})
})

const buildText = textOptions => p => {
	const { id, text, textSize, canvasWidth, canvasHeight } = textOptions;
	
	p.setup = function() {
		let canvas = p.createCanvas(canvasWidth, canvasHeight);
		
		canvas.parent(id);
		p.textSize(textSize);
	};

	p.draw = function() {
		p.fill(0);
		p.text(text, 0, canvasHeight - (canvasHeight / 4));
	};
};

const buildFancyText = () => {
	// Set up 'visually-hidden' class.
	var style = document.createElement('style');
	style.innerHTML = '.visually-hidden { border: 0; clip: rect(1px, 1px, 1px, 1px); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; }';
	document.getElementsByTagName('head')[0].appendChild(style);

	const warpedItems = document.querySelectorAll("[data-warped]");
	const warpedItemsInfo = processWarpedItems(warpedItems);
	warpedItemsInfo.forEach(item => new p5(buildText(item)));
	warpedItems.forEach(item => item.classList.add('visually-hidden'));
};

buildFancyText();


