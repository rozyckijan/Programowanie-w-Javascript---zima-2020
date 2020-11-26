window.addEventListener('deviceorientation', onDeviceOrientationChange);

const ball = {
    x: 0,
    y: 0
};
function  onDeviceOrientationChange(ev) {
    console.log(ev);
}
function AppInit() {
    const ballStartXPos = Math.random() * window.innerWidth;
    const ballStartYPos = Math.random() * window.innerHeight;
    ball.x = ballStartXPos;
    ball.y = ballStartYPos;
}