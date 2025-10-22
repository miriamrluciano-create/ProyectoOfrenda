
import *as THREE from"../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"
export default function E015({x,y,z}){

//FLOR2
var petalo2 = new RoundedBoxGeometry(0.5, 1.5, 0.5, 8, 2); // llamar a la librería para redondear
var material11 = new THREE.MeshLambertMaterial({ // material nuevo
    color: 0xFF7B00,
    side: THREE.DoubleSide
});

// Crear meshes
var mesh32 = new THREE.Mesh(petalo2, material11);
mesh32.position.set(0, 2, 0);
mesh32.castShadow = true;
//scene.add(mesh32);
var mesh33 = new THREE.Mesh(petalo2, material11);
mesh33.rotation.set(0, 0, 0.785);
mesh33.position.set(0, 2, 0);
mesh33.castShadow = true;
//scene.add(mesh33);
var mesh34 = new THREE.Mesh(petalo2, material11);
mesh34.rotation.set(0, 0, 1.57);
mesh34.position.set(0, 2, 0);
mesh34.castShadow = true;
//scene.add(mesh34);
var mesh35 = new THREE.Mesh(petalo2, material11);
mesh35.rotation.set(0, 0, 2.355);
mesh35.position.set(0, 2, 0);
mesh35.castShadow = true;
//scene.add(mesh35);

// Crear meshes
var mesh36 = new THREE.Mesh(petalo2, material11);
mesh36.position.set(0, 2, 0);
mesh36.rotation.set(1.57, 0, 0);
mesh36.castShadow = true;
//scene.add(mesh36);
var mesh37 = new THREE.Mesh(petalo2, material11);
mesh37.rotation.set(1.57, 0, 0.785);
mesh37.position.set(0, 2, 0);
mesh37.castShadow = true;
//scene.add(mesh37);
var mesh38 = new THREE.Mesh(petalo2, material11);
mesh38.rotation.set(1.57, 0, 1.57);
mesh38.position.set(0, 2, 0);
mesh38.castShadow = true;
//scene.add(mesh38);
var mesh39 = new THREE.Mesh(petalo2, material11);
mesh39.rotation.set(1.57, 0, 2.355);
mesh39.position.set(0, 2, 0);
mesh39.castShadow = true;
//scene.add(mesh39);

var cem = new THREE.Group();
        cem.add(mesh32,mesh33,mesh34,mesh35,mesh36,mesh37,mesh38,mesh39);
        cem.position.set(x,y,z);
        return cem;
}