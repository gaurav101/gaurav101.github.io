const monitorScreenWidth = 6.2;  // Monitor screen width in inches
const monitorScreenHeight = 3;  // Monitor screen height in inches

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 2, 8);

// Animation-specific code here

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00f0ff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

function updateAnimation() {
    // Animation update logic here
}

    // Create Computer Monitor Group
    const computerGroup = new THREE.Group();
    computerGroup.position.x = 1.8; // Adjusted further right to balance width

    // Monitor Base
    const baseGeo = new THREE.CylinderGeometry(0.8, 1, 0.1, 32);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8, metalness: 0.2 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = -2;
    computerGroup.add(base);

    // Monitor Stand
    const standGeo = new THREE.BoxGeometry(0.4, 1.5, 0.2);
    const stand = new THREE.Mesh(standGeo, baseMat);
    stand.position.y = -1.2;
    stand.position.z = -0.5;
    stand.rotation.x = 0.1;
    computerGroup.add(stand);

    // Monitor Casing (Back)
    const casingGeo = new THREE.BoxGeometry(7.5, 3.5, 0.4); // Ultra-wide width
    const casing = new THREE.Mesh(casingGeo, baseMat);
    casing.position.y = 0.5;
    casing.position.z = -0.2;
    computerGroup.add(casing);

    // Monitor Screen
    const screenGeo = new THREE.BoxGeometry(7.2, 3.2, 0.1);
    const screenMat = new THREE.MeshStandardMaterial({
        color: 0x0a0a0f,
        roughness: 0.2,
        metalness: 0.8,
        emissive: 0x050510,
        emissiveIntensity: 0.5
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.y = 0.5;
    screen.position.z = 0.05;
    computerGroup.add(screen);

    // Glowing screen border
    const borderGeo = new THREE.EdgesGeometry(screenGeo);
    const borderMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.3 });
    const border = new THREE.LineSegments(borderGeo, borderMat);
    border.position.y = 0.5;
    border.position.z = 0.06;
    computerGroup.add(border);

    scene.add(computerGroup);

    // Floating Skill Logos Group
    const skillsGroup = new THREE.Group();
    skillsGroup.position.set(1.8, 0.5, 0.5); // Matched right shift

    // Orbiting particles background
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 100;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
        const radius = 1.2 + Math.random() * 0.3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
        posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        posArray[i + 2] = radius * Math.cos(phi);
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.04,
        color: 0x7000ff,
        transparent: true,
        opacity: 0.5
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    skillsGroup.add(particlesMesh);

    // Skill SVG Logos
    const iconUrls = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
    ];

    const textureLoader = new THREE.TextureLoader();
    const skillSprites = [];

    // Adding glowing central core point
    const coreGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.1 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    skillsGroup.add(core);

    iconUrls.forEach((url, index) => {
        textureLoader.load(url, (texture) => {
            const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
            const sprite = new THREE.Sprite(material);

            // Randomly initialize orbit stats
            const radius = 0.8 + Math.random() * 0.6;
            const yOffset = (Math.random() - 0.5) * 1.5;
            const speed = 0.01 + Math.random() * 0.01;
            const angle = Math.random() * Math.PI * 2;

            sprite.position.x = Math.cos(angle) * radius;
            sprite.position.y = yOffset;
            sprite.position.z = Math.sin(angle) * radius;

            // Default scale
            sprite.scale.set(0.3, 0.3, 0.3);

            skillSprites.push({
                sprite: sprite,
                radius: radius,
                yOffset: yOffset,
                angle: angle,
                speed: speed,
                timeOffset: Math.random() * 10
            });

            skillsGroup.add(sprite);
        });
    });

    scene.add(skillsGroup);

    // Floating animation variables
    let time = 0;

    // Handle Window Resize
    window.addEventListener('resize', () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Handle Mouse movement for subtle tilt/parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const halfX = window.innerWidth / 2;
    const halfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - halfX);
        mouseY = (e.clientY - halfY);
    });

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        time += 0.01;

        // Rotate particles background
        particlesMesh.rotation.y += 0.002;
        particlesMesh.rotation.x += 0.001;

        // Animate each active skill sprite
        skillSprites.forEach(obj => {
            obj.angle += obj.speed;
            // Orbiting movement
            obj.sprite.position.x = Math.cos(obj.angle) * obj.radius;
            obj.sprite.position.z = Math.sin(obj.angle) * obj.radius;
            // Gentle hovering up and down
            obj.sprite.position.y = obj.yOffset + Math.sin(time * 2 + obj.timeOffset) * 0.2;
        });

        // Floating effect for the entire skills group
        skillsGroup.position.y = 0.5 + Math.sin(time) * 0.05;

        // Smooth parallax for the entire computer group
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;
        computerGroup.rotation.y += 0.05 * (targetX - computerGroup.rotation.y);
        computerGroup.rotation.x += 0.05 * (targetY - computerGroup.rotation.x);

        // Tilt the skills group slightly too for depth
        skillsGroup.rotation.y += 0.05 * (targetX * 1.5 - skillsGroup.rotation.y);

        renderer.render(scene, camera);
    }

    animate();
});