const express = require('express');
const router = express.Router();
// IMPORTANT: The names inside { } must match the names after "exports." in controller
const { getJobs, createJob } = require('../controllers/jobController');

// Check: if getJobs is undefined, the server will crash here
router.get('/', getJobs); 
router.post('/', createJob);

module.exports = router;