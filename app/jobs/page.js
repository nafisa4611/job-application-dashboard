'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LatestJobCard from '@/components/LatestJobCard';

export default function JobListingPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState({ title: '', location: '', category: '' });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/jobs');
        setJobs(res.data);
        setFilteredJobs(res.data);
      } catch (err) { console.error("Error fetching jobs"); }
    };
    fetchJobs();
  }, []);

  const handleFilter = () => {
    const filtered = jobs.filter(job => 
      job.title.toLowerCase().includes(search.title.toLowerCase()) &&
      job.location.toLowerCase().includes(search.location.toLowerCase()) &&
      (search.category === '' || job.category === search.category)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Find your <span className="text-accent">dream job</span></h1>
        
        {/* Search Bar */}
        <div className="bg-white p-6 shadow-sm flex flex-col md:flex-row gap-4 mb-10 border border-gray-100">
          <input 
            type="text" placeholder="Job title or keyword" 
            className="flex-1 p-3 border-b md:border-b-0 md:border-r outline-none"
            onChange={(e) => setSearch({...search, title: e.target.value})}
          />
          <input 
            type="text" placeholder="Florence, Italy" 
            className="flex-1 p-3 outline-none"
            onChange={(e) => setSearch({...search, location: e.target.value})}
          />
          <button onClick={handleFilter} className="bg-primary text-white px-10 py-3 font-bold">Search</button>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => <LatestJobCard key={job._id} job={job} />)
          ) : (
            <p className="text-gray-500">No jobs found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}