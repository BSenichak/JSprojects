var cvs = document.getElementById("canvas");
var scre = document.getElementById("Score");
var bscre = document.getElementById("BS");
var btn = document.getElementById("btn");
var ctx = cvs.getContext("2d");
cvs.width = 256;
cvs.height = 512;

var bird = new Image();
var bg = new Image();
var road = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/back.png";
road.src = "img/road.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

var fly = new Audio();
var score = new Audio();
fly.src = "audio/fly.mp3";
score.src = "audio/score.mp3";

var velY = 0;
var xPos = 10;
var yPos = 150;
var gravity = 0.35;
var gap = 120;
let Score = 0;
let BScore = 0;
let pau = false;
let pipe = [];
pipe[0] = {
    x: cvs.width - 50,
    y: 0
}
function draw() {
    ctx.drawImage(bg, 0, 0);

    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        pipe[i].x--;
        if (pipe[i].x === 80) {
            pipe.push({
                x: canvas.width,
                y: Math.random() * (10 - (-150)) + (-150)
            });
        }
        if (pipe[i].x === -60) {
            pipe.shift();
        }
        if (xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width && (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - road.height) {
            reload();
        }
        if (pipe[i].x === 0) {
            score.play();
            Score += 1;
            if (Score > BScore) {
                BScore = Score;
            }
        }
    }
    ctx.drawImage(road, 0, cvs.height - road.height);
    ctx.drawImage(bird, xPos, yPos);
    velY = velY + gravity;
    yPos = yPos + velY;
    if (yPos >= cvs.height - road.height - bird.height || yPos <= 0) {
        reload();
    }
    scre.innerHTML = Score;
    bscre.innerHTML = BScore;

}
document.addEventListener("keydown", (e) => {
    if (e.code == 'ArrowUp') {
        velY -= 10;
        fly.play();
    }
});


function reload() {
    xPos = 10;
    yPos = 128;
    velY = 0;
    Score = 0;
    pipe = [];
    pipe[0] = {
        x: cvs.width,
        y: 0
    };
}
let inter = setInterval(draw, 20);

btn.addEventListener("click", () => {
    if (pau == false) {
        clearInterval(inter);
        pau = true
        document.getElementById("dark").style.display = "block"
    }
    else {
        inter = setInterval(draw, 20);
        pau = false
        document.getElementById("dark").style.display = "none"
    }
})