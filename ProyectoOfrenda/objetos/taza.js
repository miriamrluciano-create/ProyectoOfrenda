import * as THREE from "../js/three.module.js";
export default function E09 ({x,y,z}){

//taza de barro 

var cilindro = new THREE.CylinderGeometry(2, 2, 5, 30, 30, false, 0, 6.28);
var material1 = new THREE.MeshLambertMaterial({
    color: 0X8B4513, side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(cilindro, material1);
//scene.add(mesh1);
mesh1.position.set(22, 2.5, 5);

var torus = new THREE.TorusGeometry(1.4, 0.5, 30, 30, 6.28);
var material2 = new THREE.MeshLambertMaterial({
    color: 0x8B4513, side: THREE.DoubleSide
});
var mesh2 = new THREE.Mesh(torus, material2);
//scene.add(mesh2);
mesh2.position.set(19.6, 2.5, 5);

//decoracion de taza 
var cilindro = new THREE.CylinderGeometry(2, 2, 0.8, 30, 30, false, 0, 6.28);
var material3 = new THREE.MeshLambertMaterial({
    color: 0X006400, side: THREE.DoubleSide
});
var mesh3 = new THREE.Mesh(cilindro, material3);
//scene.add(mesh3);
mesh3.position.set(22, 5.4, 5);

var esfera = new THREE.SphereGeometry(0.5, 30, 30);
var material4 = new THREE.MeshBasicMaterial({
    color: 0xDAA520, side: THREE.DoubleSide
});
var mesh4 = new THREE.Mesh(esfera, material4);
//scene.add(mesh4);
mesh4.position.set(22, 3, 6.8);


var esfera = new THREE.SphereGeometry(0.5, 30, 30);
var material5 = new THREE.MeshBasicMaterial({
    color: 0xF5DEB3, side: THREE.DoubleSide
});
var mesh5= new THREE.Mesh(esfera, material5);
//scene.add(mesh5);
mesh5.position.set(21.4, 3, 6.6);

var esfera = new THREE.SphereGeometry(0.5, 30, 30);
var material6 = new THREE.MeshBasicMaterial({
    color: 0xF5DEB3,
    side: THREE.DoubleSide
});
var mesh6 = new THREE.Mesh(esfera, material6);
//scene.add(mesh6);
mesh6.position.set(21.8, 3.6, 6.7);

var esfera = new THREE.SphereGeometry(0.5, 30, 30);
var material7 = new THREE.MeshBasicMaterial({
    color: 0xF5DEB3,
    side: THREE.DoubleSide
});
var mesh7 = new THREE.Mesh(esfera, material7);
//scene.add(mesh7);
mesh7.position.set(22.6, 3.5, 6.7);

var esfera = new THREE.SphereGeometry(0.5, 30, 30);
var material8 = new THREE.MeshBasicMaterial({
    color: 0xF5DEB3,
    side: THREE.DoubleSide
});
var mesh8 = new THREE.Mesh(esfera, material8);
//scene.add(mesh8);
mesh8.position.set(22.6, 2.7, 6.7);

var esfera = new THREE.SphereGeometry(0.5, 30, 30);
var material9 = new THREE.MeshBasicMaterial({
    color: 0xF5DEB3,
    side: THREE.DoubleSide
});
var mesh9 = new THREE.Mesh(esfera, material9);
//scene.add(mesh9);
mesh9.position.set(21.8, 2.4, 6.7);

var taza = new THREE.Group();
    taza.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9);
    taza.position.set(x,y,z);
    return taza;
}
