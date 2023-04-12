import * as THREE from "./three.module.js"
import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js';



//Declaration of a new scene with Three.js
const scene = new THREE.Scene();

//Camera and renderer configuration
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(400, 100, 100); 
camera.lookAt(scene.position); //yeni
camera.position.z = 5;

const loader = new GLTFLoader();

loader.load('scene.gltf', function (gltf) {

    scene.add(gltf.scene);

}, undefined, function (error) {

    console.error(error);

});

scene.background = new THREE.Color(0xffffff);
var light = new THREE.HemisphereLight(0xffffff);
scene.add(light);


function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();