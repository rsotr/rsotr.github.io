timeTo = 1641378076000

then = new Date(timeTo)
then = new Date(new Date().getTime() + 25000)
now = new Date()

timer = document.getElementById("timer")
enter = document.getElementById("enter")
mute = document.getElementById("mute")
simpleView = document.getElementById("simpleView")
email = document.getElementById("email")
container = document.getElementById("container")
body = document.getElementById("body")

function makeAudio(path) {
    var audio  = new Audio();
    var src  = document.createElement("source");
    src.src = path;
    audio.appendChild(src);
    return audio
}



var click = makeAudio('static/sound/click.wav');
var begin = makeAudio('static/sound/begin.wav');
var during = makeAudio("static/sound/during.mp3");
var riser = makeAudio("static/sound/riser.mp3")
var singleShot = makeAudio("static/sound/single%20shot.mp3");
var allShots = makeAudio("static/sound/shots%20full.mp3");
var shotsRepeating = makeAudio("/static/sound/shots%20repeating.mp3");

var audios = [click, begin, during]

var storage = window.localStorage

refreshSound = false

if ((then.getTime() - now.getTime()) <= 0) {
    mainPage()
}


function mainPage() {
    cameraAmount = 0.0001
    brightnessMultiplier = 1
    container.style.opacity = "100%"
    document.body.style.transition = "none"
    document.body.style.backgroundColor = "black"
    //container.style.display = "none"
    enter.style.display = "none"
    timer.style.display = "none"
    mute.style.display = "none"
    
}

function doFinish() {
    // starts at 10 seconds
    console.log("in")

    var volume = {volume:1};
    var tween = new TWEEN.Tween(volume).to({volume:0}, 3000).start()

    tween.onUpdate(function(){
        during.volume = volume.volume;
        
    });

    var position = {fov:75};
    var tween = new TWEEN.Tween(position).to({fov:110}, 5000).easing(TWEEN.Easing.Cubic.InOut).start()

    tween.onUpdate(function(){
        try{camera.fov = position.fov;camera.updateProjectionMatrix();} catch{}
    });

    setTimeout(function() {
        // starts at 7 seconds
        mute.style.opacity = 0
    }, 3000)

    setTimeout(function() {
        container.style.opacity = 0
        document.body.style.backgroundColor = "white"

        var cameraAmounts = {cameraAmount:0.0001};
        var tween = new TWEEN.Tween(cameraAmounts).to({cameraAmount:0.002}, 2000).start()

        tween.onUpdate(function(){
            cameraAmount = cameraAmounts.cameraAmount;
            brightnessMultiplier = cameraAmounts.cameraAmount * 10000
            
        });

        //starts at 5 seconds

        setTimeout(function() {
            //starts at 3 seconds
            console.log("riser")
            riser.play()
        }, 2000)

        setTimeout(function() {
            // Starts when white
            body.style.backgroundColor = "#FFFFFF"
            
            mainPage()

            var opacity = {opacity:99};
            var tween = new TWEEN.Tween(opacity).to({opacity:0}, 2000).start()

            tween.onUpdate(function(){body.style.backgroundColor = `#FFFFFF${Math.floor(opacity.opacity).toString().padStart(2, "0")}`});
            tween.onComplete(function() {body.style.backgroundColor = null});

            allShots.play()
            setTimeout(function() {
                doRepeating = function() {
                    rpt = shotsRepeating.cloneNode(true)
                    rpt.volume = 0.4
                    rpt.play()
                }
                doRepeating()
                setInterval(doRepeating, 33000)
            }, 16000)

        }, 7000)
        
    }, 5000)
}

startedFinish = false

updateClock = function() {

    

    now = new Date()
    millisecondsBetween = then.getTime() - now.getTime()
    delta = Math.abs(millisecondsBetween) / 1000

    var daysUntil = Math.floor(delta / 86400);
    delta -= daysUntil * 86400;

    var hoursUntil = Math.floor(delta / 3600) % 24;
    delta -= hoursUntil * 3600;

    var minutesUntil = Math.floor(delta / 60) % 60;
    delta -= minutesUntil * 60;

    var secondsUntil = Math.floor(delta % 60);

    if (millisecondsBetween <= 10500 && !startedFinish) {
        startedFinish = true
        doFinish()
    } if (millisecondsBetween < 1000) {return}

    timer.innerHTML = `${daysUntil.toString().padStart(2, '0')}:${hoursUntil.toString().padStart(2, '0')}:${minutesUntil.toString().padStart(2, '0')}:${secondsUntil.toString().padStart(2, '0')}`

    if (!localStorage.getItem('mute')) {
        if (refreshSound) {
            refreshSound = false
            during.play();
        }
        click.cloneNode(true).play();
    }
}

function reloadMute() {
    if (!storage.getItem("mute")) {mute.innerHTML = `<i class="fas fa-volume-up muteIcon"></i>`} else {mute.innerHTML = `<i class="fas fa-volume-mute"></i>`}
}
reloadMute()

color1 = "rgb(100, 0, 0)"
color2 = "rgb(200, 0, 0)"
shadow2 = `0 0 10px #fff, 0 0 20px red, 0 0 40px ${color2}`
shadow1 = `0 0 20px #fff, 0 0 20px red, 0 0 50px ${color2}`
timer.style["-webkit-text-stroke-color"] = color1

enter.disabled = false

changeColor = function() {
    if (timer.style["-webkit-text-stroke-color"] == color1) {
        timer.style.color = color2
        timer.style["-webkit-text-stroke-color"] = color2 
        timer.style.textShadow = shadow2
    } else {
        timer.style.color = color1
        timer.style["-webkit-text-stroke-color"] = color1
        timer.style.textShadow = shadow1
    }
}

timer.style.fontSize = "20px"
timer.style.letterSpacing = "0px"

var started = false

enter.onclick = function() {
    refreshSound = function() {refreshSound = true}
    started = true
    if (!localStorage.getItem('mute')) {
        setInterval(refreshSound, during.duration*1000)
    }

    timer.style.fontSize = "87px"
    timer.style.letterSpacing = `${window.innerWidth/38.4}px`

    enter.style.transform = "scale(0.1)"
    enter.style.opacity = "0"

    updateClock()
    changeColor()

    setTimeout(function() {enter.style.zIndex = 0}, 500)
    

    setInterval(updateClock, 1000)
    setInterval(changeColor, 2000)

    
}

window.onresize = function() {
    if (started) {
        timer.style.letterSpacing = `${window.innerWidth/38.4}px`
    }
    
}

mute.onclick = function() {
    if (storage.getItem("mute")) {
        storage.removeItem("mute")
    } else {
        storage.setItem("mute", true)
    }
    reloadMute()
}

simpleView.onclick = function () {
    if (simpleView.innerHTML.includes("simple view")) window.open(location.href + "?simpleView=true", "_self")
    if (simpleView.innerHTML.includes("3d view")) window.open(location.href, "_self")
}


