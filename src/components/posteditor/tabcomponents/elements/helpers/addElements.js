import { nanoid } from 'nanoid'

export function addElementsToCanvas(type, canvasRef) {
    const canvas = canvasRef.current;

    if (type === 'CONTAINER') {
        const context = canvas.getContext("2d");
        context.beginPath();
        context.lineWidth = "1";
        context.strokeStyle = "black";
        context.rect(50, 50, 150, 80);
        context.stroke();
    } else if (type === 'IMAGE') {
        const image = new Image();
        image.id = nanoid();
        image.src = "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";
        image.onload = () => {
            const context = canvas.getContext("2d");
            context.imageSmoothingEnabled = false;
            context.drawImage(image, 0, 0, 50, 50);
        }
        return image;
    }
    
}   
