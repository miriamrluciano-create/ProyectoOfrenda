import * as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"
export default function E04 ({x,y,z}){
 

//flores
var petalo = new RoundedBoxGeometry(0.5, 2.5, 0.5, 8, 2); // llamar a la librería para redondear
var material10 = new THREE.MeshLambertMaterial({ // material nuevo
    color: 0x8764D1,
    side: THREE.DoubleSide
});

// Crear meshes
var mesh27 = new THREE.Mesh(petalo, material10);
mesh27.position.set(0, 0, 0);
mesh27.castShadow = true;
//scene.add(mesh27);
var mesh28 = new THREE.Mesh(petalo, material10);
mesh28.rotation.set(0, 0, 0.785);
mesh28.castShadow = true;
//scene.add(mesh28);
var mesh29 = new THREE.Mesh(petalo, material10);
mesh29.rotation.set(0, 0, 1.57);
mesh29.castShadow = true;
//scene.add(mesh29);
var mesh30 = new THREE.Mesh(petalo, material10);
mesh30.rotation.set(0, 0, 2.355);
mesh30.castShadow = true;
//scene.add(mesh30);

//FLOR2
var petalo2 = new RoundedBoxGeometry(0.5, 2.5, 0.5, 8, 2); // llamar a la librería para redondear
var material11 = new THREE.MeshLambertMaterial({ // material nuevo
    color: 0xCF863C,
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


 var flor = new THREE.Group();
    flor.add(mesh27,mesh28,mesh29,mesh30,mesh32,mesh33,mesh34,mesh35
        );
    flor.position.set(x,y,z);
    return flor;
}