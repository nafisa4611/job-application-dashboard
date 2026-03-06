import LatestJobCard from "./LatestJobCard";

export default function LatestJobs({ jobs = [] }) {

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


  const combinedJobs = [...jobs, ...defaultJobs].slice(0, 8);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Latest <span className="text-[#26a4ff]">Jobs Open</span>
          </h2>

          <button className="text-[#26a4ff] font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Show all jobs
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* 2-Column Grid for Latest Jobs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {combinedJobs.map((job) => (
            <LatestJobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}