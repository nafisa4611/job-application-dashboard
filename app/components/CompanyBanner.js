export default function CompanyBanner() {
  const companies = [
    { name: 'vodafone', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Vodafone_Logo.svg' },
    { name: 'intel', url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Intel_logo_%282020%29.svg' },
    { name: 'tesla', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
    { name: 'amd', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/AMD_Logo.svg' },
    { name: 'talkit', url: '#' }, // Placeholder for Talkit
  ];

  return (
    <section className="py-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-gray-400 text-sm mb-8 text-center md:text-left font-medium">Companies we helped grow</p>
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale contrast-125">
          {companies.map((logo, idx) => (
            logo.url !== '#' ? (
              <img key={idx} src={logo.url} alt={logo.name} className="h-6 md:h-8 object-contain" />
            ) : (
              <span key={idx} className="text-2xl font-black tracking-tighter text-gray-800">{logo.name}</span>
            )
          ))}
        </div>
      </div>
    </section>
  );
}