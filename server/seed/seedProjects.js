require('dotenv').config();
const mongoose = require('mongoose');
const Project  = require('../models/Project');

const projects = [
  {
    title: 'InternGuide',
    description:
      'A MERN-stack internship and placement platform connecting students, mentors, and administrators. Features JWT-based role access (RBAC), real-time communication via Socket.io, a TF-IDF mentor recommendation engine, and an analytics dashboard for administrators.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'React'],
    githubUrl: 'https://github.com/Glanisha/InternGuide',
    liveUrl: '',
    image: '',
    featured: true,
    order: 1,
    tags: ['REST API', 'Authentication', 'Real-Time', 'Recommendation System'],
  },
  {
    title: 'FitPulse',
    description:
      'A health and nutrition platform for diabetes and PCOS/PCOD management. Includes personalized meal planning, nutrition tracking, medication reminders, food image analysis, and AI-powered diet recommendations powered by the Gemini API.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'React'],
    githubUrl: 'https://github.com/vishxcodes/fitPulse',
    liveUrl: '',
    image: '',
    featured: true,
    order: 2,
    tags: ['AI Integration', 'Health Tech', 'REST API', 'MongoDB'],
  },
  {
    title: 'THE DEEP',
    description:
      'A machine learning project focused on predicting Biochemical Oxygen Demand (BOD) levels in water bodies. Covers data cleaning, feature engineering, regression model training, hyperparameter tuning, and comprehensive data visualization.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    githubUrl: 'https://github.com/vishxcodes',
    liveUrl: '',
    image: '',
    featured: false,
    order: 3,
    tags: ['Machine Learning', 'Regression', 'Data Science', 'Visualization'],
  },
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log('✅ Projects seeded successfully!');
  process.exit(0);
};

seedDB().catch((err) => {
  console.error(err);
  process.exit(1);
});
