
import * as THREE from "../js/three.module.js";
export default function E11 ({x,y,z}){
//Copal
var cilindro = new THREE.CylinderGeometry(3, 3, 0.9, 30, 30, false, 0, 6.28);
var material1 = new THREE.MeshLambertMaterial({
    color: 0x000000 , side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(cilindro, material1);
//scene.add(mesh1);
mesh1.position.set(0,0.9,0);

var cilindro = new THREE.CylinderGeometry(0.8, 0.8, 5, 30, 30, false, 0, 6.28);
var material2 = new THREE.MeshLambertMaterial({
    color: 0x000000 , side: THREE.DoubleSide
});
var mesh2 = new THREE.Mesh(cilindro, material2);
//scene.add(mesh2);
mesh2.position.set(0,3.7,0);

var base = new THREE.CylinderGeometry(3.3, 2.5, 3.3, 32);
var material3 = new THREE.MeshLambertMaterial({ 
    color: 0x000000 
});
var mesh3 = new THREE.Mesh(base, material3);
//scene.add(mesh3);
mesh3.position.set(0, 6.3, 0);


var cilindro = new THREE.CylinderGeometry(3.3, 3.3, 0.5, 30, 30, false, 0, 6.28);
var material4 = new THREE.MeshLambertMaterial({
    color: 0xa18262 , side: THREE.DoubleSide
});
var mesh4 = new THREE.Mesh(cilindro, material4);
//scene.add(mesh4);
mesh4.position.set(0,8.2,0);

var cilindro = new THREE.CylinderGeometry(0.8, 0.8, 5, 30, 30, false, 0, 6.28);
var material5 = new THREE.MeshLambertMaterial({
    color: 0xEEE8AA , side: THREE.DoubleSide
});
var mesh5 = new THREE.Mesh(cilindro, material5);
//scene.add(mesh5);
mesh5.position.set(0,8.2,0);
mesh5.rotation.set(4.7,10.3,18);

var cilindro = new THREE.CylinderGeometry(0.8, 0.8, 5, 30, 30, false, 0, 6.28);
var material6 = new THREE.MeshLambertMaterial({
    color: 0xEEE8AA , side: THREE.DoubleSide
});
var mesh6 = new THREE.Mesh(cilindro, material6);
//scene.add(mesh6);
mesh6.position.set(-1,8.2,1);
mesh6.rotation.set(4,20,18.4);

var copal = new THREE.Group();
        copal.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6);
        copal.position.set(x,y,z);
        return copal;
}
