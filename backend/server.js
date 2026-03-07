const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000", 
    "https://job-application-dashboard-psi.vercel.app" 
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json()); 

app.use('/api/jobs', require('./routes/jobRoutes'));

app.get('/', (req, res) => {
  res.send('QuickHire API is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});