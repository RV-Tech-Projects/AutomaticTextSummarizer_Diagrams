let canvas;
let canvasContext;
let canvasText;
let canvasContextText;

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext('2d');

    canvasText = document.getElementById("myCanvasText");
    canvasTextContext = canvasText.getContext('2d');

    drawOutlineRect(canvasContext, 0, 0, canvas.width, canvas.height, "black", 7);

};
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