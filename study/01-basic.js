import * as THREE from '../build/three.module';
/**
 ** 컨벤션
 ** 밑줄로 시작하는 field와 method는
 ** 이 App 클래스 내부에서만 사용되는 private field, private method라는 의미
 *! 밑줄로 시작하는 field 또는 method를 호출해서는 안됨
 */
class App {
    constructor() {
        const divContainer = document.querySelector('#webgl-container');
        this._divContainer = divContainer;  // field로  정의한 이유 divContainer를 this._divContainer로 다른 methode에서 참조할 수 있기위함

        // Render객체 생성, renderer객체 antialias를 활성화 시켜주면 3차원 장면이 렌더링될 때 오브젝트 경계선의 계단 현상이 부드럽게 표현
        const renderer = new THREE.WebGLREnderer({ antialias: true }); 

        // 픽셀의 ratio값을 정의하고 설정함
        // 픽셀 ratio값은 window의 devicePixelRatio속성으로 쉽게 얻을 수 있음
        renderer.setPixelRatio(window.devicePixelRatio);
        // renderer의 domElement를 id가 webgl-container인 idvContainer의 자식으로 추가
        // domElement는 Canvers 타입의 DOM Object임
        divContainer.appendChild(renderer.domElement);
        this._renderer = renderer;  

        const scene = new THREE.Scene();
        this._scene = scene; // field화 시켜서 app클래스의 다른 method에서도 참조할 수 있도록 함

        this._setupCamera(); // 카메라 셋팅 method 호출
        this._setupLight(); // 라이트 셋팅 method 호출
        this._setupModel(); // 모델 셋팅 method 호출

        // 창 크기가 변경되면 발생하는 onresize이벤트

        // resize 이벤트가 필요한 이유는
        // renderer난 camera는 창 크기가 변경될 때 마다 그 크기에 맞게 속성 값을 재설정해줘야함
        window.onresize = this.resize.bind(this);
        this.reszie();

        requestAnimationFrame(this.render.bind(this));
    }
}

window.onload = function() {
    new App();
}