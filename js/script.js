// JavaScript Document
window.onload = function() {
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
  
  thingiurlbase = "/javascripts";
  thingiview = new Thingiview("viewer1");
  thingiview.setObjectColor('#EE3F42');
  thingiview.initScene();
  thingiview.loadSTL("/objects/cube.stl");
  thingiview.setShowPlane(true);	
}
	  
