import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import styles from './StarrySky.module.css';

const StarrySky = () => {
	const mountRef = useRef(null);

	useEffect(() => {
		const currentMountRef = mountRef.current;

		// Create a scene
		const scene = new THREE.Scene();

		// Create a camera
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 5;

		// Create a renderer
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		currentMountRef.appendChild(renderer.domElement);

		// Create star geometry
		const starCount = 1000;
		const geometry = new THREE.BufferGeometry();
		const positions = new Float32Array(starCount * 3);

		for (let i = 0; i < starCount * 3; i += 3) {
			positions[i] = (Math.random() - 0.5) * 1000;
			positions[i + 1] = (Math.random() - 0.5) * 1000;
			positions[i + 2] = (Math.random() - 0.5) * 1000;
		}

		geometry.setAttribute(
			'position',
			new THREE.BufferAttribute(positions, 3)
		);

		// Create star material
		const material = new THREE.PointsMaterial({
			color: 0xffffff,
			size: 0.1,
		});

		// Create star points
		const stars = new THREE.Points(geometry, material);
		scene.add(stars);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);
			stars.rotation.x += 0.001;
			stars.rotation.y += 0.001;
			renderer.render(scene, camera);
		};

		animate();

		// Handle window resize
		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
			if (currentMountRef) {
				currentMountRef.removeChild(renderer.domElement);
			}
		};
	}, []);

	const rootStarrySky = document.getElementById('starry-sky');

	return ReactDOM.createPortal(
		<div className={styles.starrySky} ref={mountRef} />,
		rootStarrySky // Or specify a different element if needed
	);
};

export default StarrySky;
