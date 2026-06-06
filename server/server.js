require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

// Connect Database
connectDB();

// Middleware
const allowedOrigins = [
  /^http:\/\/localhost(:\d+)?$/
];
if (process.env.FRONTEND_URL) {
  if (process.env.FRONTEND_URL.includes(',')) {
    allowedOrigins.push(...process.env.FRONTEND_URL.split(',').map(url => url.trim()));
  } else {
    allowedOrigins.push(process.env.FRONTEND_URL.trim());
  }
}
app.use(cors({
  origin: true,
  credentials: true
}));

app.options("*", cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'Portfolio API running' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
