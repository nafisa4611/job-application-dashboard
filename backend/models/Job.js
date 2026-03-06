const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String }, // Added for Detail Page
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);