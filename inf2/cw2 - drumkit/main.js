document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recBtn').addEventListener('click', recordChannel);
document.querySelector('#playBtn').addEventListener('click', playChannel);
document.querySelector('#recBtn2').addEventListener('click', recordChannel2);
document.querySelector('#playBtn2').addEventListener('click', playChannel2);
document.querySelector('#recBtn3').addEventListener('click', recordChannel3);
document.querySelector('#playBtn3').addEventListener('click', playChannel3);
document.querySelector('#recBtn4').addEventListener('click', recordChannel4);
document.querySelector('#playBtn4').addEventListener('click', playChannel4);
const channel1 = [], channel2 = [], channel3 = [], channel4 =[];
recordStart1 = false, recordStart2 = false, recordStart3 = false, recordStart4 = false;
const recordStart = Date.now();
function onKeyPress(ev) {
    let sound;
    let soundName;
    switch (ev.code) {
        case 'KeyA':
            soundName = 'boom';
            sound = document.querySelector('#boom');
            break;
        case 'KeyS':
            soundName = 'clap';
            sound = document.querySelector('#clap');
            break;
        case 'KeyD':
            soundName = 'hihat';
            sound = document.querySelector('#hihat');
            break;
        case 'KeyF':
            soundName = 'kick';
            sound = document.querySelector('#kick');
            break;
        case 'KeyG':
            soundName = 'openhat';
            sound = document.querySelector('#openhat');
            break;
        case 'KeyH':
            soundName = 'ride';
            sound = document.querySelector('#ride');
            break;
        case 'KeyJ':
            soundName = 'snare';
            sound = document.querySelector('#snare');
            break;
        case 'KeyK':
            soundName = 'tink';
            sound = document.querySelector('#tink');
            break;
        case 'KeyL':
            soundName = 'tom';
            sound = document.querySelector('#tom');
            break;
        case 'KeyP':
            soundName = 'my-man';
            sound = document.querySelector('#may-man');
            break;
    }
    if (soundName) {
        const keyPressTime = Date.now() - recordStart;
        const soundObject = {
            soundName: soundName,
            time: keyPressTime
        };
        playSound(soundName);
        if (recordStart1 == true) 
        {
            channel1.push(soundObject);
        }
        if (recordStart2 == true) 
        {
            channel2.push(soundObject);
        }
        if (recordStart3 == true) 
        {
            channel3.push(soundObject);
        }
        if (recordStart4 == true) 
        {
            channel4.push(soundObject);
        }
        sound.play();
    }
}
function recordChannel(){
    recordStart1 = true;

}
function playChannel() {
    recordStart1 = false;
    for (let index = 0; index < channel1.length; index++) {
        const soundObject = channel1[index];
        setTimeout(
            () => {
                playSound(soundObject.soundName);
            },
            soundObject.time
        );    
    }
}
function recordChannel2(){
    recordStart2 = true;
}
function playChannel2() {
    recordStart2 = false;
    for (let index = 0; index < channel2.length; index++) {
        const soundObject2 = channel2[index];
        setTimeout(
            () => {
                playSound(soundObject2.soundName);
            },
            soundObject2.time
        );
    }
}
function recordChannel3(){
    recordStart = true;
}
function playChannel3() {
    recordStart3 = false;
    for (let index = 0; index < channel3.length; index++) {
        const soundObject3 = channel3[index];
        setTimeout(
            () => {
                playSound(soundObject3.soundName);
            },
            soundObject3.time3
        );
    }
}
function recordChannel4(){
    recordStart = true;
}
function playChannel4() {
    recordStart4 = false;
    for (let index = 0; index < channel4.length; index++) {
        const soundObject4 = channel4[index];
        setTimeout(
            () => {
                playSound(soundObject4.soundName);
            },
            soundObject4.time4
        );
    }
}
function playSound(soundName) {
    const sound = document.querySelector('#' + soundName);
    sound.play();
}
function recordBtn(){
    this.recordStart;
}
