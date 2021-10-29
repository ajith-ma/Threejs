define('threejs', ['Ajith_Test/js/three.min'], function (THREE) {
    window.THREE = THREE;
    return THREE;
 });
 define('gltfloader', ['Ajith_Test/js/GLTFLoader'], function (gltfloader) {
    window.gltfloader = gltfloader;
    return gltfloader;
 });
 define('OrbitControls', ['Ajith_Test/js/OrbitControls'], function (OrbitControls) {
    window.OrbitControls = OrbitControls;
    return OrbitControls;
 });
 define('Croppr', ['Ajith_Test/js/croppr.min'], function (Croppr) {
   window.Croppr = Croppr;
   return Croppr;
   
});
define('canvastoBlob', ['Ajith_Test/js/canvas-toBlob.min'], function (canvastoBlob) {
   window.canvastoBlob = canvastoBlob;
   return canvastoBlob;
});
define('FileSaver', ['Ajith_Test/js/FileSaver.min'], function (FileSaver) {
   window.FileSaver = FileSaver;
   return FileSaver;
});

 
 var config = {
 paths:{
    threejs: 'Ajith_Test/js/three.min',
    gltfloader: 'Ajith_Test/js/GLTFLoader',
    OrbitControls: 'Ajith_Test/js/OrbitControls',
    Croppr: 'Ajith_Test/js/croppr.min',
    canvastoBlob:'Ajith_Test/js/canvastoBlob',
    FileSaver: 'Ajith_Test/js/FileSaver.min'
    
 
 },
 shim: {
     'Ajith_Test/js/GLTFLoader': {
         deps: ['threejs']
     },
     'Ajith_Test/js/OrbitControls': {
        deps: ['threejs']
     }
  }
 };