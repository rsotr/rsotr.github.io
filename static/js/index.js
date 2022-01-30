timeTo = 1644537601000

then = new Date(timeTo)
//then = new Date(new Date().getTime() - 15000)
now = new Date()

timer = document.getElementById("timer")
enter = document.getElementById("enter")
mute = document.getElementById("mute")
simpleView = document.getElementById("simpleView")
viewIntro = document.getElementById("viewIntro")
email = document.getElementById("email")
container = document.getElementById("container")
body = document.getElementById("body")
autoplay = document.getElementById("autoplay")

bios = {
    "Chapter 1 - Matthew":`Chapter 1 is the intro for the RSOTR EP, one of the two songs I added to it. It is intended to bring in different elements of the EP in a 
        short song to prepare the listener for what is to come. I was inspired by many genres, such as Pop, electronic and acoustic, which brings together multiple 
        genres from the EP. The song is quite short as it is basically just a 2 minute long build up, with one drop, to the rest of the EP. I made this song mainly as 
        a way to improve my song writing and mixing.`,
    "Cup Of Sea - Reuben":`For my song cup of sea I chose to do lo-fi for my song genre, seeing as it has always been my favourite genre of music, 
        just because it is so calming and gentle to listen to. It always gives me such peace of mind, 
        which I hope I can share with other people through my song. <span class="br"></span>I was heavily inspired by I'm home by whimsical and My funny valentine by Komorebi 
        which are both songs which give off this gentle and calming vibe. Although I am nowhere near the skill level of these artists, 
        I hope this song will act as a piece of the puzzle to getting there.`,
    "Stockholm - Ben":`For Stockholm, I chose to make a LoFi song. The reason I did this was because I find LoFi songs really calming and they make me somewhat drift away from 
        life's problems. My main inspiration was from Idealism and his song Controlla. I hope one day I can become as talented as he is.`,
    "Enter The Dungeon - Sam":`My piece "Enter the Dungeon" is an 8-bit retro, nostalgic piece of music which you would commonly hear while playing an old video game. My major 
        inspiration for this piece was from the "Undertale" ost which shares a common style with what I was aiming for.  I love the overall concept of old style video games 
        so I was extremely passionate when creating this song and my head was spinning with ideas. Overall I am fairly happy with my final result and can picture it belonging to 
        a game lost to time.`,
    "3:36 - George":`My song 3:36 was heavily influenced by the deep house genre. This is one of my favourite genres to listen to and produce. I find deep house such a nice 
        genre as it has a nice bassy style and also a very prominent rhythm to it. I tried to mirror all these elements in my song. For my track I took lots of inspiration from 
        artists on selected such as kream and SOMMA.`,
    "Diminuendo - Matthew":`Diminuendo is the final song of the EP, it is the outro. The word Diminuendo literally means "diminishing", and in music theory symbolises
        a gradual decrease in volume. That is what this song is meant to follow. Being placed just after the Electronic songs, Diminuendo has two short drops leading
        to a long break which gradually slows down the RSOTR EP. The last 45 seconds with a tempo change brings the project to a complete stop with melodies and voices.`

}

embedsSoundCloud = {
    "ep":`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1384146061%3Fsecret_token%3Ds-X3Rp7YD5cdQ&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    <a href="https://soundcloud.com/rsotr" title="Right Side Of The Room" target="_blank" style="color: #cccccc; text-decoration: none;">Right Side Of The Room</a> · <a href="https://soundcloud.com/rsotr/sets/rsotr/s-X3Rp7YD5cdQ" title="RSOTR" target="_blank" style="color: #cccccc; text-decoration: none;">RSOTR</a></div>`,
    "bio-1":`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202098942%3Fsecret_token%3Ds-qD9WjFpWTNO&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/rsotr" title="Right Side Of The Room" target="_blank" style="color: #cccccc; text-decoration: none;">Right Side Of The Room</a> · 
    <a href="https://soundcloud.com/rsotr/chapter-1/s-qD9WjFpWTNO" title="Chapter 1" target="_blank" style="color: #cccccc; text-decoration: none;">Chapter 1</a></div>`,
    "bio-2":`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202099449%3Fsecret_token%3Ds-LXWKiFKWZff&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    <a href="https://soundcloud.com/rsotr" title="Right Side Of The Room" target="_blank" style="color: #cccccc; text-decoration: none;">Right Side Of The Room</a> · <a href="https://soundcloud.com/rsotr/cup-of-sea/s-LXWKiFKWZff" title="Cup Of Sea" target="_blank" style="color: #cccccc; text-decoration: none;">Cup Of Sea</a></div>`,
    "bio-3":`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202099767%3Fsecret_token%3Ds-GsDT56Hi2DR&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    <a href="https://soundcloud.com/rsotr" title="Right Side Of The Room" target="_blank" style="color: #cccccc; text-decoration: none;">Right Side Of The Room</a> · <a href="https://soundcloud.com/rsotr/stockholm/s-GsDT56Hi2DR" title="Stockholm" target="_blank" style="color: #cccccc; text-decoration: none;">Stockholm</a></div>`,
    "bio-4":`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202100022%3Fsecret_token%3Ds-F8jRf9EzxsE&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    <a href="https://soundcloud.com/rsotr" title="Right Side Of The Room" target="_blank" style="color: #cccccc; text-decoration: none;">Right Side Of The Room</a> · <a href="https://soundcloud.com/rsotr/enter-the-dungeon/s-F8jRf9EzxsE" title="Enter The Dungeon" target="_blank" style="color: #cccccc; text-decoration: none;">Enter The Dungeon</a></div>`,
    "bio-5":`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202100412%3Fsecret_token%3Ds-xBVN9F01pvA&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    <a href="https://soundcloud.com/rsotr" title="Right Side Of The Room" target="_blank" style="color: #cccccc; text-decoration: none;">Right Side Of The Room</a> · <a href="https://soundcloud.com/rsotr/336a/s-xBVN9F01pvA" title="3:36" target="_blank" style="color: #cccccc; text-decoration: none;">3:36</a></div>`,
    "bio-6":`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202100574%3Fsecret_token%3Ds-MvTWDZLtgSA&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    <a href="https://soundcloud.com/rsotr" title="Right Side Of The Room" target="_blank" style="color: #cccccc; text-decoration: none;">Right Side Of The Room</a> · <a href="https://soundcloud.com/rsotr/diminuendo/s-MvTWDZLtgSA" title="Diminuendo" target="_blank" style="color: #cccccc; text-decoration: none;">Diminuendo</a></div>`
}

embedsYouTube = {
    "ep":`<iframe width="300" height="300" src="https://www.youtube.com/embed/HVisykYrLkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    "bio-1":`<iframe width="300" height="300" src="https://www.youtube.com/embed/TGAKXWdxWgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    "bio-2":`<iframe width="300" height="300" src="https://www.youtube.com/embed/uK9VUmeBTAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    "bio-3":`<iframe width="300" height="300" src="https://www.youtube.com/embed/MtWcDY1CIjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    "bio-4":`<iframe width="300" height="300" src="https://www.youtube.com/embed/eqc59MDQNhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    "bio-5":`<iframe width="300" height="300" src="https://www.youtube.com/embed/f13j7Oihgas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    "bio-6":`<iframe width="300" height="300" src="https://www.youtube.com/embed/ICv4hM5fy28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

if (new URLSearchParams(window.location.search).get("viewIntro") == "") {
    then = new Date(new Date().getTime() + 25000)
    viewIntro.remove()
} else if ((then.getTime() - now.getTime()) > 500) {
    viewIntro.remove()
}

function makeAudio(path) {
    var audio  = new Audio();
    var src  = document.createElement("source");
    src.src = path;
    audio.appendChild(src);
    return audio
}

var audios = {}

var click = makeAudio('static/sound/click.wav');
var begin = makeAudio('static/sound/begin.wav');
var during = makeAudio("static/sound/during.mp3");
var riser = makeAudio("static/sound/riser.mp3")
var singleShot = makeAudio("static/sound/single%20shot.mp3");
var allShots = makeAudio("static/sound/shots%20full.mp3");
var shotsRepeating = makeAudio("/static/sound/shots%20repeating.mp3");

var storage = window.localStorage

refreshSound = false

if ((then.getTime() - now.getTime()) <= 0) {
    mainPage()
}

function mainPage() {
    enter.style.display = "none"
    timer.style.display = "none"

    var opacityElements = document.getElementsByClassName("opacity")
    for (element of opacityElements) {
        element.style.display = "block" 
        element.style.opacity = "100%"
    }
    reSize()
    loadEmbeds()
    loadBios()

    setTimeout(function() {
        doRepeating = function() {

            audios.shotsRepeating = shotsRepeating.cloneNode(true)
            if (!storage.getItem("mute")) {audios.shotsRepeating.volume = 0.4} else {audios.shotsRepeating.muted = true}
            if (!localStorage.getItem('mute')) {audios.shotsRepeating.play()}
        }
        doRepeating()
        //setInterval(doRepeating, 33000)
    }, 7000)

    audios.singleShot = singleShot
    if (!localStorage.getItem('mute')) {audios.singleShot.play()}
    
    
}

function mainPageTransition() {
    cameraAmount = 0.0001
    brightnessMultiplier = 1
    container.style.opacity = "100%"
    document.body.style.transition = "none"
    document.body.style.backgroundColor = "black"
    //container.style.display = "none"
    enter.style.display = "none"
    timer.style.display = "none"

    var opacityElements = document.getElementsByClassName("opacity")
    for (element of opacityElements) {
        element.style.display = "block" 
        element.style.opacity = "100%"
    }
    reSize()
    loadEmbeds()
    loadBios()


    srch = new URLSearchParams(location.search)
    srch.delete("viewIntro", "")
    window.history.pushState({}, document.title, (location.protocol + '//' + location.host + location.pathname) + "?" + srch.toString().split("=").join(""), "_self")
    
}

function doFinish() {
    // starts at 10 seconds
    console.log("in")

    var volume = {volume:1};
    var tween = new TWEEN.Tween(volume).to({volume:0}, 3000).start()

    tween.onUpdate(function(){
        try{audios.during.volume = volume.volume}catch{}
        
    });

    var position = {fov:75};
    var tween = new TWEEN.Tween(position).to({fov:110}, 5000).easing(TWEEN.Easing.Cubic.InOut).start()

    tween.onUpdate(function(){
        try{camera.fov = position.fov;camera.updateProjectionMatrix();} catch{}
    });

    setTimeout(function() {
        // starts at 7 seconds
        
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
            audios.riser = riser
            if (!localStorage.getItem('mute')) {riser.play()}
        }, 1000)

        setTimeout(function() {
            // Starts when white
            body.style.backgroundColor = "#FFFFFF"
            
            mainPageTransition()

            var opacity = {opacity:99};
            var tween = new TWEEN.Tween(opacity).to({opacity:0}, 2000).start()

            tween.onUpdate(function(){body.style.backgroundColor = `#FFFFFF${Math.floor(opacity.opacity).toString().padStart(2, "0")}`});
            tween.onComplete(function() {body.style.backgroundColor = null});
            
            audios.allShots = allShots
            if (!localStorage.getItem('mute')) {allShots.play()}

            setTimeout(function() {
                doRepeating = function() {
                    audios.shotsRepeating = shotsRepeating.cloneNode(true)
                    audios.shotsRepeating.volume = 0.4
                    if (!localStorage.getItem('mute')) {audios.shotsRepeating.play()}
                }
                doRepeating()
                //setInterval(doRepeating, 33000)
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
            audios.during = during.cloneNode(true)
            audios.during.play();
        }
        audios.click = click.cloneNode(true)
        if (OSName != "Mobile") audios.click.play();
    }
}

function reloadMute() {
    if (!storage.getItem("mute")) {
        mute.innerHTML = `<i class="fas fa-volume-up muteIcon"></i>`
        for (audio in audios) {
            audios[audio].muted = false
        }
    } else {
        mute.innerHTML = `<i class="fas fa-volume-mute"></i>`
        for (audio in audios) {
            audios[audio].muted = true
        }
    }
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
        setInterval(refreshSound, (during.duration-0.1)*1000)
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
    if (simpleView.innerHTML.includes("simple view")) {
        srch = new URLSearchParams(location.search)
        srch.append("simpleView", "")
        window.open((location.protocol + '//' + location.host + location.pathname) + "?" + srch.toString().split("=").join(""), "_self")
    }
    if (simpleView.innerHTML.includes("3d view")) {
        srch = new URLSearchParams(location.search)
        srch.delete("simpleView", "")
        window.open((location.protocol + '//' + location.host + location.pathname) + "?" + srch.toString().split("=").join(""), "_self")
    }
}

viewIntro.onclick = function () {
    srch = new URLSearchParams(location.search)
    srch.append("viewIntro", "")
    window.open((location.protocol + '//' + location.host + location.pathname) + "?" + srch.toString().split("=").join(""), "_self")

}

function setYouTube() {
    storage.setItem("type", "youtube")
    loadEmbeds()
}
function setSoundCloud() {
    storage.setItem("type", "soundcloud")
    loadEmbeds()
}

function loadEmbeds() {
    if (!storage.getItem("type") || storage.getItem("type") == "soundcloud") {
        document.getElementById("switch-soundcloud").style.backgroundColor = "rgb(255, 255, 255, 0.4)"
        document.getElementById("switch-youtube").style.backgroundColor = "rgb(255, 255, 255, 0)"
        for (elementId in embedsSoundCloud) {
            element = document.getElementById(elementId)
    
            element.querySelector(".embed").innerHTML = embedsSoundCloud[elementId]
        }
    } else {
        document.getElementById("switch-youtube").style.backgroundColor = "rgb(255, 255, 255, 0.4)"
        document.getElementById("switch-soundcloud").style.backgroundColor = "rgb(255, 255, 255, 0)"
        for (elementId in embedsYouTube) {
            element = document.getElementById(elementId)
    
            element.querySelector(".embed").innerHTML = embedsYouTube[elementId]
        }
    }
    
}


function loadBios() {
    counter = 0
    for (bio in bios) {
        counter += 1

        element = document.getElementById(`bio-${counter}`)
        element.querySelector(".description").innerHTML = `<div class="bio-title">${bio}</div>${bios[bio]}`
    }
}


function reSize() {
    bios_ids = ["ep", "bio-1", "bio-2", "bio-3", "bio-4", "bio-5", "bio-6"]
    totalHeight = 900

    if (window.innerWidth / 24 <= 80) document.getElementById("title").style.fontSize = window.innerWidth / 24

    for (bio of bios_ids) {
        element = document.getElementById(bio)
        

        if (window.innerWidth < 1100) {
            element.style.left = "25px"
            document.getElementById("switch").style.left = "25px"
        } else {
            element.style.left = "15%"
            document.getElementById("switch").style.left = "15%"
        }

        if (OSName == "Mobile") {

            element.querySelector(".description").style.width = (window.innerWidth / 2.82) + 50
            element.querySelector(".embed").style.left = (window.innerWidth / 2.82) + 150

            document.getElementById("switch").querySelector(".switchBox").style.left = (window.innerWidth / 2.82) + 150
        } else {
            
            element.querySelector(".description").style.width = window.innerWidth / 2.82
            element.querySelector(".embed").style.left = (window.innerWidth / 2.82) + (window.innerWidth / 7.68)

            document.getElementById("switch").querySelector(".switchBox").style.left = (window.innerWidth / 2.82) + (window.innerWidth / 7.68)
            
        }
        
        if (element.id.includes("bio")) {
            element.style.top = totalHeight
            if (element.style.height > 550 || element.style.height < 300) {

            } else {
                element.style.height = 700 - (window.innerWidth / 2.82 / 2)
            }
    
            totalHeight += element.clientHeight + 150
        }

    }

}
window.onresize = reSize
reSize()


