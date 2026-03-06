import LatestJobCard from "./LatestJobCard";

const defaultJobs = [
  {
    _id: "1",
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    category: "Marketing",
  },
  {
    _id: "2",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    category: "Design",
  },
  {
    _id: "3",
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    category: "Engineering",
  },
  {
    _id: "4",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    category: "Marketing",
  },
  {
    _id: "5",
    title: "Product Designer",
    company: "Canva",
    location: "London, UK",
    category: "Design",
  },
  {
    _id: "6",
    title: "Frontend Developer",
    company: "Shopify",
    location: "Toronto, Canada",
    category: "Engineering",
  },
  {
    _id: "7",
    title: "UX Researcher",
    company: "Google",
    location: "Remote",
    category: "Design",
  },
  {
    _id: "8",
    title: "Growth Marketer",
    company: "Stripe",
    location: "Dublin, Ireland",
    category: "Marketing",
  },
];

export default function LatestJobs({ jobs }) {

  const jobList = jobs?.length ? jobs : defaultJobs;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Latest <span className="text-blue-500">jobs open</span>
          </h2>

          <button className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
            Show all jobs
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobList.slice(0, 8).map((job) => (
            <LatestJobCard key={job._id} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
}