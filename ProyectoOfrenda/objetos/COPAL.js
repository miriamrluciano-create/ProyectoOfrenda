
import * as THREE from "../js/three.module.js";
export default function E12 ({x,y,z}){

//COPAL
var copal1Geo = new THREE.CylinderGeometry(0.15,0.15,0.5,16);
var copalMat = new THREE.MeshLambertMaterial({color:0x8B4513});
var copal1 = new THREE.Mesh(copal1Geo, copalMat);
//scene.add(copal1);
copal1.position.set(1.5,0.25,1);

var humo1Geo = new THREE.SphereGeometry(0.05,8,8);
var humo1Mat = new THREE.MeshLambertMaterial({color:0xCCCCCC});
var humo1 = new THREE.Mesh(humo1Geo, humo1Mat);
//scene.add(humo1);
humo1.position.set(1.5,0.55,1);



var copal3 = new THREE.Group();
        copal3.add(copal1,humo1);
        copal3.position.set(x,y,z);
        return copal3;
}

