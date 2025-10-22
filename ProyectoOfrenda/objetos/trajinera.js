import * as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"
export default function E02 ({x,y,z}){
 //TrajineraBase
var basetraji1 = new THREE.BoxGeometry(260, 10, 130, 5, 5, 5);
var material1 = new THREE.MeshLambertMaterial({
    color: 0x2F7E96, side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(basetraji1, material1);
// scene.add(mesh1);
mesh1.position.set(0, 10, 0);
mesh1.receiveShadow = true;
mesh1.castShadow = true;

var basetraji2 = new THREE.BoxGeometry(280, 10, 130, 5, 5, 5);
var mesh2 = new THREE.Mesh(basetraji2, material1);
// scene.add(mesh2);
mesh2.position.set(0, 20, 0);
mesh2.receiveShadow = true;
mesh2.castShadow = true;

var basetraji3 = new THREE.BoxGeometry(300, 10, 150, 5, 5, 5);
var material2 = new THREE.MeshLambertMaterial({
    color: 0xB8AB3E, side: THREE.DoubleSide
});
var mesh3 = new THREE.Mesh(basetraji3, material2);
// scene.add(mesh3);
mesh3.position.set(0, 30, 0);
mesh3.receiveShadow = true;
mesh3.castShadow = true;

var basetraji4 = new THREE.BoxGeometry(280, 5, 130, 5, 5, 5);
var material3 = new THREE.MeshLambertMaterial({
    color: 0xB83E3E, side: THREE.DoubleSide
});
var mesh4 = new THREE.Mesh(basetraji4, material3);
// scene.add(mesh4);
mesh4.position.set(0, 33, 0);
mesh4.receiveShadow = true;
mesh4.castShadow = true;
mesh4.castShadow = true;

//PalosTrajinera
//palo1
var palotraj = new THREE.CylinderGeometry(3, 3, 100, 50, 6.283, false);
var mesh5 = new THREE.Mesh(palotraj, material3);
// scene.add(mesh5);
mesh5.position.set(100, 80, 60);
mesh5.receiveShadow = true;
mesh5.castShadow = true;
//palo2
var mesh6 = new THREE.Mesh(palotraj, material3);
// scene.add(mesh6);
mesh6.position.set(-100, 80, 60);
mesh6.receiveShadow = true;
mesh6.castShadow = true;
//palo3
var mesh7 = new THREE.Mesh(palotraj, material3);
// scene.add(mesh7);
mesh7.position.set(-100, 80, -60);
mesh7.receiveShadow = true;
mesh7.castShadow = true;
//palo4
var mesh8 = new THREE.Mesh(palotraj, material3);
// scene.add(mesh8);
mesh8.position.set(100, 80, -60);
mesh8.receiveShadow = true;
mesh8.castShadow = true;

//TechoTrajinera
var techo = new THREE.CylinderGeometry(85, 85, 220, 50, 1, true, 1.5708, 1.871);
var material4 = new THREE.MeshLambertMaterial({
    color: 0x2F7E96, side: THREE.DoubleSide
});
var mesh9 = new THREE.Mesh(techo, material4);
// scene.add(mesh9);
mesh9.position.set(6, 74, 0);
mesh9.receiveShadow = true;
mesh9.castShadow = true;
mesh9.rotation.x = 0.94;
mesh9.rotation.z = 1.57;

//PalosLados
var palolado = new THREE.CylinderGeometry(3, 3, 200, 50, 6.283, false);

var mesh11 = new THREE.Mesh(palolado, material3);
// scene.add(mesh11);
mesh11.position.set(0, 60, 60);
mesh11.receiveShadow = true;
mesh11.castShadow = true;
mesh11.rotation.z = 1.57;

var mesh12 = new THREE.Mesh(palolado, material3);
// scene.add(mesh12);
mesh12.position.set(0, 60, -60);
mesh12.castShadow = true;
mesh12.receiveShadow = true;
mesh12.rotation.z = 1.57;

//Mesa
//tabla
var tabla = new THREE.BoxGeometry(180, 3, 80, 5, 5, 5);
var material5 = new THREE.MeshLambertMaterial({
    color: 0x78B550, side: THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(tabla, material5);
// scene.add(mesh13);
mesh13.position.set(0, 60, 0);
mesh13.receiveShadow = true;
mesh13.castShadow = true;
//palos
var palomesa = new THREE.CylinderGeometry(1.5, 1.5, 25, 50, 6.283, false);
var material6 = new THREE.MeshLambertMaterial({
    color: 0x78B550, side: THREE.DoubleSide
});
var mesh133 = new THREE.Mesh(palomesa, material6);
// scene.add(mesh13);
mesh133.position.set(85, 48, 35);
mesh133.receiveShadow = true;
mesh133.castShadow = true;

var mesh14 = new THREE.Mesh(palomesa, material6);
// scene.add(mesh14);
mesh14.position.set(-85, 48, 35);
mesh14.receiveShadow = true;
mesh14.castShadow = true;

var mesh15 = new THREE.Mesh(palomesa, material6);
// scene.add(mesh15);
mesh15.position.set(-85, 48, -35);
mesh15.receiveShadow = true;
mesh15.castShadow = true;

var mesh16 = new THREE.Mesh(palomesa, material6);
// scene.add(mesh16);
mesh16.position.set(85, 48, -35);
mesh16.receiveShadow = true;
mesh16.castShadow = true;



//entrada
var arco = new THREE.TorusGeometry(65, 7, 40, 100, 3.14);
var material8 = new THREE.MeshLambertMaterial(
    {
        color: 0x722194, side: THREE.DoubleSide
    }
);
var mesh25 = new THREE.Mesh(arco, material8);
//scene.add(mesh25);
mesh25.rotation.x = 1.57; 
mesh25.position.set(-110, 100, 0);
mesh25.receiveShadow = true;
mesh25.castShadow = true;
mesh25.rotation.y=1.57;
mesh25.rotation.x=0;

var arco2 = new THREE.TorusGeometry(55, 7, 40, 100, 3.14);
var material9 = new THREE.MeshLambertMaterial(
    {
        color: 0xB18FC2, side: THREE.DoubleSide
    }
);
var mesh26 = new THREE.Mesh(arco2, material9);
//scene.add(mesh26);
mesh26.rotation.x = 1.57; 
mesh26.position.set(-110, 100, 0);
mesh26.receiveShadow = true;
mesh26.castShadow = true;
mesh26.rotation.y=1.57;
mesh26.rotation.x=0;



 var trajinera = new THREE.Group();
    trajinera.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, mesh9,mesh11,mesh12,mesh13,mesh133, mesh14,mesh15,mesh16,mesh25,mesh26
        );
    trajinera.position.set(x,y,z);
    return trajinera;
}