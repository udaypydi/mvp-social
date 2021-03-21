export function updateImageDimensions(canvasRef, imageRef, dimensions) {
   const { width, height } = dimensions;
   const context = canvasRef.current.getContext("2d");
   context.drawImage(imageRef, 0, 0, 0, 0);
   context.drawImage(imageRef, 0, 0, width, height);
}

export function updateImageURL(canvasRef, imageRef, url) {
    const context = canvasRef.current.getContext("2d");
    imageRef.src = url;
    context.imageSmoothingEnabled = false;
    context.drawImage(imageRef, 0, 0);
}