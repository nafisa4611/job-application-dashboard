'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
    const [jobs, setJobs] = useState([]);
    const [filteredDisplay, setFilteredDisplay] = useState([]);
    const [deletingId, setDeletingId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        category: 'Design',
        description: ''
    });

    // 1. 8 Default Demo Jobs
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

    const fetchJobs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/jobs');
            const allJobs = [...res.data, ...defaultJobs];
            setJobs(allJobs);
            setFilteredDisplay(allJobs);
        } catch (err) {
            console.error("Backend offline, showing defaults only.");
            setJobs(defaultJobs);
            setFilteredDisplay(defaultJobs);
        }
    };

    useEffect(() => { fetchJobs(); }, []);

    // Search Logic
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = jobs.filter(j => 
            j.title.toLowerCase().includes(term) || 
            j.company.toLowerCase().includes(term)
        );
        setFilteredDisplay(filtered);
    };

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
        // Logic for Demo Jobs
        if (id.toString().startsWith('d')) {
            const updated = jobs.filter(job => job._id !== id);
            setJobs(updated);
            setFilteredDisplay(updated);
            toast.success("Demo job removed");
            return;
        }

        // Logic for Database Jobs
        if (!window.confirm("Delete this real listing from database?")) return;
        setDeletingId(id);
        try {
            await axios.delete(`http://localhost:5000/api/jobs/${id}`);
            toast.success("Job deleted!");
            fetchJobs();
        } catch (err) {
            toast.error("Delete failed");
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 md:p-10 min-h-screen bg-white text-slate-900">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Admin <span className="text-[#4640DE]">Dashboard</span></h1>
                    <p className="text-gray-500 text-sm">Manage your job listings and demo data.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-slate-100 px-4 py-2 rounded-lg text-sm font-semibold">
                        Total: {jobs.length}
                    </div>
                    <button onClick={fetchJobs} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        🔄
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* LEFT: FORM COLUMN */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 sticky top-10 shadow-sm">
                        <h2 className="text-xl font-bold mb-6">Create Listing</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase">Job Title</label>
                                <input type="text" placeholder="e.g. Senior Designer" required value={formData.title} 
                                    className="w-full p-3 bg-slate-50 border-none rounded-xl mt-1 focus:ring-2 ring-[#4640DE] outline-none"
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase">Company</label>
                                <input type="text" placeholder="e.g. Google" required value={formData.company}
                                    className="w-full p-3 bg-slate-50 border-none rounded-xl mt-1 focus:ring-2 ring-[#4640DE] outline-none"
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase">Location</label>
                                <input type="text" placeholder="Remote / City" required value={formData.location}
                                    className="w-full p-3 bg-slate-50 border-none rounded-xl mt-1 focus:ring-2 ring-[#4640DE] outline-none"
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase">Category</label>
                                <select value={formData.category} className="w-full p-3 bg-slate-50 border-none rounded-xl mt-1 focus:ring-2 ring-[#4640DE] outline-none"
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                                    <option>Design</option>
                                    <option>Marketing</option>
                                    <option>Engineering</option>
                                </select>
                            </div>
                            <textarea placeholder="Job Description..." required value={formData.description} 
                                className="w-full p-3 bg-slate-50 border-none rounded-xl h-32 focus:ring-2 ring-[#4640DE] outline-none"
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                            
                            <button disabled={loading} className="w-full bg-[#4640DE] text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-200 transition-all disabled:opacity-50">
                                {loading ? "Processing..." : "Post Job Listing"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* RIGHT: LIST COLUMN */}
                <div className="lg:col-span-2">
                    <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden">
                        {/* Search Bar */}
                        <div className="p-4 border-b bg-slate-50/50">
                            <input 
                                type="text" 
                                placeholder="Search by title or company..." 
                                className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#4640DE]"
                                onChange={handleSearch}
                            />
                        </div>

                        {/* List */}
                        <div className="divide-y divide-slate-100">
                            {filteredDisplay.length > 0 ? (
                                filteredDisplay.map(job => (
                                    <div key={job._id} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-blue-100 text-[#4640DE] rounded-lg flex items-center justify-center font-bold">
                                                {job.company.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-800">{job.title}</h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-gray-500">{job.company} • {job.location}</span>
                                                    {job._id.toString().startsWith('d') && (
                                                        <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold uppercase">Demo</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <span className="hidden md:block text-[10px] font-bold px-2 py-1 bg-slate-100 rounded uppercase tracking-wider text-gray-600">
                                                {job.category}
                                            </span>
                                            <button
                                                onClick={() => handleDelete(job._id)}
                                                disabled={deletingId === job._id}
                                                className="text-red-500 hover:text-red-700 text-sm font-bold disabled:text-gray-300"
                                            >
                                                {deletingId === job._id ? "..." : "Delete"}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-20 text-center text-gray-400">
                                    No listings found matching your search.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}