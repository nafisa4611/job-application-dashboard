import Image from "next/image";

export default function CompanyBanner() {
  const companies = [
    { name: "Vodafone", src: "/vodafone.png" },
    { name: "Intel", src: "/intel.png" },
    { name: "Tesla", src: "/tesla.png" },
    { name: "AMD", src: "/amd.png" },
    { name: "Talkit", src: "/talkit.png" },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-8">
        <p className="text-gray-400 text-sm mb-2 font-medium">
          Companies we helped grow
        </p>

        <div className="flex items-center justify-between gap-10">
          {companies.map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={40}
                className="object-contain"
              />

              <span className="text-sm text-gray-600 font-medium">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}