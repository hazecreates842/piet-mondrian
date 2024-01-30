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


    const canvasSize = cellNumber * squareSize;
    createCanvas(canvasSize, canvasSize);
    background(200)

for(let row = 0; row < cellNumber; row++) {
    for(let column = 0; column < cellNumber; column++){
        const red = random(255);
        const green = random(255);
        const blue = random(255);

        const colorCode = random(possibleColors)
        const myColour = color(colorCode);


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

