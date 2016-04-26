var xhr = new XMLHttpRequest(),
	stylesheet = './canary.css';

if (/Chrome\/(\d\d)/.exec(navigator.userAgent)[1] > 49) {
  stylesheet = './canary.css';
}

xhr.open("GET", "/" + stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);

