import { ArrowRight } from "lucide-react";

export default function CategoryCard({
  name,
  jobs,
  icon: Icon,
  active
}) {
  return (
    <div
      className={`p-6 rounded-xl border cursor-pointer transition
      ${active ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none"
      : "bg-white hover:shadow-lg"}
      `}
    >
      <Icon className="mb-4" size={28} />

      <h3 className="font-semibold text-lg">{name}</h3>

      <div className="flex items-center justify-between mt-2 text-sm">
        <span>{jobs} jobs available</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}