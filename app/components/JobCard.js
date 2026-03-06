
import Link from 'next/link';

export default function JobCard({ job }) {
  return (
    <div className="flex items-start justify-between p-6 transition-all bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:-translate-y-1 group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center font-bold text-blue-600">
          {job.company.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">{job.title}</h3>
          <p className="text-gray-500 text-sm">{job.company} • {job.location}</p>
          <div className="flex gap-2 mt-2">
             <span className="px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full font-medium">Full-Time</span>
             <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs rounded-full font-medium">{job.category}</span>
          </div>
        </div>
      </div>
      <Link href={`/jobs/${job._id}`} className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition">
        Apply
      </Link>
    </div>
  );
}