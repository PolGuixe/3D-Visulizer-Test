// JavaScript Document

var camera, scene, renderer, geometry, material, mesh, light1, stats;

var mouseX = 0, mouseY = 0;


var canvasWidth = document.getElementsByClassName("canvas").innerWidth;
var canvasHeight = document.getElementsByClassName("canvas").innerHeight;

console.log(canvasWidth);
console.log(canvasHeight);

window.onload = function() {

/* THREE.JS viewer implementation*/    

//call functions   
init();    
animate();

//Initialize function    
function init(){
    // This <div> will host the canvas for our scene.
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    
    // You can adjust the cameras distance and set the FOV to something
    // different than 45°. The last two values set the clippling plane.
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1,        2000 );
    camera.position.z = 100;
}
    
function animate(){
    
}
    
    
    
    
    
    
/* JSC3D viewer implementation */
    
  var canvas = document.getElementById('jsc3d');
  var viewer = new JSC3D.Viewer(canvas);
  viewer.setParameter('SceneUrl', 'objects/test print 2.stl');
  viewer.setParameter('InitRotationX', 45);
  viewer.setParameter('InitRotationY', 45);
  viewer.setParameter('InitRotationZ', 45);
  viewer.setParameter('ModelColor', '#CAA618');
  viewer.setParameter('Background', 'off');
  viewer.setParameter('RenderMode', 'texturesflat');
  viewer.setParameter('MipMapping', 'on');
  viewer.setParameter('Renderer', 'webgl');
  viewer.init();
  viewer.update();
  
    
/* THINGIVIEW viewer implementation */    
  thingiurlbase = "/javascripts";
  thingiview = new Thingiview("viewer1");
  thingiview.setObjectColor('#EE3F42');
  thingiview.initScene();
  thingiview.loadSTL("/objects/cube.stl");
  thingiview.setShowPlane(true);	
}
	  
