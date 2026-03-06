

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-20 overflow-hidden">
      {/* Background Decorative Lines (Optional - mimic the geometric lines in screenshot) */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left">
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Discover <br /> 
            more than <br />
            <span className="text-blue-500 relative inline-block">
              5000+ Jobs
              {/* Hand-drawn blue underline effect from screenshot */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 322 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17C107.5 4.5 210.5 4.5 319 17" stroke="#4640DE" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search Bar Container */}
          <div className="bg-white p-2 shadow-2xl rounded-sm flex flex-col md:flex-row items-center gap-2 border border-gray-100 mb-6">
            <div className="flex items-center flex-1 px-4 border-b md:border-b-0 md:border-r border-gray-200 w-full py-2">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" placeholder="Job title or keyword" className="outline-none w-full text-sm py-1" />
            </div>
            
            <div className="flex items-center flex-1 px-4 w-full py-2">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <input type="text" placeholder="Florence, Italy" className="outline-none w-full text-sm py-1" />
            </div>

            <button className="bg-[#4640DE] text-white px-8 py-3 font-bold hover:bg-blue-700 transition w-full md:w-auto">
              Search my job
            </button>
          </div>

          <p className="text-sm text-gray-400">
            <span className="font-medium text-gray-600">Popular :</span> UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* Right Image (Man Pointing) */}
        <div className="hidden md:flex justify-end mt-12 md:mt-0">
          <div className="relative">
             {/* Replace with your actual image path */}
            <img 
              src="/hero-man.png" 
              alt="Professional pointing at text" 
              className="max-w-md lg:max-w-lg z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}