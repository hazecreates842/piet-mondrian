function setup(){

    const squareSize = 15;

    const cellNumber = 15;


    const canvasSize = cellNumber * squareSize;
    createCanvas(canvasSize, canvasSize);
    background(200)

for(let row = 0; row < cellNumber; row++) {
    for(let column = 0; column < cellNumber; column++){
        const red = random(255);
        const green = random(255);
        const blue = random(255);
    
        const myColour = color(red, green, blue);


        fill(myColour);

        const x = row * squareSize;
    
        const y = column * squareSize;

        const width = squareSize;
        const height = squareSize;

        // rect(x, y, width, height)
        rect(x, y, width)
        }
    }
}

