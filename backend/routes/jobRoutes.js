const express = require('express');
const router = express.Router();
const Job = require('../models/Job'); // Ensure this path correctly points to your Job model

// @route   GET /api/jobs
// @desc    Get all jobs (For Home Page and Admin List)
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server Error: ' + err.message });
  }
});

// @route   GET /api/jobs/:id
// @desc    Get a single job by ID (For Job Details Page)
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route   POST /api/jobs
// @desc    Create a new job (For Admin Dashboard)
router.post('/', async (req, res) => {
  const { title, company, location, category, description } = req.body;

  try {
    const newJob = new Job({
      title,
      company,
      location,
      category,
      description
    });

    const job = await newJob.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: 'Error creating job: ' + err.message });
  }
});

// @route   DELETE /api/jobs/:id
// @desc    Delete a job by ID (For Admin Dashboard)
router.delete('/:id', async (req, res) => {
  try {
    const jobId = req.params.id;
    
    // Attempt to find and delete in one go
    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found in database' });
    }

    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error("Delete Error:", err.message);
    res.status(500).json({ message: 'Server Error: ' + err.message });
  }
});

module.exports = router;