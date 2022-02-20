// (new Audio): is how we initialize Audio(any file has sound) in javascript,
//              and takes string as parameter which is the sound path from script.js
// (audioSrc): is take the sound path for each key from script.js
// to play the sound we create function(play),
//       and we use inside it the built in function play()
//      (this.audio.currentTime = 0): is just to allow you to play(reset) the sound every time you press the key
//                                    without this line you have to wait to finish the sound then you can play again
class Beat {
    constructor(audioSrc){
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

class Button {
    constructor(color, keyCode){
        // to get the element(the button) from HTML by the id
        this.element = document.getElementById(keyCode);
        this.keyCode = keyCode;
        this.color = color;
        // call function below to set the color of button
        this.setButtonColorInHTML();
        // call function below to do the transition
        this.createTransitionEndListener();
    }

    setButtonColorInHTML = () => {
        // we change the border color of the button by use the color we set on script.js
        // i.e(65 for example): document.getElementById("65").style.borderColor = "#00fffe" 
        this.element.style.borderColor = this.color;
    }

    // we use "transitionend" class to call function(deselect) when the transision is end
    createTransitionEndListener = () => {
        this.element.addEventListener("transitionend", ()=>{
            this.deselect();
        })
    }


    // Select function to set the background color and boxShadow
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    deselect = () => {
        //("transparent") to take back the backgroundColor to default color
        this.element.style.backgroundColor = "transparent";
        //(`none`) to take back the boxShadow to default shadow(which is no shadow)
        this.element.style.boxShadow = `none`;
    }
}