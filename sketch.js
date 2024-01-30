function setup(){

    const squareSize = 15;

// number of cells of the grid
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

    
        // fill(myColour);

        fill(myColour);


        // calculate horizontal position in pixels
        const x = row * squareSize;
    
        // calculate verticle position in pixels
        const y = column * squareSize;

        const width = squareSize;
        const height = squareSize;

        square(x, y, width)
        }
    }
}

