'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
    const [jobs, setJobs] = useState([]);
    const [deletingId, setDeletingId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        category: 'Design',
        description: ''
    });
    const fetchJobs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/jobs');
            setJobs(res.data);
        } catch (err) {
            toast.error("Failed to load jobs");
        }
    };

    useEffect(() => { fetchJobs(); }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/jobs', formData);
            toast.success("Job posted successfully!");
            setFormData({ title: '', company: '', location: '', category: 'Design', description: '' });
            fetchJobs();
        } catch (err) {
            toast.error("Error posting job");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
        if (!confirmDelete) return;

        setDeletingId(id);
        try {
            await axios.delete(`http://localhost:5000/api/jobs/${id}`);
            toast.success("Job deleted successfully");
            fetchJobs();
        } catch (err) {
            toast.error("Could not delete job");
            console.error(err);
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-10 min-h-screen bg-white">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-slate-900">Admin <span className="text-[#4640DE]">Dashboard</span></h1>
                <div className="text-sm text-gray-500 font-medium">Total Listings: {jobs.length}</div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Form Column */}
                <div className="lg:col-span-1">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text" placeholder="Job Title" required
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full p-3 border rounded-lg"
                        />
                        <input
                            type="text" placeholder="Company Name" required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full p-3 border rounded-lg"
                        />
                        {/* IMPORTANT: Ensure Location Input exists */}
                        <input
                            type="text" placeholder="Location (e.g. Remote)" required
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full p-3 border rounded-lg"
                        />
                        <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option>Design</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                        </select>
                        <textarea
                            placeholder="Description" required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full p-3 border rounded-lg h-32"
                        />
                        <button type="submit" className="w-full bg-[#4640DE] text-white py-3 rounded-lg font-bold">
                            Post Job
                        </button>
                    </form>
                </div>

                {/* List Column */}
                <div className="lg:col-span-2">
                    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-gray-50 p-4 border-b font-bold text-gray-600 grid grid-cols-3">
                            <span>Job Details</span>
                            <span>Category</span>
                            <span className="text-right">Actions</span>
                        </div>
                        {jobs.length === 0 ? (
                            <div className="p-10 text-center text-gray-400 italic">No jobs found. Start by adding one!</div>
                        ) : (
                            jobs.map(job => (
                                <div key={job._id} className="p-4 border-b last:border-0 grid grid-cols-3 items-center hover:bg-slate-50 transition">
                                    <div>
                                        <p className="font-bold text-slate-800">{job.title}</p>
                                        <p className="text-xs text-gray-500">{job.company}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-[#4640DE] rounded">
                                            {job.category}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            disabled={deletingId === job._id}
                                            className="text-red-500 text-sm font-bold hover:underline disabled:text-gray-400"
                                        >
                                            {deletingId === job._id ? "Deleting..." : "Delete"}
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}