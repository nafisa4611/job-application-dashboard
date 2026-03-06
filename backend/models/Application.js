const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  job_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  resume_link: { type: String, required: true },
  cover_note: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);