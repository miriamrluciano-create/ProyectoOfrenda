import *as THREE from"../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"
export default function E08({x,y,z}){
//Botella
var cubo = new RoundedBoxGeometry(4.5,10, 4.5, 8, 2);
var material1 = new THREE.MeshLambertMaterial({
    color: 0x006A4E, side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(cubo, material1);
//scene.add(mesh1);
mesh1.position.set(0, 5, 0);


var cilindro = new THREE.CylinderGeometry(0.7, 1.5, 4, 30, 30, false, 0, 6.28);
var material2 = new THREE.MeshLambertMaterial({
    color: 0x006A4E, side: THREE.DoubleSide
});
var mesh2 = new THREE.Mesh(cilindro, material2);
//scene.add(mesh2);
mesh2.position.set(0, 10.7, 0);


var cilindro2 = new THREE.CylinderGeometry(0.8, 0.8, 1, 30, 30, false, 0, 6.28);
var material3 = new THREE.MeshLambertMaterial({
    color: 0xCD853F, side: THREE.DoubleSide
  
});
var mesh3 = new THREE.Mesh(cilindro2, material3);
//scene.add(mesh3);
mesh3.position.set(0, 13, 0);

var botella = new THREE.Group();
        botella.add(mesh1,mesh2,mesh3);
        botella.position.set(x,y,z);
        return botella;
}

