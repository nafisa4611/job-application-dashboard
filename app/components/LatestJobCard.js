import Link from "next/link";

export default function LatestJobCard({ job }) {
  const getTagColor = (tag) => {
    const map = {
      Marketing: "text-orange-500 bg-orange-50 border-orange-100",
      Design: "text-blue-500 bg-blue-50 border-blue-100",
      "Full-Time": "text-green-500 bg-green-50 border-green-100",
      Engineering: "text-purple-500 bg-purple-50 border-purple-100",
    };
    return map[tag] || "text-gray-600 bg-gray-50 border-gray-200";
  };

  return (
    <div className="flex items-center justify-between p-6 bg-white border border-gray-100 hover:shadow-lg transition-all group">
      <div className="flex gap-4">
        {/* Company Logo placeholder */}
        <div className="w-12 h-12 bg-white border border-gray-100 rounded flex items-center justify-center font-bold text-[#26a4ff] shadow-sm">
          {job.company.charAt(0)}
        </div>

        <div>
          <Link href={`/job/${job._id}`}>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#26a4ff] transition-colors">
              {job.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-400 mb-2">
            {job.company} • {job.location}
          </p>

          <div className="flex gap-2">
            <span className={`px-3 py-1 text-xs font-bold border rounded-full ${getTagColor('Full-Time')}`}>
              Full-Time
            </span>
            <span className="text-gray-300">|</span>
            <span className={`px-3 py-1 text-xs font-bold border rounded-full ${getTagColor(job.category)}`}>
              {job.category}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button from Screenshot */}
      <div className="flex flex-col items-end gap-2">
        <button className="bg-[#4640DE] text-white px-6 py-2 font-bold hover:bg-[#26a4ff] transition">
          Apply
        </button>
        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-2">
            <div className="bg-[#26a4ff] h-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
}