let video;
let poseNet;
let pose;
let skeleton;
let img;
let bird;

function preload() {
  bird = loadImage('bird.png');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }

}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  image(video, 0, 0);
  filter(GRAY);

  if (pose) {
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    //
    // fill(255, 0, 0);
    image(bird, pose.leftEye.x, pose.leftEye.y, 50, 50);

    fill(152, 240, 237)
    ellipse(pose.rightEye.x, pose.rightEye.y, 40);
    // ellipse(pose.leftEye.x, pose.leftEye.y, 40);
    //
    // fill(0, 0, 255);
    // ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
    // ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);
    //
    // for (let i = 0; i < pose.keypoints.length; i++) {
    //   let x = pose.keypoints[i].position.x;
    //   let y = pose.keypoints[i].position.y;
    //   ellipse(x, y, 16, 16);
    // }
    //
    // for (let i = 0; i < skeleton.length; i++) {
    //   let a = skeleton[i][0];
    //   let b = skeleton[i][1];
    //   strokeWeight(2);
    //   stroke(255);
    //   line(a.position.x, a.position.y, b.position.x, b.position.y);
    // }
  }

}

// function eye(x, y, size, n) {
//   let angle = frameCount * 0.2;
//
//   fill(255);
//   noStroke();
//   ellipse(x, y, size, size);
//
//   fill(56);
//   noStroke();
//   ellipse(x + cos(angle * n) * size / 5, y + sin(angle * n) * size / 5, size / 2, size / 2);
// }
