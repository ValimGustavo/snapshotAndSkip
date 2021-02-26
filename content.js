chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "start"){
      start(request.timer)
      return true
    }
  }
);


function start(skip) {
  let video = getVideo();
  let canvas = new Canvas(video);
  cronSkipAndSnapshot(canvas, video, skip);
}

function getVideo() {
  const video = document.querySelector("video");
  console.log(video)
  return video;
}

function skipVideoOutOf(skip, video) {
  skip = parseInt(skip);
  video.currentTime += skip;
}

function cronSkipAndSnapshot(canvas, video, skip) {
  const event = setInterval(() => {
    if (video.readyState >= 2) {
      skipVideoOutOf(skip, video);
      canvas.snapshot(video);
      download(canvas);
      const duration = video.duration;
      const current = video.currentTime;

      if (current >= duration) {
        clearInterval(event);
      }
    }
  }, 1000);
}

function download(canvas) {
  const a = document.createElement("a");
  a.download = `${Date.now()}.png`;
  a.href = canvas.dataURL();
  a.click();
}

class Canvas {
  constructor(video) {
    this.canvas = this.createCanvas();
    this.context = this.getContext(this.canvas);
    this.canvas.height = video.videoHeight;
    this.canvas.width = video.videoWidth;
  }

  createCanvas() {
    const canvas = document.createElement("canvas");
    return canvas;
  }

  getContext(canvas) {
    const context = canvas.getContext("2d");
    return context;
  }

  snapshot(buffer) {
    this.context.drawImage(buffer, 0, 0, this.canvas.width, this.canvas.height);
  }

  dataURL() {
    return this.canvas.toDataURL();
  }
}