import *as THREE from"../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"
export default function E12({x,y,z}){
 

// PAN DE MUERTO :)
var pan = new RoundedBoxGeometry (12,12,10,20,12);
        var matpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var meshpan = new THREE.Mesh(pan,matpan);
    //scene.add(meshpan);
    meshpan.position.set(0,4.5,0);
meshpan.rotation.set(4.7,9.4,18);

var bolitapan = new RoundedBoxGeometry (4,4,9,20,6);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh1  = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
   mesh1 .position.set(0,6.2,0);
mesh1.rotation.set(4.7,9.4,18);

//FILA 1

//BOLITA1

var bolitapan = new RoundedBoxGeometry (2.5,2.5,2.5,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh2 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
     mesh2.position.set(4,8,0);
 mesh2.rotation.set(4.7,9.4,18);


//BOLITA 2

var bolitapan = new RoundedBoxGeometry (2.5,2.5,2.5,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var  mesh3 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
     mesh3.position.set(2.5,8.7,0);
mesh3.rotation.set(4.7,9.4,18);

//BOLITA 3
var bolitapan = new RoundedBoxGeometry (3,3,3,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh4 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh4.position.set(5,6.2,0);
mesh4.rotation.set(4.7,9.4,18);

//BOLITA 4
var bolitapan = new RoundedBoxGeometry (4,4,4,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh5 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh5.position.set(5,4,0);
mesh5.rotation.set(4.7,9.4,18);


//FILA 2

//BOLITA2_1
var bolitapan = new RoundedBoxGeometry (2.5,2.5,2.5,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh6 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh6.position.set(-2.6,8.6,0);
mesh6.rotation.set(4.7,9.4,18);

//BOLITA2_2
var bolitapan = new RoundedBoxGeometry (2.5,2.5,2.5,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh7 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh7.position.set(-4,7.8,0);
mesh7.rotation.set(4.7,9.4,18);


//BOLITA2_3

var bolitapan = new RoundedBoxGeometry (3,3,3,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh8 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh8.position.set(-4.9,6.3,0);
mesh8.rotation.set(4.7,9.4,18);


//BOLITA2_4

var bolitapan = new RoundedBoxGeometry (4,4,4,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh9 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh9.position.set(-4.9,4.2,0);
mesh9.rotation.set(4.7,9.4,18);


//FILA 3

//BOLITA3_1
var bolitapan = new RoundedBoxGeometry (2.5,2.5,2.5,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh10 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh10.position.set(0,8.7,2.3);
mesh10.rotation.set(4.7,9.4,18);

//BOLITA3_2
var bolitapan = new RoundedBoxGeometry (2.5,2.5,2.5,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh11 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh11.position.set(0,8.1,3.6);
mesh11.rotation.set(4.7,9.4,18);
 

//BOLITA3_3
var bolitapan = new RoundedBoxGeometry (3,3,3,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh12 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh12.position.set(0,7,4.4);
mesh12.rotation.set(4.7,9.4,18);


//BOLITA3_3
var bolitapan = new RoundedBoxGeometry (3,3,3,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh13 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh13.position.set(0,7,4.4);
mesh13.rotation.set(4.7,9.4,18);

 
//BOLITA3_4
var bolitapan = new RoundedBoxGeometry (4,4,4,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh14 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh14.position.set(0,5,5);
mesh14.rotation.set(4.7,9.4,18);


//FILA 4

 //BOLITA4_1
var bolitapan = new RoundedBoxGeometry (2.5,2.5,2.5,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh15 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh15.position.set(0,8.7,-2.3);
mesh15.rotation.set(4.7,9.4,18);
 
//BOLITA 4_2
var bolitapan = new RoundedBoxGeometry (2.5,2.5,2.5,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh16 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh16.position.set(0,8.1,-3.6);
mesh16.rotation.set(4.7,9.4,18);
 

//BOLITA 4_3
var bolitapan = new RoundedBoxGeometry (3,3,3,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh17 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh17.position.set(0,7,-4.4);
mesh17.rotation.set(4.7,9.4,18); 

var bolitapan = new RoundedBoxGeometry (4,4,4,20,2);
        var matbpan= new THREE.MeshLambertMaterial(
            {
                color:0xC98D67, side: THREE.DoubleSide
            }
        );
    var mesh18 = new THREE.Mesh(bolitapan,matbpan);
    //scene.add(meshbpan);
    mesh18.position.set(0,5,-5);
mesh18.rotation.set(4.7,9.4,18);


var pan =new THREE.Group();
pan.add(meshpan,mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18);
pan.position.set(x,y,z);
return pan; 

    }