timeTo = 1641378076000

then = new Date(timeTo)
//then = new Date(new Date().getTime() + 10000)

timer = document.getElementById("timer")
enter = document.getElementById("enter")
mute = document.getElementById("mute")

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

    timer.innerHTML = `${daysUntil.toString().padStart(2, '0')}:${hoursUntil.toString().padStart(2, '0')}:${minutesUntil.toString().padStart(2, '0')}:${secondsUntil.toString().padStart(2, '0')}`

    if (!localStorage.getItem('mute')) {
        if (refreshSound) {
            refreshSound = false
            during.cloneNode(true).play();
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
        timer.style["-webkit-text-stroke-color"] = color2 
        timer.style.textShadow = shadow2
    } else {
        timer.style["-webkit-text-stroke-color"] = color1
        timer.style.textShadow = shadow1
    }
}

timer.style.fontSize = "20px"
timer.style.letterSpacing = "0px"

enter.onclick = function() {
    if (!localStorage.getItem('mute')) {
        begin.cloneNode(true).play();

        during.cloneNode(true).play();
        setInterval(function() {refreshSound = true}, during.duration*1000)
    }

    timer.style.fontSize = "87px"
    timer.style.letterSpacing = "50px"

    enter.style.transform = "scale(0.1)"
    enter.style.opacity = "0"

    updateClock()
    changeColor()

    setTimeout(function() {enter.style.zIndex = -1}, 500)
    

    setInterval(updateClock, 1000)
    setInterval(changeColor, 2000)

    
}

mute.onclick = function() {
    if (storage.getItem("mute")) {
        storage.removeItem("mute")
    } else {
        storage.setItem("mute", true)
    }
    reloadMute()
}
