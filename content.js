chrome.runtime.onMessage.addListener(function (request) {
	currentURL = window.location.href;
	currentURL = currentURL.replace("www", "m");
	outlineURL = "https://www.outline.com/" + currentURL;
	window.open(outlineURL, '_blank');
})