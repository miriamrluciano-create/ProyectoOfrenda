import * as THREE from "../js/three.module.js";
export default function E14 ({x,y,z}){




// AGUA (un poco más baja y adentro del vaso)
var geometryAgua = new THREE.CylinderGeometry(0.28, 0.13, 0.7, 32);
var texture = new THREE.TextureLoader().load("./image/agua.jpg");
var material =new THREE .MeshLambertMaterial({map:texture,side:THREE.DoubleSide})
var agua = new THREE.Mesh(geometryAgua, material);
//scene.add(agua);
agua.position.set(-3, 1, 0);


var vaso2 = new THREE.Group();
        vaso2.add(agua);
        vaso2.position.set(x,y,z);
        return vaso2;

}

