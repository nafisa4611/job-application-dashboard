'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        // Using your .env variable or direct link
        const res = await axios.get('http://localhost:5000/api/jobs');
        setJobs(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Current Job Openings</h1>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job._id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}