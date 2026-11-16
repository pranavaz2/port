export const profile = {
  name: 'Pranav',
  fullName: 'Pranav A',
  role: 'Software Developer',
  location: 'Kerala, India',
  github: 'https://github.com/pranavaz2',
  linkedin: '', // Add your public LinkedIn profile URL here.
  email: '', // Add your professional email address here.
  resumePath: '/resume.pdf',
};

export const skillGroups = [
  {
    eyebrow: '01 / INTERFACE',
    title: 'Frontend development',
    description: 'Building clear, responsive interfaces and practical user experiences.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
  },
  {
    eyebrow: '02 / SYSTEMS',
    title: 'Backend & data',
    description: 'Connecting application logic, APIs, and data storage.',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    eyebrow: '03 / INTELLIGENCE',
    title: 'Python & AI/ML',
    description: 'Exploring applied machine learning and model integration.',
    skills: ['Python', 'TensorFlow', 'Keras', 'Machine Learning'],
  },
  {
    eyebrow: '04 / EVERYWHERE',
    title: 'Mobile & workflow',
    description: 'Developing across mobile platforms and modern tooling.',
    skills: ['Flutter', 'React Native', 'Expo', 'Git', 'GitHub', 'REST APIs', 'Vite'],
  },
];

export const projects = [
  {
    id: 'agromind',
    links: { github: '', demo: '' }, // Populate only with real, public URLs.
    number: '01',
    name: 'AgroMind AI',
    category: 'AI / AGRICULTURE',
    tagline: 'A smarter way to understand crop health.',
    summary: 'An AI-powered farming platform that brings plant disease classification, weather intelligence, and farm tools into a mobile experience.',
    stack: ['React Native', 'Expo', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    visual: 'agro',
    featured: true,
    objective: 'Make AI-assisted crop-health support and useful farm information accessible through one mobile workflow.',
    problem: 'Plant-health decisions involve identifying symptoms and bringing together practical farm information. The project explores how machine learning and mobile software can make that workflow more accessible.',
    solution: 'Developed a crop disease classification pipeline covering 47 classes across 15 crop species, with model inference exposed through a FastAPI service and connected to a React Native application.',
    features: ['Plant disease classification across 47 classes and 15 crop species', 'Weather intelligence for farm context', 'Farm management features', 'Multilingual voice assistance'],
    contribution: 'Worked across the classification pipeline and full-stack integration, connecting TensorFlow/Keras inference, the FastAPI backend, PostgreSQL data, and the Expo mobile experience.',
    technologies: ['React Native', 'Expo', 'Python', 'TensorFlow', 'Keras', 'FastAPI', 'PostgreSQL'],
    note: 'Previously discussed training-image and validation metrics are intentionally omitted until they can be re-verified for a public portfolio.',
  },
  {
    id: 'travix',
    links: { github: '', demo: '' }, // Populate only with real, public URLs.
    number: '02',
    name: 'Travix AI',
    category: 'MOBILE / TRAVEL TECH',
    tagline: 'Travel planning with location at its core.',
    summary: 'An intelligent travel planner designed around a Flutter mobile experience and a geospatial backend.',
    stack: ['Flutter', 'Riverpod', 'FastAPI', 'PostgreSQL', 'PostGIS'],
    visual: 'travix',
    featured: true,
    objective: 'Create a mobile-first travel planning experience supported by structured, location-aware data.',
    problem: 'Travel planning can involve scattered place information and multiple planning steps. Travix is designed to bring those workflows into one location-aware application.',
    solution: 'Designed a Flutter application architecture with Riverpod state management and a FastAPI backend using PostgreSQL and PostGIS for geospatial data.',
    features: ['Flutter mobile application structure', 'Location-aware data foundation using PostGIS', 'API-driven communication between app and backend', 'Database migrations managed with Alembic'],
    contribution: 'Worked on the application architecture and backend foundation, including Riverpod, GoRouter, Dio, Drift, SQLAlchemy Async, PostgreSQL, PostGIS, and Alembic.',
    technologies: ['Flutter', 'Riverpod', 'GoRouter', 'Dio', 'Drift', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'PostGIS', 'Alembic'],
  },
  {
    id: 'anshu',
    links: { github: '', demo: '' }, // Populate only with real, public URLs.
    number: '03',
    name: 'ANSHU',
    category: 'LOCAL AI / DESKTOP AUTOMATION',
    tagline: 'A personal assistant built around local control.',
    summary: 'A local-first desktop assistant combining voice interaction, file discovery, approved computer actions, and a robotics lab simulation.',
    stack: ['Python', 'Local AI', 'Voice UI', 'Automation'],
    visual: 'anshu',
    featured: true,
    objective: 'Build a personal desktop assistant that can support useful workflows while keeping control and data local wherever possible.',
    problem: 'A desktop assistant needs to connect several capabilities—voice input, information retrieval, and computer actions—without making those actions unpredictable.',
    solution: 'Built an assistant experience around local-first components, explicit action boundaries, voice routing, file search, and a separate robotics simulation environment.',
    features: ['Voice interaction with wake-word and push-to-talk workflows', 'File search across approved locations', 'Computer-control agent for predefined and approved actions', 'Robotics lab simulation with safety-oriented controls'],
    contribution: 'Integrated the assistant interface and supporting workflows across voice routing, file search, desktop control, and robotics simulation. Iterated through tested development checkpoints and preserved known-good versions.',
    technologies: ['Python', 'Local-first architecture', 'Speech processing', 'Desktop automation', 'Computer vision'],
  },
  {
    id: 'nutrimind',
    links: { github: '', demo: '' }, // Populate only with real, public URLs.
    number: '04',
    name: 'NutriMind AI',
    category: 'WEB / NUTRITION',
    tagline: 'Making food information easier to understand.',
    summary: 'A food and nutrition analyzer that uses a nutrition API to help users explore the nutritional information of food.',
    stack: ['React', 'Firebase', 'Nutrition API'],
    visual: 'nutrition',
    featured: false,
    objective: 'Give users a straightforward way to look up food and understand its nutritional information.',
    problem: 'Nutrition details can be difficult to find and compare when they are spread across different sources.',
    solution: 'Built a React application connected to Firebase and a nutrition data API to support food lookup and nutrition analysis.',
    features: ['Food information lookup', 'Nutrition data presented in a readable interface', 'Firebase-backed application integration'],
    contribution: 'Worked on the React interface and the integration between Firebase and the nutrition API.',
    technologies: ['React', 'Firebase', 'Nutrition API'],
  },
  {
    id: 'mood',
    links: { github: '', demo: '' }, // Populate only with real, public URLs.
    number: '05',
    name: 'Mood Classification System',
    category: 'AI / MULTIMODAL',
    tagline: 'Exploring emotion signals across face and text.',
    summary: 'A multimodal AI project combining CNN-based facial emotion recognition with NLP-based text sentiment analysis.',
    stack: ['Python', 'CNN', 'NLP', 'Deep Learning'],
    visual: 'mood',
    featured: false,
    objective: 'Explore how visual and textual signals can be combined to classify emotional expression.',
    problem: 'A single input type provides only one view of an emotional signal. This project explores a multimodal approach using both facial expressions and text.',
    solution: 'Combined a CNN-based facial emotion recognition component with an NLP sentiment-analysis component as a multimodal mood classification system.',
    features: ['Facial emotion recognition using a CNN-based approach', 'Text sentiment analysis', 'Combined visual and language signals'],
    contribution: 'Worked on the multimodal project concept and integration of the computer-vision and NLP components.',
    technologies: ['Python', 'CNN', 'NLP', 'Deep Learning', 'FER2013', 'GoEmotionsUK'],
  },
];

export const experience = [
  {
    company: 'Astro-Vision Futuretech Pvt. Ltd.',
    role: 'Software Development Intern',
    date: 'June 2026 · 1 month',
    description: 'Worked on integrating TensorFlow-based AI/ML models with Python and FastAPI.',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
  },
];
