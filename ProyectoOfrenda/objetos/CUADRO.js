import * as THREE from "../js/three.module.js";
export default function E07 ({x,y,z}){


// Parte exterior del marco
var geometry = new THREE.BoxGeometry(3, 4, 0.3, 1, 1, 1);
var material = new THREE.MeshLambertMaterial(
    {
        color: 0x8B4513, side: THREE.DoubleSide
    }
);
var mesh = new THREE.Mesh(geometry, material);
//scene.add(mesh);
mesh.position.set(0, 4.5, 0);

// Parte interior 
var geometryfoto = new THREE.BoxGeometry(2.2, 3.2, 0.1, 1, 1, 1);
 
var textureLoader = new THREE.TextureLoader();
var texturefoto = textureLoader.load('./image/kirby.jpg');

var materialFoto = new THREE.MeshLambertMaterial({map:texturefoto,transparent:true});
    side: THREE.DoubleSide

var meshFoto = new THREE.Mesh(geometryfoto, materialFoto);
//scene.add(meshFoto);
meshFoto.position.set(0, 4.5, 0.15);

var foto = new THREE.Group();
        foto.add(meshFoto,mesh);
        foto.position.set(x,y,z);
        return foto;
}

