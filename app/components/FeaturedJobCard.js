import Link from "next/link";

export default function FeaturedJobCard({ job }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col justify-between h-full hover:shadow-lg transition duration-300 group">
      
      {/* TOP */}
      <div>
        <div className="flex justify-between items-start mb-5">
          
          {/* Company Logo */}
          <div className="w-12 h-12 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center font-semibold text-blue-600 text-sm">
            {job.company?.charAt(0)}
          </div>

          {/* Job Type */}
          <span className="text-blue-600 border border-blue-500 px-3 py-1 rounded-md text-xs font-semibold">
            Full Time
          </span>
        </div>

        {/* Job Title */}
        <Link href={`/job/${job._id}`}>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition">
            {job.title}
          </h3>
        </Link>

        {/* Company + Location */}
        <p className="text-gray-400 text-sm mt-1 mb-4">
          {job.company} • {job.location}
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
          {job.description ||
            "Looking for a passionate individual to join our growing team."}
        </p>
      </div>

      {/* BOTTOM TAGS */}
      <div className="flex gap-2 mt-6">
        <span className="px-3 py-1 bg-orange-50 text-orange-400 text-xs font-semibold rounded-full border border-orange-100">
          Marketing
        </span>

        <span className="px-3 py-1 bg-green-50 text-green-500 text-xs font-semibold rounded-full border border-green-100">
          Design
        </span>
      </div>
    </div>
  );
}