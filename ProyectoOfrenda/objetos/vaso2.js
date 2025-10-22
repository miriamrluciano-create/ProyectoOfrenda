import * as THREE from "../js/three.module.js";
export default function E13 ({x,y,z}){

//vaso

var cilindro = new THREE.CylinderGeometry(2, 1.3, 7, 30, 30, false, 0, 6.28);
var texture1 = new THREE.TextureLoader().load("./image/vaso.jpg");
var material1 =new THREE .MeshLambertMaterial({map:texture1,side:THREE.DoubleSide})
var mesh1 = new THREE.Mesh(cilindro, material1);
//scene.add(mesh1);
mesh1.position.set(22, 4, 5);



var cilindro = new THREE.CylinderGeometry(2, 1.3, 7, 30, 30, false, 0, 6.28);
var texture2 = new THREE.TextureLoader().load("./image/vaso2.jpg");
var material2 =new THREE .MeshLambertMaterial({map:texture2,side:THREE.DoubleSide})
var mesh2 = new THREE.Mesh(cilindro, material2);
//scene.add(mesh2);
mesh2.position.set(12, 4, 5);

var vaso = new THREE.Group();
        vaso.add(mesh1,mesh2);
        vaso.position.set(x,y,z);
        return vaso;

}

