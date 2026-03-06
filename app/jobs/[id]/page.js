'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function JobDetailPage({ params }) {
  const [job, setJob] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', resume: '', coverNote: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${params.id}`)
      .then(res => setJob(res.data));
  }, [params.id]);

  const handleApply = async (e) => {
    e.preventDefault();
    alert(`Application submitted for ${job.title}!`);
    // In a real app, you would POST this to an /api/applications endpoint
  };

  if (!job) return <div className="p-20 text-center">Loading Job Details...</div>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <div className="border-b pb-8 mb-10">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">{job.title}</h1>
        <p className="text-xl text-gray-500">{job.company} • {job.location} • {job.category}</p>
      </div>

      <div className="prose lg:prose-xl mb-20 text-gray-700">
        <h3 className="text-2xl font-bold mb-4">Description</h3>
        <p>{job.description || "No description provided for this position."}</p>
      </div>

      {/* Application Form */}
      <section className="bg-[#F8F8FD] p-10 rounded-2xl border border-blue-100">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Apply Now</h2>
        <form onSubmit={handleApply} className="grid grid-cols-1 gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" required className="p-4 border rounded-lg"
              onChange={(e) => setForm({...form, name: e.target.value})} />
            <input type="email" placeholder="Email Address" required className="p-4 border rounded-lg"
              onChange={(e) => setForm({...form, email: e.target.value})} />
          </div>
          <input type="url" placeholder="Resume Link (URL)" required className="p-4 border rounded-lg"
            onChange={(e) => setForm({...form, resume: e.target.value})} />
          <textarea placeholder="Cover Note" className="p-4 border rounded-lg h-40"
            onChange={(e) => setForm({...form, coverNote: e.target.value})} />
          <button type="submit" className="bg-primary text-white py-4 font-bold rounded-lg text-lg">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}