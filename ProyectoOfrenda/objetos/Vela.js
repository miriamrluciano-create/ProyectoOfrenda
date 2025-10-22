import * as THREE from "../js/three.module.js";
export default function E01 ({x,y,z}){


//Objetos
   
// Vela
    var vela = new THREE.CylinderGeometry(1, 1, 3.5, 30, 30, false);
    var material2 = new THREE.MeshLambertMaterial(
        {
            color: 0xD4D4A7, // color cremita
            side: THREE.DoubleSide
        }
    );
    var mesh2 = new THREE.Mesh(vela, material2);
    //scene.add(mesh2);
    mesh2.position.set(0, 1.75, 0);
    mesh2.castShadow = true;
// Pabilo
    var pabilo = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 10, 1, false);
    var material3 = new THREE.MeshLambertMaterial(
        {
            color: 0x333333, side: THREE.DoubleSide
        }
    );
    var mesh3 = new THREE.Mesh(pabilo, material3);
   // scene.add(mesh3);
    mesh3.position.set(0, 3.5, 0);
// Fuego 
    var fuego = new THREE.ConeGeometry(0.3, 0.6, 20); 
    var material4 = new THREE.MeshLambertMaterial(
        {
            color: 0xED993B, side: THREE.DoubleSide
        }
    );
    var mesh4 = new THREE.Mesh(fuego, material4);
   // scene.add(mesh4);
    mesh4.position.set(0, 4, 0); 

    var Velafin = new THREE.Group();
    Velafin.add(mesh2,mesh3,mesh4);
    Velafin.position.set(x,y,z);
    return Velafin;
}