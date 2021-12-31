timeTo = 1641378076000

then = new Date(timeTo)
then = new Date(new Date().getTime() + 37000)

timer = document.getElementById("timer")
enter = document.getElementById("enter")
mute = document.getElementById("mute")
simpleView = document.getElementById("simpleView")
email = document.getElementById("email")
container = document.getElementById("container")

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



var audios = [click, begin, during]

var storage = window.localStorage

refreshSound = false


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
        camera.fov = position.fov;camera.updateProjectionMatrix();
    });

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


