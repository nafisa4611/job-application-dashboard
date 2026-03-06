import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend URL
});

export const fetchJobs = (params) => API.get('/jobs', { params });
export const postJob = (jobData) => API.post('/jobs', jobData);
export const submitApplication = (appData) => API.post('/applications', appData);