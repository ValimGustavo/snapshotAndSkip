console.log('pop')
document.addEventListener("DOMContentLoaded", () => {
  const btnStart = document.querySelector("#btnStart") || document.getElementById('btnStart')
  console.log('pop load')
  console.log(btnStart)
  btnStart.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const timer = document.querySelector('#skip')
      console.log('pop click')
      chrome.tabs.sendMessage(tabs[0].id, {action: "start", timer:timer.value }, function(response) {
        console.log(response);
      });
    });   
  });
});
