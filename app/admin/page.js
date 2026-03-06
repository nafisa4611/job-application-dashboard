'use client';
import { useState } from 'react';
import axios from 'axios';

export default function AdminPage() {
  const [form, setForm] = useState({
    title: '', company: '', location: '', category: 'Engineering', description: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POSTing to your fresh backend
      await axios.post('http://localhost:5000/api/jobs', form);
      setMessage('✅ Job posted successfully!');
      setForm({ title: '', company: '', location: '', category: 'Engineering', description: '' });
    } catch (err) {
      setMessage('❌ Failed to post job.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 border rounded-lg bg-white shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Job Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        <input className="w-full p-2 border rounded" placeholder="Company" value={form.company} onChange={e => setForm({...form, company: e.target.value})} required />
        <input className="w-full p-2 border rounded" placeholder="Location" value={form.location} onChange={e => setForm({...form, location: e.target.value})} required />
        <textarea className="w-full p-2 border rounded" placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} required />
        <button className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">Publish Job</button>
      </form>
      {message && <p className="mt-4 text-center font-medium">{message}</p>}
    </div>
  );
}