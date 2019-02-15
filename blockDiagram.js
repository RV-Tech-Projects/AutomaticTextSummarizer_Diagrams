let canvas1, canvas2;
let canvasContext1, canvasContext2;

window.onload = function () {
    canvas1 = document.getElementById("myCanvas");
    canvasContext1 = canvas1.getContext('2d');

    canvas2 = document.getElementById('myCanvasText');
    canvasContext2 = canvas2.getContext('2d');

    // Border
    drawOutlineRect(canvasContext1, 0, 0, canvas1.width, canvas1.height, "black", 3);

    // Initial text document
    drawOutlineRect(canvasContext1, 20, 20, 150, 150, "red", 5);
    writeText(canvasContext2, "TEXT", 40, 43, 110);

    // Right arrow
    drawRightArrow(canvasContext1, 250, 80, "lightblue");

    // Text Pre-processing
    drawOutlineRect(canvasContext1, 400, 20, 200, 150, "darkblue", 5);
    writeText(canvasContext2, "Text", 28, 470, 80);
    writeText(canvasContext2, "Pre-Processing", 28, 405, 110);

    // Right arrow
    drawRightArrow(canvasContext1, 650, 80, "lightblue");

    // Extracting Features
    drawOutlineRect(canvasContext1, 800, 20, 500, 200, "darkgreen", 5);
    writeText(canvasContext2, "Extracting Features", 40, 860, 65);
        // Extracting Phrase features
        drawOutlineRect(canvasContext1, 820, 105, 200, 100, "green", 3);
        writeText(canvasContext2, "Extracting", 30, 850, 140);
        writeText(canvasContext2, "Text Features", 30, 830, 180);
        // Connector
        canvasContext1.beginPath();
        canvasContext1.moveTo(920, 205);
        canvasContext1.lineTo(920, 255);
        canvasContext1.stroke();
        canvasContext1.closePath();

        // Analyzing Semantics
        drawOutlineRect(canvasContext1, 1080, 105, 200, 100, "green", 3);
        writeText(canvasContext2, "Analyzing", 30, 1115, 140);
        writeText(canvasContext2, "Semantics", 30, 1110, 180);
        // Connector
        canvasContext1.beginPath();
        canvasContext1.moveTo(1185, 205);
        canvasContext1.lineTo(1185, 255);
        canvasContext1.stroke();
        canvasContext1.closePath();

    // Phrase feature score
    drawOutlineRect(canvasContext1, 820, 255, 200, 100, "blue", 3);
    writeText(canvasContext2, "Phrase", 30, 875, 285);
    writeText(canvasContext2, "Feature", 30, 870, 315);
    writeText(canvasContext2, "Score", 30, 880, 345);
    // Connector
    canvasContext1.beginPath();
    canvasContext1.moveTo(920, 355);
    canvasContext1.lineTo(920, 405);
    canvasContext1.stroke();
    canvasContext1.closePath();

    // Singular value decomposition
    drawOutlineRect(canvasContext1, 1080, 255, 200, 100, "blue", 3);
    writeText(canvasContext2, "Singular", 30, 1125, 285);
    writeText(canvasContext2, "Value", 30, 1145, 315);
    writeText(canvasContext2, "Decomposition", 30, 1081, 345);
    // Connector
    canvasContext1.beginPath();
    canvasContext1.moveTo(1185, 355);
    canvasContext1.lineTo(1185, 405);
    canvasContext1.stroke();
    canvasContext1.closePath();

    // Summary 1
    drawOutlineRect(canvasContext1, 820, 405, 200, 100, "lightblue", 3);
    writeText(canvasContext2, "Summary 1", 35, 830, 465);
    // Connector
    canvasContext1.beginPath();
    canvasContext1.moveTo(920, 505);
    canvasContext1.lineTo(920, 550);
    canvasContext1.stroke();
    canvasContext1.closePath();

    // Summary 2
    drawOutlineRect(canvasContext1, 1080, 405, 200, 100, "lightblue", 3);
    writeText(canvasContext2, "Summary 2", 35, 1095, 465);
    // Connector
    canvasContext1.beginPath();
    canvasContext1.moveTo(1185, 505);
    canvasContext1.lineTo(1185, 550);
    canvasContext1.stroke();
    canvasContext1.closePath();

    // Set Operations
    drawOutlineRect(canvasContext1, 800, 550, 500, 200, "lightgreen", 4);
    writeText(canvasContext2, "Set Operations", 40, 910, 600);
    writeText(canvasContext2, "combining Summary 1 and Summary 2", 28, 810, 660);

    // Connector
    canvasContext1.beginPath();
    canvasContext1.moveTo(800, 650);
    canvasContext1.lineTo(650, 650);
    canvasContext1.stroke();
    canvasContext1.closePath();

    // Final summary
    drawOutlineRect(canvasContext1, 250, 550, 400, 200, "yellow", 5);
    writeText(canvasContext2, "Final Summary", 45, 290, 660);
};

function writeText(context, printText, sizeInPixels, x, y) {
    context.font = sizeInPixels + 'px Arial';
    context.fillText(printText, x, y);
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