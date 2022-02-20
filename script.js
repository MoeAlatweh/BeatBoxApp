
// for each key we create object("65","83"...etc) that has:  
//   *  keyword(beat) which its>>  
//      >>object that created by use class(Beat) from utils.js by passing the sound path
//   *  keyword(button) which its>>  
//      >>object that created by use class(Button) from utils.js by passing the color of button and the id
let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#FF00FF", 70)
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("#FF00FF", 71)
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#FF00FF", 72)
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#FF00FF", 74)
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#FFFFFF", 75),
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        button: new Button("#FFFFFF", 76),
    }
}

// (event) contains a lot of proparities we can use, one of them is the(keyCode)>> 
// >>which indicate the code of the key we press(like 65,83...etc)
// we use (if) statment to check if the key that pressed is inside the object(beats) above, then:
//    *    change the button color by call function(select) from utils.js
//    *    play the sound
triggerBeat = (event) => {
    let code = event.keyCode;
    if(code in beats){
        beats[code].button.select();
        beats[code].beat.play();
    }
}

// We Create a keydown listener to track what keys are hit...and play the sound by call function(triggerBeat)
// (keydown): is event we use to track the key(i.e: every time we prss the key on keyboard)
// (triggerBeat): use function above
document.addEventListener("keydown", triggerBeat);