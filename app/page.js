'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Hero from './components/Hero';
import CompanyBanner from './components/CompanyBanner';
import CategorySection from './components/CategorySection';
import PostJobBanner from './components/PostJobBanner';
import FeaturedJobCard from './components/FeaturedJobCard';
import Footer from './components/Footer';
import LatestJobs from './components/LatestJobs';

export default function Home() {
  const [backendJobs, setBackendJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Screenshot Data (Placeholders)
  const defaultJobs = [
    { _id: 's1', title: 'Email Marketing', company: 'Revolut', location: 'Madrid, Spain', description: 'Revolut is looking for Email Marketing to help team ma...', category: 'Marketing', logo: 'R' },
    { _id: 's2', title: 'Brand Designer', company: 'Dropbox', location: 'San Fransisco, US', description: 'Dropbox is looking for Brand Designer to help the team t...', category: 'Design', logo: 'D' },
    { _id: 's3', title: 'Email Marketing', company: 'Pitch', location: 'Berlin, Germany', description: 'Pitch is looking for Customer Manager to join marketing t...', category: 'Marketing', logo: 'P' },
    { _id: 's4', title: 'Visual Designer', company: 'Blinklist', location: 'Granada, Spain', description: 'Blinklist is looking for Visual Designer to help team desi...', category: 'Design', logo: 'B' },
    { _id: 's5', title: 'Product Designer', company: 'ClassPass', location: 'Manchester, UK', description: 'ClassPass is looking for Product Designer to help us...', category: 'Marketing', logo: 'CP' },
    { _id: 's6', title: 'Lead Designer', company: 'Canva', location: 'Ontario, Canada', description: 'Canva is looking for Lead Engineer to help develop n...', category: 'Design', logo: 'C' },
    { _id: 's7', title: 'Brand Strategist', company: 'GoDaddy', location: 'Marseille, France', description: 'GoDaddy is looking for Brand Strategist to join the team...', category: 'Marketing', logo: 'G' },
    { _id: 's8', title: 'Data Analyst', company: 'Twitter', location: 'San Diego, US', description: 'Twitter is looking for Data Analyst to help team desi...', category: 'Technology', logo: 'T' },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/jobs');
        setBackendJobs(res.data);
      } catch (err) {
        console.error("Backend fetch failed, using screenshot data only.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Merge logic: Real jobs first, then placeholders to fill the 8-slot grid
  const displayJobs = [...backendJobs, ...defaultJobs].slice(0, 8);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero & Brands */}
      <Hero />
      <CompanyBanner />

      {/* 2. Categories */}
      <CategorySection />

      {/* 3. Call to Action Banner */}
      <PostJobBanner />

      {/* 4. Featured Jobs Section (Square Cards) */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Featured <span className="text-[#26a4ff]">Jobs</span>
          </h1>
          <span className="text-[#26a4ff] font-bold cursor-pointer hover:underline">
            Show all jobs →
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayJobs.map((job) => (
            <FeaturedJobCard key={job._id} job={job} />
          ))}
        </div>
      </section>

      {/* 5. Latest Jobs Section (Horizontal Cards) */}
      <LatestJobs jobs={backendJobs} />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}