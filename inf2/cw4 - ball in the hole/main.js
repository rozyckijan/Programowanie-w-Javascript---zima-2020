
window.addEventListener('deviceorientation', onDeviceOrientationChange);
let infield = document.querySelector(".infield")
let hole = document.querySelector(".hole");
let ball = document.querySelector(".ball");
let maxHeight = infield.clientHeight - ball.clientHeight; 
let maxWidth = infield.clientWidth - ball.clientWidth;

// const ball = {
//     x: 0,
//     y: 0
// };

function  onDeviceOrientationChange(ev) {
    console.log(ev);
    let x=ev.alpha;
    let y=ev.beta;

    if(x>90) {x = 90};
    if(x<-90) {x=-90};
    if(y>179 || y<-90) {y = 179};
    if(y<0) {y = 0};
    x+=90;

    ball.style.left = (maxWidth*x/180-10) + "px";
    ball.style.top = (maxHeight*y/180-10) + "px";
    check(parseInt(ball.style.left)+10, parseInt(ball.style.top)+10);
}
/*
function gameInit() {
    const ballStartXPos = Math.random()*1000;
    ball.x = ballStartXPos;    
    const ballStartYPos = Math.random()*1000;
    ball.y = ballStartYPos;
}
*/
function AppInit() {
    const ballStartXPos = Math.random() * window.innerWidth;
    const ballStartYPos = Math.random() * window.innerHeight;
    ball.x = ballStartXPos;
    ball.y = ballStartYPos;
}

//canvas
//const canvas = document.getElementById("canvas");
//const ctx = canvas.getContext("2d");

