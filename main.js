song="";

function preload()
{
    song=loadSound("music.mp3");
}
scoreRightWrist=0;
scoreLeftWrist=0;

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}