function setup(){


    const possibleColors = [ "#FF4013", "#FFFC41", "#0061FF", "#FFFFFF", "#000000"
        // red    #FF4013
        // yellow #FFFC41
        // blue  #0061FF
        // white   #FFFFFF
        // black  #000000
    ];


    const squareSize = 60;

    const cellNumber = 10;

const possibleCellSizes = [squareSize, 2 * squareSize, 3 * squareSize]

    const width = squareSize;
    const height = squareSize;

    const canvasSize = 800;
    createCanvas(canvasSize, canvasSize);
    background(220);

    let x = 0;
    let y = 0;

    while(y < canvasSize){
        x = 0;

        const actualHeight = random(possibleCellSizes);

        while(x < canvasSize){
    
        const colorCode = random(possibleColors)
        const myColour = color(colorCode);


        fill(myColour);
        const actualWidth = random(possibleCellSizes);

        // rect(x, y, width, height)
        rect(x, y, actualWidth, actualHeight)

        x = x + actualWidth;
        
        }
        y = y + actualHeight;
    }
}

