console.log("background");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("bacgkroudn onMessage");
  if (request.action == "start") sendResponse("started");
});
