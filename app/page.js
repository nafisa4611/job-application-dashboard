'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Hero from './components/Hero';

import Footer from './components/Footer';
import JobCard from './components/JobCard';
import FeaturedJobCard from './components/FeaturedJobCard';
import CompanyBanner from './components/CompanyBanner';
import CategorySection from './components/CategorySection';
import PostJobBanner from './components/PostJobBanner';

export default function Home() {
  const [backendJobs, setBackendJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Hardcoded data from your screenshots to ensure the UI looks full
  const screenshotJobs = [
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

  // Merge: Backend jobs come first, followed by screenshot jobs to fill the grid (Max 8)
  const displayFeatured = [...backendJobs, ...screenshotJobs].slice(0, 8);

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <CompanyBanner />
      {/* Social Proof Section */}
      <div className="py-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-40 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Vodafone_Logo.svg" alt="Vodafone" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Intel_logo_%282020%29.svg" alt="Intel" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/AMD_Logo.svg" alt="AMD" className="h-6" />
        </div>
      </div>

      <CategorySection />
      <PostJobBanner />

      {/* Featured Jobs Section - Matches Screenshot 225929.png */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Featured <span className="text-blue-500">jobs</span>
          </h1>
          <span className="text-blue-600 font-bold cursor-pointer hover:underline">Show all jobs →</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayFeatured.map((job) => (
            <FeaturedJobCard key={job._id} job={job} />
          ))}
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900">
              Latest <span className="text-blue-500">jobs open</span>
            </h2>
            <span className="text-blue-600 font-bold cursor-pointer hover:underline">
              Show all jobs →
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[...backendJobs, ...screenshotJobs]
              .slice(0, 8)
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}