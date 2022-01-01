var camera, scene, renderer;


var isUserInteracting = false,
    onMouseDownMouseX = 0, onMouseDownMouseY = 0,
    lon = 0, onMouseDownLon = 0,
    lat = 0, onMouseDownLat = 0,
    phi = 0, theta = 0;

var _speedconstant = 1.15600e-8;
var d = new Date();
var amount = 150000000;
for (var i = amount; i > 0; i--) {}
var newd = new Date();
var accnewd = Number(String(newd.getSeconds()) + "." + String(newd.getMilliseconds()));
var accd = Number(String(d.getSeconds()) + "." + String(d.getMilliseconds()));
var di = accnewd - accd;
if (d.getMinutes() != newd.getMinutes()) {di = (60 * (newd.getMinutes() - d.getMinutes())) + di}
spd = ((_speedconstant * amount) / di);
GHz = Math.round(spd * 1000) / 1000

if (GHz > 2.5 && !new URLSearchParams(window.location.search).get("simpleView") ) {
    init();
    animate();
}

if (new URLSearchParams(window.location.search).get("simpleView") == "true") {
    animateNoUpdate();
    document.getElementById("simpleView").innerHTML = "Load 3d view"
    window.history.pushState({}, document.title, "/")
}

var cameraAmount = 0.0001
var brightnessMultiplier = 1

function randomNum(min, max) {
    return Math.floor((Math.random() * max) + min)
}

function init() {

    var container, mesh;

    container = document.getElementById( 'container' );

    camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 1, 1100 );
    camera.target = new THREE.Vector3(1, 1, 1);

    scene = new THREE.Scene();

    var geometry = new THREE.BoxGeometry(7, 7, 7);
    geometry.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
    
    var meshColors = []
    min = 1
    max = 15

    meshColors = [
        randomNum(min, max)*brightnessMultiplier,
        randomNum(min, max)*brightnessMultiplier,
        randomNum(min, max)*brightnessMultiplier,
        randomNum(min, max)*brightnessMultiplier,
        randomNum(min, max)*brightnessMultiplier,
        randomNum(min, max)*brightnessMultiplier
    ]

    function getMaterial() {
        
        return [
            new THREE.MeshBasicMaterial( { color: `#${Math.floor(meshColors[0]).toString().padStart(2, '0').substring(0, 2)}0000` } ),
            new THREE.MeshBasicMaterial( { color: `#${Math.floor(meshColors[1]).toString().padStart(2, '0').substring(0, 2)}0000` } ),
            new THREE.MeshBasicMaterial( { color: `#${Math.floor(meshColors[2]).toString().padStart(2, '0').substring(0, 2)}0000` } ),
            new THREE.MeshBasicMaterial( { color: `#${Math.floor(meshColors[3]).toString().padStart(2, '0').substring(0, 2)}0000` } ),
            new THREE.MeshBasicMaterial( { color: `#${Math.floor(meshColors[4]).toString().padStart(2, '0').substring(0, 2)}0000` } ), // front
            new THREE.MeshBasicMaterial( { color: `#${Math.floor(meshColors[5]).toString().padStart(2, '0').substring(0, 2)}0000` } )
        ]
    }
    var material = getMaterial()

    mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'mouseup', onDocumentMouseUp, false );

    document.addEventListener( 'dragover', function ( event ) {

        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';

    }, false );

    document.addEventListener( 'dragenter', function ( event ) {

        document.body.style.opacity = 0.5;

    }, false );

    document.addEventListener( 'dragleave', function ( event ) {

        document.body.style.opacity = 1;

    }, false );

    document.addEventListener( 'drop', function ( event ) {

        event.preventDefault();

        var reader = new FileReader();
        reader.addEventListener( 'load', function ( event ) {

            material.map.image.src = event.target.result;
            material.map.needsUpdate = true;

        }, false );
        reader.readAsDataURL( event.dataTransfer.files[ 0 ] );

        document.body.style.opacity = 1;

    }, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

    setInterval(function() {
        camera.rotation.x += cameraAmount
        camera.rotation.z += cameraAmount
        camera.rotation.y += cameraAmount
    }, 2)
    
    setInterval(function() {

        var oldColors = {colors:meshColors};
        var newColors = {colors:[
            randomNum(min, max)*brightnessMultiplier,
            randomNum(min, max)*brightnessMultiplier,
            randomNum(min, max)*brightnessMultiplier,
            randomNum(min, max)*brightnessMultiplier,
            randomNum(min, max)*brightnessMultiplier,
            randomNum(min, max)*brightnessMultiplier
        ]};

        var tween = new TWEEN.Tween(oldColors).to(newColors, 400)
            .easing(TWEEN.Easing.Linear.None)
            .start()

        tween.onUpdate(function(){
            meshColors = oldColors.colors
            mat = getMaterial()
            mesh.material = mat
        });
    

        
    }, 500)

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseDown( event ) {

    event.preventDefault();

    isUserInteracting = true;

    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;

}

function onDocumentMouseMove( event ) {

    if ( isUserInteracting === true ) {

        lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
        lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

    }

}

function onDocumentMouseUp( event ) {

    isUserInteracting = false;

}

function animate(time) {

    requestAnimationFrame( animate );
    TWEEN.update(time);
    update();

}

function animateNoUpdate(time) {

    requestAnimationFrame( animateNoUpdate );
    TWEEN.update(time);

}



function update() {

    lat = Math.max( - 85, Math.min( 85, lat ) );
    phi = THREE.Math.degToRad( 90 - lat );
    theta = THREE.Math.degToRad( lon );

    camera.position.z = 0;

    renderer.render( scene, camera );


}

document.getElementById("enter").addEventListener("click", function() {
    var position = {fov:110};
    var target = {fov:75};
    var tween = new TWEEN.Tween(position).to(target, 2000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .start()

    tween.onUpdate(function(){
        try{camera.fov = position.fov}catch{}
        try{camera.updateProjectionMatrix();}catch{}
    });
    
})