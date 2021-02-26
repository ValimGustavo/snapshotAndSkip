let video;
export class Canvas {
  constructor() {
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
