var camera, scene, renderer;


var isUserInteracting = false,
    onMouseDownMouseX = 0, onMouseDownMouseY = 0,
    lon = 0, onMouseDownLon = 0,
    lat = 0, onMouseDownLat = 0,
    phi = 0, theta = 0;

init();
animate();

function init() {

    var container, mesh;

    container = document.getElementById( 'container' );

    camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 1, 1100 );
    camera.target = new THREE.Vector3(1, 1, 1);

    scene = new THREE.Scene();

    var geometry = new THREE.BoxGeometry(7, 7, 7);
    geometry.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));

var colors = [
    0x120000,
    0x090000,
    0x150000,
    0x110000,
    0x100000,
    0x030000
    
]

var material = [
    new THREE.MeshBasicMaterial( { color: colors[0] } ),
    new THREE.MeshBasicMaterial( { color: colors[1] } ),
    new THREE.MeshBasicMaterial( { color: colors[2] } ),
    new THREE.MeshBasicMaterial( { color: colors[3] } ),
    new THREE.MeshBasicMaterial( { color: colors[4] } ), // front
    new THREE.MeshBasicMaterial( { color: colors[5] } )
    ];
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

setInterval(function() {
    camera.rotation.x += 0.0001
    camera.rotation.z += 0.0001
    camera.rotation.y += 0.0001
}, 2)

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
        console.log(position)
        camera.fov = position.fov
        camera.updateProjectionMatrix();
    });
    
})