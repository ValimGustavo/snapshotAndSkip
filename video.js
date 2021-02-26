import { download } from './download'
export function getVideo() {
  video = document.querySelector("video");
  return video
}

export function skipVideoOutOf(skip, video) {
  skip = parseInt(skip);
  video.currentTime += skip;
}

export function cronSkipAndSnapshot(canvas, video) {
  const event = setInterval(() => {
    if (video.readyState >= 2) {
      const skip = document.querySelector("#skip").value;
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
