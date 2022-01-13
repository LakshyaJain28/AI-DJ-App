song1="";
song2="";

song1_status="";
song2_status="";

function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("faded.mp3")
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
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded()
{
    console.log("Model Is Loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
    }
}
function draw()
{
    image(video,0,0,600,500);
    song1_staus=song1.isPlaying();
    song2_staus=song2.isPlaying();
    fill("red");
    stroke("red");
    if(scoreRightWrist>0.2)
    {
        circle(rightWristX,rightWristY,20);
        song2.stop();
        if(song1_staus==false){
            song1.play();
            document.getElementById("song_name").innerHTML="Playing Harry Potter Theme Song.";

        }
    }
    if(scoreLeftWrist>0.2)
    {
        circle(leftWristX,leftWristY,20);
        song1.stop();
        if(song2_staus==false){
            song1.play();
            document.getElementById("song_name").innerHTML="Playing The Faded Song.";
            
        }
    }

}
function play()
{
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}