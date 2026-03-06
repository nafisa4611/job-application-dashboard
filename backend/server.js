const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Load Environment Variables
dotenv.config();

// 2. Connect to MongoDB Atlas
connectDB();

const app = express();

// 3. Middleware
app.use(cors()); // Crucial: Allows your Next.js app to access the API
app.use(express.json()); // Allows the server to read JSON data sent from the frontend

// 4. Routes
app.use('/api/jobs', require('./routes/jobRoutes'));
// Once you create applicationRoutes.js, uncomment the line below:
// app.use('/api/applications', require('./routes/applicationRoutes'));

// 5. Basic Health Check
app.get('/', (req, res) => {
  res.send('QuickHire API is running...');
});

// 6. Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});