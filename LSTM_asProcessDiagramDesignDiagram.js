let canvas;
let canvasContext;
let canvasText;
let canvasTextContext;

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext('2d');

    canvasText = document.getElementById("myCanvasText");
    canvasTextContext = canvasText.getContext('2d');

    drawOutlineRect(canvasContext, 0, 0, canvas.width, canvas.height, "black", 7);

    // Original text
        drawFilledRect(canvasContext, 130, 80, 120, 120, "lightgreen");

    // Right arrow
        drawRightArrow(canvasContext, 300, 125, "lightblue");

    // Data Pre-Process
        drawFilledRect(canvasContext, 450, 80, 300, 150, "yellow");

    // Right arrow
        drawRightArrow(canvasContext, 850, 135, "lightblue");

    // Processed text
        drawFilledRect(canvasContext, 970, 80, 170, 350, "sandybrown");

    // Left arrow
        drawLeftArrow(canvasContext, 870, 350, "lightblue");

    // Phrase Process
        drawFilledRect(canvasContext, 150, 290, 620, 150, "aqua");

    // Down arrow
        drawDownArrow(canvasContext, 200, 490, "lightblue");

    // Phrase Sequence
        drawFilledRect(canvasContext, 155, 600, 120, 120, "lightgreen");

    // Right arrow
        drawRightArrow(canvasContext, 350, 635, "lightblue");

    // Text generation
        drawFilledRect(canvasContext, 480, 580, 300, 150, "yellow");

    // Right arrow
        drawRightArrow(canvasContext, 835, 635, "lightblue");

    // Text Summary
        drawFilledRect(canvasContext, 990, 580, 140, 140, "green");

    // TEXT
        // Original text
            writeText("Original", 25, 140, 130);
            writeText("Text", 25, 160, 160);

        // Data Pre-Processing
            writeText("Data Pre-Processing:", 30, 460, 130);
            writeText("1. Word Segmentation", 25, 460, 160);
            writeText("2. Morphological Reduction", 24, 460, 190);
            writeText("3. Co-reference resolution", 24, 460, 220);

        // Processed Text
            writeText("Processed", 30, 990, 220);
            writeText("Text", 30, 1020, 260);

        // Phrase Process
            writeText("Phrase Process:", 35, 330, 330);
            writeText("phrase acquisition, phrase refinement,", 30, 210, 370);
            writeText("and phrase combination",30, 300, 410);

        // Phrase Sequence
            writeText("Phrase", 25, 160, 650);
            writeText("Sequence", 25, 160, 680);

        // Text generation
            writeText("Text Generation:", 30, 520, 620);
            writeText("LSTM - ATS: model encoding", 22, 485, 650);
            writeText("LSTM - ATS: model decoding", 22, 485, 680);

        // Text Summary
            writeText("Text", 30, 1025, 645);
            writeText("Summary", 30, 995, 675);

        // Title:
            writeText("LSTM - ATS: Process Diagram", 70, 200, 850);
};


function writeText(printText, sizeInPixels, x, y) {
    canvasTextContext.font = sizeInPixels + 'px Arial';
    canvasTextContext.fillText(printText, x, y);
}


function drawFilledRect(context, x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}


function drawOutlineRect(context, x, y, width, height, color, lineWidth) {
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.strokeRect(x, y, width, height);
}

function drawRightArrow(context, x, y, color) {
    let arrowWidth = 50;
    let arrowHeight = 30;
    drawFilledRect(context, x, y, arrowWidth, arrowHeight, color);

    let triangleStart = arrowHeight / 2;
    let triangleStartLocationX = x + arrowWidth;
    let triangleStartLocationY = y - triangleStart;

    context.fillStyle = color;
    context.beginPath();
    context.moveTo(triangleStartLocationX, triangleStartLocationY);
    context.lineTo(triangleStartLocationX + arrowWidth / 2, triangleStartLocationY + 2 * triangleStart);
    context.lineTo(triangleStartLocationX, triangleStartLocationY + 4*triangleStart);
    context.fill();
}

function drawDownArrow(context, x, y, color) {
    let arrowWidth = 30;
    let arrowHeight = 50;
    drawFilledRect(context, x, y, arrowWidth, arrowHeight, color);

    let triangleStart = arrowWidth / 2;
    let triangleStartLocationX = x - triangleStart;
    let triangleStartLocationY = y + arrowHeight;

    context.fillStyle = color;
    context.beginPath();
    context.moveTo(triangleStartLocationX, triangleStartLocationY);
    context.lineTo(triangleStartLocationX + arrowWidth * 2, triangleStartLocationY);
    context.lineTo(triangleStartLocationX + arrowWidth, triangleStartLocationY + triangleStart);
    context.fill();
}

function drawLeftArrow(context, arrowRectX, arrowRectY, color) {
    let arrowWidth = 50;
    let arrowHeight = 30;
    drawFilledRect(context, arrowRectX, arrowRectY, arrowWidth, arrowHeight, color);

    let triangleStart = arrowHeight / 2;
    let triangleStartLocationX = arrowRectX;
    let triangleStartLocationY = arrowRectY - triangleStart;

    context.fillStyle = color;
    context.beginPath();
    context.moveTo(triangleStartLocationX, triangleStartLocationY);
    context.lineTo(triangleStartLocationX, triangleStartLocationY + 2 * arrowHeight);
    context.lineTo(triangleStartLocationX - arrowWidth / 2, triangleStartLocationY + arrowHeight);
    context.fill();
}