import * as THREE from "../js/three.module.js";
export default function E06 ({x,y,z}){
//Platito
        var platito = new THREE.CylinderGeometry(2, 1, 0.4, 30, 1, false);
        var material1 = new THREE.MeshLambertMaterial(
            {
                color: 0xC2B280, side: THREE.DoubleSide
            }
        );
        var mesh1 = new THREE.Mesh(platito, material1);
        //scene.add(mesh1);
        mesh1.position.set(0, 0.5, 0);
        mesh1.receiveShadow = true;
        mesh1.castShadow = true;

//Manzana
    var manzana = new THREE.SphereGeometry(0.6, 32, 32);
    var material2 = new THREE.MeshLambertMaterial(
        {
            color: 0xFF0000, side: THREE.DoubleSide
        }
    );
    var mesh2 = new THREE.Mesh(manzana, material2);
    //scene.add(mesh2);
    mesh2.position.set(-0.8, 1.2, 0);
    mesh2.scale.set(1, 0.9, 1); 
    mesh2.receiveShadow = true;
    mesh2.castShadow = true;


//Palito de la manzana
    var palitoManzana = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8, 1, false);
    var material3 = new THREE.MeshLambertMaterial(
        {
            color: 0x4B2E2E, side: THREE.DoubleSide
        }
    );
    var mesh3 = new THREE.Mesh(palitoManzana, material3);
    //scene.add(mesh3);
    mesh3.position.set(-0.8, 1.8, 0);

// Mandarina
    var mandarina = new THREE.SphereGeometry(0.5, 32, 32);
    var material4 = new THREE.MeshLambertMaterial(
        {
            color: 0xFFA500, side: THREE.DoubleSide
        }
    );
    var mesh4 = new THREE.Mesh(mandarina, material4);
    //scene.add(mesh4);
    mesh4.position.set(0.8, 1.1, 0);
    mesh4.scale.set(1, 0.85, 1); 
    mesh4.receiveShadow = true;
        mesh4.castShadow = true;


// Palito de la mandarina
    var palitoMandarina = new THREE.CylinderGeometry(0.04, 0.04, 0.2, 8, 1, false);
    var material5 = new THREE.MeshLambertMaterial(
        {
            color: 0x228B22, side: THREE.DoubleSide
        }
    );
    var mesh5 = new THREE.Mesh(palitoMandarina, material5);
   // scene.add(mesh5);
    mesh5.position.set(0.8, 1.6, 0);

// Pera
    var pera = new THREE.SphereGeometry(0.55, 32, 32);
    var material6 = new THREE.MeshLambertMaterial(
        {
            color: 0xADFF2F, side: THREE.DoubleSide
        }
    );
    var mesh6 = new THREE.Mesh(pera, material6);
    //scene.add(mesh6);
    mesh6.position.set(0, 1.4, -0.8);
    mesh6.scale.set(0.9, 1.2, 0.9); 
    mesh6.receiveShadow = true;
        mesh6.castShadow = true;


// Palito de la pera
    var palitoPera = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 8, 1, false);
    var material7 = new THREE.MeshLambertMaterial(
        {
            color: 0x4B2E2E, side: THREE.DoubleSide
        }
    );
    var mesh7 = new THREE.Mesh(palitoPera, material7);
   // scene.add(mesh7);
    mesh7.position.set(0, 2.1, -0.8);

    var plato = new THREE.Group();
        plato.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7);
        plato.position.set(x,y,z);
        return plato;
}