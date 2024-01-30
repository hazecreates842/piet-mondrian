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

    const width = squareSize;
    const height = squareSize;

    const canvasSize = cellNumber * squareSize;
    createCanvas(canvasSize, canvasSize);
    background(220);

    let x = 0;
    let y = 0;

    while(y < canvasSize){
        x = 0;
        while(x < canvasSize){
    
        const colorCode = random(possibleColors)
        const myColour = color(colorCode);


        fill(myColour);

        // rect(x, y, width, height)
        rect(x, y, width)

        x = x + width;
        
        }
        y = y + height;
    }
}

