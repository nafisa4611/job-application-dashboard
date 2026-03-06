import Link from "next/link";

export default function LatestJobCard({ job }) {

  const getTagColor = (tag) => {
    const map = {
  Marketing: "text-orange-500 bg-orange-50 border-orange-200",
  Design: "text-blue-500 bg-blue-50 border-blue-200",
  "Full-Time": "text-green-500 bg-green-50 border-green-200",
};

    return map[tag] || "text-gray-600 bg-gray-50 border-gray-200";
  };

  return (
    <div className="flex items-start justify-between p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition group">

      <div className="flex gap-4">

        {/* Company Logo */}
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center font-bold text-blue-600">
          {job.company.charAt(0)}
        </div>

        <div>

          <Link href={`/job/${job._id}`}>
            <h3 className="text-lg font-semibold transition-colors text-slate-900 group-hover:text-blue-600">
              {job.title}
            </h3>
          </Link>

          <p className="text-sm text-gray-500 mb-3">
            {job.company} • {job.location}
          </p>

          <div className="flex gap-2">

            <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getTagColor('Full-Time')}`}>
              Full-Time
            </span>

            <span
              className={`px-3 py-1 text-xs font-semibold border rounded-full ${getTagColor(
                job.category
              )}`}
            >
              {job.category}
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}