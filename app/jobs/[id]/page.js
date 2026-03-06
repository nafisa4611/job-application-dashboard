'use client';
import { useState, useEffect, use } from 'react';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function JobDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const [job, setJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(true);


  const defaultJobs = [
    { _id: "d1", title: "Social Media Assistant", company: "Nomad", location: "Paris, France", category: "Marketing", description: "Nomad is looking for a Social Media Assistant to help manage our global presence. You will be responsible for creating engaging content across platforms like Instagram, Twitter, and LinkedIn." },
    { _id: "d2", title: "Brand Designer", company: "Dropbox", location: "San Francisco, USA", category: "Design", description: "Dropbox is seeking a creative Brand Designer to evolve our visual identity. You will work closely with the marketing team to produce high-quality assets for digital and print campaigns." },
    { _id: "d3", title: "Interactive Developer", company: "Terraform", location: "Hamburg, Germany", category: "Engineering", description: "Join Terraform as an Interactive Developer building high-performance web tools. We need someone with a deep understanding of React, Three.js, and modern web animations." },
    { _id: "d4", title: "Email Marketing", company: "Revolut", location: "Madrid, Spain", category: "Marketing", description: "Help Revolut scale our email automation and customer engagement strategies. You will design, test, and optimize email flows for millions of global users." },
    { _id: "d5", title: "Product Designer", company: "Canva", location: "London, UK", category: "Design", description: "Design the future of visual communication at Canva. You will be part of the core product team, focusing on user experience and interface consistency across the platform." },
    { _id: "d6", title: "Frontend Developer", company: "Shopify", location: "Toronto, Canada", category: "Engineering", description: "Build the world's best commerce platform at Shopify. We are looking for experts in React, GraphQL, and performance optimization to help merchants succeed." },
    { _id: "d7", title: "UX Researcher", company: "Google", location: "Remote", category: "Design", description: "Help Google understand user needs through deep research and testing. You will conduct interviews, usability tests, and synthesize data to influence product strategy." },
    { _id: "d8", title: "Growth Marketer", company: "Stripe", location: "Dublin, Ireland", category: "Marketing", description: "Drive Stripe's user acquisition across the EMEA region. You will experiment with different channels and data-driven strategies to fuel our rapid growth." },
  ];

  useEffect(() => {
    const fetchJobData = async () => {
     
      if (params.id.startsWith('d')) {
        const demoJob = defaultJobs.find(j => j._id === params.id);
        setJob(demoJob);
        setLoading(false);
        return;
      }


      try {
        const res = await axios.get(`http://localhost:5000/api/jobs/${params.id}`);
        setJob(res.data);
      } catch (err) {
        console.error("Error fetching job:", err);
        toast.error("Could not find this job listing.");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchJobData();
  }, [params.id]);

  const handleApply = (e) => {
    e.preventDefault();

    setApplied(true);
    toast.success("Application sent successfully!");
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4640DE]"></div>
    </div>
  );

  if (!job) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Job Listing Not Found</h2>
      <p className="text-slate-500 mb-6">The job you are looking for might have been removed or expired.</p>
      <Link href="/jobs" className="bg-[#4640DE] text-white px-6 py-2 rounded-lg font-bold">Return to Listings</Link>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 pt-10 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/jobs" className="text-sm font-bold text-[#4640DE] hover:underline mb-6 inline-block">
            ← Back to all jobs
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl font-bold text-[#4640DE] border border-slate-200">
                {job.company.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{job.title}</h1>
                <p className="text-lg text-slate-500 font-medium">{job.company} • {job.location}</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <span className="px-4 py-1.5 bg-blue-50 text-[#4640DE] rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                {job.category}
              </span>
              <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase tracking-wider border border-green-100">
                Full-Time
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 grid grid-cols-1 gap-10">
        {/* Description Section */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Job Description</h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
            {job.description}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply" className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Apply for this position</h2>
            <p className="text-slate-400">Join our team and help us build the future.</p>
          </div>

          <form onSubmit={handleApply} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe" 
                  className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 ring-[#4640DE] outline-none text-white transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="john@example.com" 
                  className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 ring-[#4640DE] outline-none text-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Resume Link (URL)</label>
              <input 
                type="url" 
                required 
                placeholder="https://my-resume.pdf" 
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 ring-[#4640DE] outline-none text-white transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Cover Note</label>
              <textarea 
                placeholder="Why should we hire you?" 
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl h-40 focus:ring-2 ring-[#4640DE] outline-none text-white transition-all resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={applied}
              className={`w-full py-5 rounded-2xl font-extrabold text-lg transition-all transform active:scale-[0.98] ${
                applied 
                ? 'bg-green-500 text-white cursor-default' 
                : 'bg-[#4640DE] text-white hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-900/40'
              }`}
            >
              {applied ? "✓ Application Submitted" : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}