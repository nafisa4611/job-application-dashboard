import Image from "next/image";

export default function PostJobBanner() {
  return (
    <section className="relative max-w-6xl mx-auto mt-24 px-6 md:px-0">
      {/* Background with Clip-Path matching the design */}
      <div 
        className="bg-indigo-600 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between text-white relative z-10"
        style={{
          // This creates the angled cut-out shape from your screenshot
          clipPath: 'polygon(0% 15%, 85% 0%, 100% 0%, 100% 85%, 15% 100%, 0% 100%)'
        }}
      >
        <div className="z-10 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4 leading-tight">Start posting jobs today</h2>
          <p className="mb-8 opacity-80 text-xl">Start posting jobs for only $10.</p>
          <button className="bg-white text-indigo-600 px-8 py-4 font-bold hover:bg-gray-100 transition shadow-lg rounded-sm">
            Sign Up For Free
          </button>
        </div>
        
        <div className="mt-12 md:mt-0 z-10 shadow-2xl relative">
          <Image 
            src="/dashboard.jpg" 
            width={550} 
            height={350} 
            alt="Dashboard Preview" 
            className="rounded border-4 border-blue-400 rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Optional decorative background circles from screenshot */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full -mr-20 -mt-20 opacity-30 z-0"></div>
    </section>
  );
}