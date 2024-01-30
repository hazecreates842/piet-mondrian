function setup(){


    const possibleColors = [ "#FF4013", "#FFFC41", "#0061FF", "#FFFFFF", "#000000"
        // red    #FF4013
        // yellow #FFFC41
        // blue  #0061FF
        // white   #FFFFFF
        // black  #000000
        //darkgray #404040
    ];


    const squareSize = 50;

    const cellNumber = 5;

const possibleCellSizes = [squareSize, 2 * squareSize, 3 * squareSize]

    const width = squareSize;
    const height = squareSize;

    const canvasSize = 800;

    const borderColor = color("#404040");
    

    createCanvas(canvasSize, canvasSize);
    // background(220);

    let x = 0;
    let y = 0;

    while(y < canvasSize){
        x = 0;

        let actualHeight = random(possibleCellSizes);
        if(y + height > canvasSize) actualHeight = canvasSize - y;

        while(x < canvasSize){
    
        const colorCode = random(possibleColors)
        const myColour = color(colorCode);


        fill(myColour);
        stroke(borderColor);
        strokeWeight(10);

        let actualWidth = random(possibleCellSizes);
        if(x + width > canvasSize) actualWidth = canvasSize - x;

        // rect(x, y, width, height)
        rect(x, y, actualWidth, actualHeight)

        x = x + actualWidth;
        
        }
        y = y + actualHeight;
    }
}

