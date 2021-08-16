input_value = "";

function setup(){
    canvas = createCanvas(600,400);
    canvas.position(450,250);
    video = createCapture(VIDEO);
    video.size(600,400);
    video.hide();
}

function start(){
    objectDetection = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_value = document.getElementById("user_input").value;
}

function modelLoaded(){
    console.log("model is loaded!");
    status = true;
}

function draw(){
    image(video,0,0,600,400);
}