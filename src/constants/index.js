export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Game Tester 01',
    position: 'Alpha Tester @ TenGen Parkour',
    img: '/CJ.png',
    review:
      'The movement mechanics in TenGen Parkour are insanely fluid. The way CJ optimized the level design and player controller in Unity shows a deep understanding of gameplay loops.',
  },
  {
    id: 2,
    name: '3D Art Community',
    position: 'Peer Feedback',
    img: '/CJ.png',
    review:
      'That Q-Ship model is a masterpiece. The attention to detail on the wireframe topology, technical shader node graphs, and texture painting in Blender is top-tier industry standard work.',
  },
  {
    id: 3,
    name: 'System Logs',
    position: 'Arch Linux / Nobara User',
    img: '/CJ.png',
    review:
      'Compiling shaders and rendering high-fidelity lighting studies on an RTX 2050 like a breeze. The workflow optimization from 3D modeling to game engine integration is solid.',
  },
  {
    id: 4,
    name: 'Dev Team',
    position: 'ThroneLeaf Games',
    img: '/CJ.png',
    review:
      'As a founder and lead developer, CJ brings an incredible vision. Handling everything from 3D environment architecture to 2D logic scripting in Run & Fight requires serious dedication.',
  },
];

export const myProjects = [
  {
    title: 'TenGen Parkour - 3D Action Game',
    desc: 'TenGen Parkour is a fast-paced action game focusing on fluid movement, dynamic level design, and precise character mechanics.',
    subdesc:
      'Built entirely in Unity, this project showcases advanced C# scripting, environment detailing, and custom physics interactions to deliver an adrenaline-pumping experience.',
    href: '#',
    texture: '/15.mp4', // Tera gameplay reel
    logo: '/CJ.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Unity', path: '/assets/react.svg' }, // We'll swap these icons later
      { id: 2, name: 'C#', path: '/assets/typescript.png' },
    ],
  },
  {
    title: 'Q-Ship - Sci-Fi Concept',
    desc: 'A high-fidelity 3D spacecraft model demonstrating advanced hard-surface modeling, complex node-based shaders, and precise UV layouts.',
    subdesc:
      '100% modeled, UV unwrapped, and texture-painted in Blender. Rendered with cinematic lighting techniques to achieve a photorealistic beauty shot.',
    href: '#',
    texture: '/5.jpg', // Q-ship beauty render
    logo: '/CJ.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Blender', path: '/assets/react.svg' },
      { id: 2, name: 'Texturing', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Robotic Mechanics - Bipedal Design',
    desc: 'A detailed study of hard-surface robotics, focusing on mechanical joints, hydraulic systems, and piston movement for game-ready assets.',
    subdesc:
      'Optimized for game engines, featuring quad-view technical sheets and intricate structural detailing for realistic mechanical animation.',
    href: '#',
    texture: '/69.png', // Ortho view
    logo: '/CJ.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Blender', path: '/assets/react.svg' },
    ],
  },
  {
    title: 'Run & Fight - 2D Logic System',
    desc: 'A comprehensive 2D game environment showcasing custom UI settings, sprite animations, and robust logic blocks for gameplay.',
    subdesc:
      'Features a complete level design layout and functional scripting blocks, demonstrating versatility across both 3D and 2D game development pipelines.',
    href: '#',
    texture: '/43.png', // Gameplay scene
    logo: '/CJ.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Unity 2D', path: '/assets/react.svg' },
    ],
  },
  {
    title: 'Sci-Fi Tower - Environment Art',
    desc: 'An atmospheric lighting study and environment design piece featuring a massive sci-fi tower with a cinematic earth view.',
    subdesc:
      'Showcases the ability to create massive scales and moody lighting setups, perfect for establishing the visual tone of a game level.',
    href: '#',
    texture: '/9.png', // Sci-Fi Tower render
    logo: '/CJ.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'Environment', path: '/assets/react.svg' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'ThroneLeaf Games',
    pos: 'Founder & Lead Developer',
    duration: 'Present',
    title: "Leading the development of TenGen Parkour. Overseeing the complete project vision, from 3D asset creation and level design to complex C# game mechanics.",
    icon: '/CJ.png', // Placeholder for your company logo
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Blender',
    pos: '3D Artist',
    duration: 'Ongoing',
    title: "Creating optimized, game-ready models. Expertise in high-poly to low-poly baking, advanced UV unwrapping, node-based shaders, and stylized texture painting.",
    icon: '/assets/figma.svg', // Will swap to blender icon later
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Unity',
    pos: 'Game Developer',
    duration: 'Ongoing',
    title: "Implementing engaging gameplay loops, UI/UX systems, and complex character controllers. Bridging the gap between 3D art and interactive experiences.",
    icon: '/assets/notion.svg', // Will swap to unity icon later
    animation: 'salute',
  },
];
