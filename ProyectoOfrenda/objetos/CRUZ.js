import * as THREE from "../js/three.module.js";
export default function E10 ({x,y,z}){

//CRUZ 
var cruzVerticalGeo = new THREE.BoxGeometry(0.2,1,0.1);
var cruzMat = new THREE.MeshLambertMaterial({color:0xBFB29B});
var cruzVertical = new THREE.Mesh(cruzVerticalGeo, cruzMat);
//scene.add(cruzVertical);
cruzVertical.position.set(2,0.5,-2);

var cruzHorizontalGeo = new THREE.BoxGeometry(0.6,0.2,0.1);
var cruzHorizontal = new THREE.Mesh(cruzHorizontalGeo, cruzMat);
//scene.add(cruzHorizontal);
cruzHorizontal.position.set(2,0.7,-2);

var cruz = new THREE.Group();
        cruz.add(cruzVertical,cruzHorizontal);
        cruz.position.set(x,y,z);
        return cruz;

}
