import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){
 

//CALAVERA

//cabeza
var esfera = new THREE.SphereGeometry(6, 30, 30);
var material1 = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF, side: THREE.DoubleSide
});
var mesh0 = new THREE.Mesh(esfera, material1);
//scene.add(mesh1);
mesh0.position.set(22, 7, 0.3);


// barbilla
var cilindro = new THREE.CylinderGeometry(3.6, 3.6, 3.6, 30, 30, false, 0, 6.28);
var material1 = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF, side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(cilindro, material1);
//scene.add(mesh1);
mesh1.position.set(22, 2, 1);



// boca
var cilindro = new THREE.CylinderGeometry(1.3, 1.3, 1.3, 30, 30, false, 0, 6.28);
var material2 = new THREE.MeshBasicMaterial({
    color: 0x0000, side: THREE.DoubleSide
});
var mesh2 = new THREE.Mesh(cilindro, material2);
//scene.add(mesh2);
mesh2.position.set(22, 2, 3.8);

//Nariz
var cono = new THREE.ConeGeometry(0.9, 2, 9, 9, 9, 0, 6.28);
var material3 = new THREE.MeshBasicMaterial({
    color: 0x0000, side: THREE.DoubleSide
});
var mesh3 = new THREE.Mesh(cono, material3);
//scene.add(mesh3);
mesh3.position.set(22, 4.4, 5.6);


//Ojos
var circulo = new THREE.CircleGeometry(1.2, 30);
var material4 = new THREE.MeshBasicMaterial({
    color: 0x0000, side: THREE.DoubleSide
});
var mesh4 = new THREE.Mesh(circulo, material4);
//scene.add(mesh4);
mesh4.position.set(20, 6, 6.2);



var circulo = new THREE.CircleGeometry(1.2, 30);
var material5 = new THREE.MeshBasicMaterial({
    color: 0x0000, side: THREE.DoubleSide
});
var mesh5 = new THREE.Mesh(circulo, material5);
//scene.add(mesh5);
mesh5.position.set(23.9, 6, 6.2);


// Figuras especiales
 
 
 
 
 
 
 
 
 
 var cal =new THREE.Group();
 cal.add(mesh0,mesh1,mesh2,mesh3,mesh4,mesh5);
 cal.position.set(x,y,z);
 return cal; 
 

       
    }
   
