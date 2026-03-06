'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';

export default function JobListingPage() {
  const [allJobs, setAllJobs] = useState([]); 
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search States
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const isFiltered = query !== '' || location !== '' || category !== '';

  const defaultJobs = [
    { _id: "d1", title: "Social Media Assistant", company: "Nomad", location: "Paris, France", category: "Marketing" },
    { _id: "d2", title: "Brand Designer", company: "Dropbox", location: "San Francisco, USA", category: "Design" },
    { _id: "d3", title: "Interactive Developer", company: "Terraform", location: "Hamburg, Germany", category: "Engineering" },
    { _id: "d4", title: "Email Marketing", company: "Revolut", location: "Madrid, Spain", category: "Marketing" },
    { _id: "d5", title: "Product Designer", company: "Canva", location: "London, UK", category: "Design" },
    { _id: "d6", title: "Frontend Developer", company: "Shopify", location: "Toronto, Canada", category: "Engineering" },
    { _id: "d7", title: "UX Researcher", company: "Google", location: "Remote", category: "Design" },
    { _id: "d8", title: "Growth Marketer", company: "Stripe", location: "Dublin, Ireland", category: "Marketing" },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/jobs');
        const combined = [...res.data, ...defaultJobs];
        setAllJobs(combined);
        setFilteredJobs(combined);
      } catch (err) {
        setAllJobs(defaultJobs);
        setFilteredJobs(defaultJobs);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

 
  useEffect(() => {
    const filterData = () => {
      if (!isFiltered) {
        setFilteredJobs(allJobs);
        return;
      }

      const filtered = allJobs.filter((job) => {
        const matchesTitle = job.title.toLowerCase().includes(query.toLowerCase()) || 
                             job.company.toLowerCase().includes(query.toLowerCase());
        const matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());
        const matchesCategory = category === '' || job.category === category;

        return matchesTitle && matchesLocation && matchesCategory;
      });
      setFilteredJobs(filtered);
    };

    filterData();
  }, [query, location, category, allJobs, isFiltered]);


  const clearAll = () => {
    setQuery('');
    setLocation('');
    setCategory('');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
            <h1 className="text-4xl font-bold">Find your <span className="text-[#4640DE]">dream job</span></h1>
            <p className="text-gray-500 mt-2">Showing {filteredJobs.length} available positions</p>
        </div>
        
 
        {isFiltered && (
          <button 
            onClick={clearAll}
            className="text-[#4640DE] font-bold text-sm hover:underline flex items-center gap-1 transition-all animate-in fade-in slide-in-from-right-4"
          >
            <span>✕</span> Clear all filters
          </button>
        )}
      </div>

      {/* SEARCH BAR */}
      <div className="flex flex-col lg:flex-row gap-4 mb-12 p-4 bg-white shadow-lg rounded-2xl border items-center">
        <div className="flex-1 flex items-center gap-3 px-3 w-full">
          <span className="text-gray-400">🔍</span>
          <input 
            type="text" 
            placeholder="Job title or company" 
            className="w-full py-2 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

        <div className="flex-1 flex items-center gap-3 px-3 w-full">
          <span className="text-gray-400">📍</span>
          <input 
            type="text" 
            placeholder="Location" 
            className="w-full py-2 outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

        <select 
          className="flex-1 py-2 outline-none bg-transparent w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
        </select>

        <button className="w-full lg:w-auto bg-[#4640DE] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      <div className="grid gap-6">
        {loading ? (
          <div className="text-center py-20 text-[#4640DE] font-bold">Fetching listings...</div>
        ) : filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))
        ) : (
          <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <div className="text-4xl mb-4">🕵️‍♂️</div>
            <p className="text-gray-500 font-medium">We couldn't find any jobs matching those filters.</p>
            <button onClick={clearAll} className="mt-4 bg-white border px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-gray-50">
                Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}