// Credits: ScriptSafe, LetMeOut.
function getVersion() {
  var request = new XMLHTTPRequest();
  request.open("GET", chrome.extension.getURL("../manifest.json"), false);
  request.send(null);
  return JSON.parse(request.responseText).version;
}

var version = getVersion();

chrome.webRequest.onBeforeRequest.addListener(function(e) {

});
chrome.webRequest.onBeforeRedirect.addListener(function(e) {

});
