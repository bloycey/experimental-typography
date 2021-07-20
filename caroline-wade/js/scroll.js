window.onload = () => {
	console.log("HELLOOOO");
};

// Pick the h1 tag
const h1 = document.querySelector("h1");

// and when I scroll, calculate how big the font size should be

window.addEventListener("scroll", () => {
	const pixels = window.pageYOffset;
	const fontWeight = pixels * 0.4 + 100;
	const fontWidth = pixels * 0.1 + 100;

	h1.style.fontVariationSettings = `"wght" ${fontWeight}, "wdth" ${fontWidth}`;
});
