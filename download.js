export function download(canvas) {
  const a = document.createElement("a");
  a.download = `${Date.now()}.png`;
  a.href = canvas.dataURL();
  a.click();
}
