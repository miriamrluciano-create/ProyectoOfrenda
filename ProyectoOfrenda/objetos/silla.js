import * as THREE from "../js/three.module.js";

export default function E03 ({x,y,z}){

//Silla
var basesilla = new THREE.BoxGeometry(20, 3, 20, 5, 5, 5);
var material7 = new THREE.MeshLambertMaterial({
    color: 0xBF60B4, side: THREE.DoubleSide
});
var mesh17 = new THREE.Mesh(basesilla, material7);
// scene.add(mesh17);
mesh17.position.set(0, 50, 45);
mesh17.receiveShadow = true;
mesh17.castShadow = true;
//palos
var palosilla = new THREE.CylinderGeometry(1, 1, 20, 50, 6.283, false);
var mesh18 = new THREE.Mesh(palosilla, material7);
// scene.add(mesh18);
mesh18.position.set(7, 40, 38);
mesh18.receiveShadow = true;
mesh18.castShadow = true;

var palosilla = new THREE.CylinderGeometry(1, 1, 20, 50, 6.283, false);
var mesh19 = new THREE.Mesh(palosilla, material7);
// scene.add(mesh19);
mesh19.position.set(-7, 40, 38);
mesh19.receiveShadow = true;
mesh19.castShadow = true;

var palosilla = new THREE.CylinderGeometry(1, 1, 20, 50, 6.283, false);
var mesh20 = new THREE.Mesh(palosilla, material7);
// scene.add(mesh20);
mesh20.position.set(-7, 40, 53);
mesh20.receiveShadow = true;
mesh20.castShadow = true;

var palosilla = new THREE.CylinderGeometry(1, 1, 20, 50, 6.283, false);
var mesh21 = new THREE.Mesh(palosilla, material7);
// scene.add(mesh21);
mesh21.position.set(7, 40, 53);
mesh21.receiveShadow = true;
mesh21.castShadow = true;

//respaldo
var palosilla = new THREE.CylinderGeometry(1, 1, 20, 50, 6.283, false);
var mesh22 = new THREE.Mesh(palosilla, material7);
// scene.add(mesh22);
mesh22.position.set(-7, 60, 53);
mesh22.receiveShadow = true;
mesh22.castShadow = true;

var palosilla = new THREE.CylinderGeometry(1, 1, 20, 50, 6.283, false);
var mesh23 = new THREE.Mesh(palosilla, material7);
// scene.add(mesh23);
mesh23.position.set(7, 60, 53);
mesh23.receiveShadow = true;
mesh23.castShadow = true;

var palosilla = new THREE.CylinderGeometry(1, 1, 15, 50, 6.283, false);
var mesh24 = new THREE.Mesh(palosilla, material7);
// scene.add(mesh24);
mesh24.position.set(0, 63, 53);
mesh24.receiveShadow = true;
mesh24.castShadow = true;
mesh24.rotation.z = 1.57;

  
 var silla = new THREE.Group();
    silla.add(mesh17,mesh18,mesh19,mesh20,mesh21,mesh21,mesh22,mesh23,mesh24);
    silla.position.set(x,y,z);
    return silla;
}