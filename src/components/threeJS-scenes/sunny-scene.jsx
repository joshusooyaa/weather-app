import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SunnyScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2, window.innerWidth / 2,
      window.innerHeight / 2, window.innerHeight / -2,
      1, 1000
    );
    camera.position.set(0, 0, 1000);

    const geometry = new THREE.SphereGeometry(250, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xFFFC00 });
    const sun = new THREE.Mesh(geometry, material);
    scene.add(sun);

    sun.position.set(-window.innerWidth / 3, window.innerHeight / 4.5, 0);

    const renderer = new THREE.WebGLRenderer( { alpha: true }); // Set canvas to have transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current.appendChild(renderer.domElement);
    
    const mount = mountRef.current;
    mount.appendChild(renderer.domElement);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.01;

      const scale = Math.sin(time) * 0.02 + 1;
      sun.scale.set(scale, scale, 0); // z doesn't matter since OrthographicCamera
      renderer.render(scene, camera); 
    };
    animate();

    return () => {
      if (mount) mount.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="sunny-scene"/>;
};

export default SunnyScene;
