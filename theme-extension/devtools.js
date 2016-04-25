var xhr = new XMLHttpRequest(),
	local_inspectorStylesheet = 'inspector.css',
	local_inspectorCommon = 'inspectorCommon.css',
	local_stylesheet = 'stable.css';

if (/Chrome\/(\d\d)/.exec(navigator.userAgent)[1] > 48) {
  local_stylesheet = 'canary.css';
}

xhr.open("GET", "/" + local_inspectorCommon, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);

xhr.open("GET", "/" + local_inspectorStylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);


xhr.open("GET", "/" + local_stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);

