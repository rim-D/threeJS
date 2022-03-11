import * as THREE from '../bulid/three.module.js';

class App {
    constructor() {
        const divContainer = document.querySelector('#webgl-container');
        this._divContainer = divContainer;

        const renderer = new THREE.WebGLREnderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        this._renderer = renderer;

        const scene = new THREE.Scene();
        this._scene = scene;

        this._setupCamera();
        this._setupLight();
        this._setupModel();

        window.onresize = this.resize.bind(this);
        this.reszie();

        requestAnimationFrame(this.render.bind(this));
    }
}

window.onload = function() {
    new App();
}