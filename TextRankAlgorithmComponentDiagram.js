let canvas, canvasText;
let canvasContext, canvasTextContext;

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext('2d');

    canvasText = document.getElementById("myCanvasText");
    canvasTextContext = canvasText.getContext('2d');

    drawOutlineRect(canvasContext, 0, 0, canvas.width, canvas.height, "black", 7);

    // // BMSIT - Watermark
    //     canvasTextContext.font = '400px Arial';
    //     canvasTextContext.fillStyle = "lightgray";
    //     canvasTextContext.fillText("BMSIT", 100, 450);

    // ARTICLES LOGO
        drawOutlineRect(canvasContext, 118, 82, 80, 100, "black", 3);
        drawFilledRect(canvasContext, 109, 91, 80, 100, "white");
        drawOutlineRect(canvasContext, 109, 91, 80, 100, "black", 3);
        drawFilledRect(canvasContext, 100, 100, 80, 100, "white");
        drawOutlineRect(canvasContext, 100, 100, 80, 100, "black", 3);
        // For lines in article page within article
            drawOutlineRect(canvasContext, 110, 120, 60, 1, "red", 4);
            drawOutlineRect(canvasContext, 110, 130, 60, 1, "red", 4);
            drawOutlineRect(canvasContext, 110, 140, 60, 1, "red", 4);
            drawOutlineRect(canvasContext, 110, 150, 60, 1, "red", 4);
            drawOutlineRect(canvasContext, 110, 160, 60, 1, "red", 4);
            drawOutlineRect(canvasContext, 110, 170, 60, 1, "red", 4);
            drawOutlineRect(canvasContext, 110, 180, 60, 1, "red", 4);


    // RIGHT ARROW
        drawRightArrow(canvasContext, 270, 120, "cornflowerblue");


    // TEXT
        drawFilledRect(canvasContext, 410, 80, 110, 110, "lightgreen");

    // RIGHT ARROW
        drawRightArrow(canvasContext, 600, 120, "cornflowerblue");

    // SENTENCES
        drawFilledRect(canvasContext, 745, 80, 140, 110, "darksalmon");

    // RIGHT ARROW
        drawRightArrow(canvasContext, 950, 120, "cornflowerblue");

    // VECTORS
        drawFilledRect(canvasContext, 1090, 80, 115, 110, "gold");

    // DOWN ARROW
        drawDownArrow(canvasContext, 1130, 230, "cornflowerblue");

    // SIMILARITY MATRIX
        drawFilledRect(canvasContext, 1090, 340, 115, 110, "blueviolet");

    // LEFT ARROW
        drawLeftArrow(canvasContext, 950, 370, "cornflowerblue");

    // GRAPH
        drawFilledRect(canvasContext, 745, 340, 140, 110, "fuchsia");

    // LEFT ARROW
        drawLeftArrow(canvasContext, 620, 370, "cornflowerblue");

    // SENTENCE RANKINGS
        drawFilledRect(canvasContext, 410, 340, 110, 110, "khaki");

    // LEFT ARROW
        drawLeftArrow(canvasContext, 280, 370, "cornflowerblue");

    // SUMMARY
        drawOutlineRect(canvasContext, 104, 335, 90, 110, "black", 3);
        // For lines in summary
            drawOutlineRect(canvasContext, 114, 355, 70, 1, "red", 4);
            drawOutlineRect(canvasContext, 114, 365, 70, 1, "red", 4);
            drawOutlineRect(canvasContext, 114, 375, 70, 1, "red", 4);


    // TEXT

        // articles
            canvasTextContext.font = '25px Arial';
            canvasTextContext.fillText("articles", 100, 230);

        // combine
            canvasTextContext.font = '18px Arial';
            canvasTextContext.fillText('combine', 265, 98);

        // Text
            canvasTextContext.font = '28px Arial';
            canvasTextContext.fillText('Text', 436, 145);

        // splitting
            canvasTextContext.font = '20px Arial';
            canvasTextContext.fillText('splitting', 595, 100);

        // Sentences
            canvasTextContext.font = '28px Arial';
            canvasTextContext.fillText('Sentences', 750, 145);

        // Vectors
            canvasTextContext.font = '28px Arial';
            canvasTextContext.fillText('Vectors', 1103, 145);

        // Similarity Matrix
            canvasTextContext.font = '25px Arial';
            canvasTextContext.fillText('Similarity', 1098, 380);
            canvasTextContext.fillText('Matrix', 1115, 425);

        // Graph
            canvasTextContext.font = '28px Arial';
            canvasTextContext.fillText('Graph', 773, 405);

        // Sentence Rankings
            canvasTextContext.font = '25px Arial';
            canvasTextContext.fillText('Sentence', 414, 380);
            canvasTextContext.fillText('Rankings', 415, 415);

        // Summary
            canvasTextContext.font = '21px Arial';
            canvasTextContext.fillText("Summary", 105, 470);

        // Text Rank Algorithm - Block Diagram
            canvasTextContext.font = '50px Arial';
            canvasTextContext.fillText("Text Rank Algorithm - Component Diagram", 300, 600);
};

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