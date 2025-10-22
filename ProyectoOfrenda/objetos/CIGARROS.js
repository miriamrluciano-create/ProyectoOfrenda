
import * as THREE from "../js/three.module.js";
export default function E12 ({x,y,z}){

//CIGARROS
// Base de la cajetilla
var geometryBase = new THREE.BoxGeometry(1.2, 1.4, 0.5);
var materialBase = new THREE.MeshLambertMaterial({ color: 0xffffff });
var base = new THREE.Mesh(geometryBase, materialBase);
//scene.add(base);
base.position.set(0, 0, 0);

// Parte roja inferior
var geometryRojo = new THREE.BoxGeometry(1.1, 0.4, 0.51);
var materialRojo = new THREE.MeshLambertMaterial({ color: 0xd32f2f });
var rojo = new THREE.Mesh(geometryRojo, materialRojo);
//scene.add(rojo);
rojo.position.set(0, -0.5, 0);

// Tapa (parte superior abierta)
var geometryTapa = new THREE.BoxGeometry(1, 0.3, 0.5);
var materialTapa = new THREE.MeshLambertMaterial({ color: 0xd32f2f });
var tapa = new THREE.Mesh(geometryTapa, materialTapa);
//scene.add(tapa);
tapa.position.set(0, 0.85, 0.1);

var cig = new THREE.Group();
        cig.add(base,rojo,tapa);
        cig.position.set(x,y,z);
        return cig;
}

