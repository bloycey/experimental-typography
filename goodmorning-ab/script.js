let graphic;

const warpedItems = document.querySelectorAll("[data-warped]");

const processWarpedItems = arrayOfWarpedItems => [...arrayOfWarpedItems].map(item => {
	console.dir(item)

	const itemStyles = window.getComputedStyle(item);
	const { fontSize , width, height } = itemStyles;

	const canvasWidth = parseInt(width.slice("px"));
	const canvasHeight = parseInt(height.slice("px"));
	const textSize = parseInt(fontSize.slice("px"));

	return ({
		textSize,
		canvasWidth,
		canvasHeight
	})
})

const warpedItemsInfo = processWarpedItems(warpedItems);
const firstWarpedItem = warpedItemsInfo[0];