import Image from "next/image";

export default function PostJobBanner() {
  return (
    <section className="relative max-w-6xl mx-auto mt-16">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-12 flex items-center justify-between overflow-hidden">

        <div className="text-white max-w-md">
          <h2 className="text-4xl font-bold mb-4">
            Start posting jobs today
          </h2>

          <p className="mb-6 opacity-90">
            Start posting jobs for only $10.
          </p>

          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
            Sign Up For Free
          </button>
        </div>

        <Image
          src="/dashboard.png"
          width={420}
          height={260}
          alt="dashboard"
          className="hidden md:block"
        />
      </div>
    </section>
  );
}