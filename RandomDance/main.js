// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];
console.log(myArray.length);

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Key Events
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
    if(event.code == "Space") {
        myArray[Math.floor(Math.random() * Math.floor(myArray.length))] += 5;
        myArray[Math.floor(Math.random() * Math.floor(myArray.length))] -= 5;
    }
    if(event.code == "KeyR") {
        for(let i = 0; i < myArray.length; i++) {
            myArray[i] = 300;
        }
    }
}