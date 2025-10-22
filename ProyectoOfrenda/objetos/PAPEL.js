import * as THREE from "../js/three.module.js";
export default function E05 ({x,y,z}){

var geometryPapel = new THREE.BoxGeometry(15,10,0.2);

 
var textureLoader = new THREE.TextureLoader();
var texturePapel = textureLoader.load('./image/papel1.png');



var materialPapel = new THREE.MeshBasicMaterial({map:texturePapel,transparent:true});
    side: THREE.DoubleSide

var papelPicado = new THREE.Mesh(geometryPapel, materialPapel);
//scene.add(papelPicado);
papelPicado.position.set(0, 0, 0);

var papel = new THREE.Group();
    papel.add(papelPicado);
    papel.position.set(x,y,z);
    return papel;

}





