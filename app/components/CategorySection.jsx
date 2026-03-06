import CategoryCard from "./CategoryCard";
import { Briefcase, Code, Megaphone, Wallet, Monitor, Wrench, Building2, Users } from "lucide-react";

const categories = [
  { name: "Design", jobs: 235, icon: Wrench },
  { name: "Sales", jobs: 756, icon: Briefcase },
  { name: "Marketing", jobs: 140, icon: Megaphone, active: true },
  { name: "Finance", jobs: 325, icon: Wallet },
  { name: "Technology", jobs: 436, icon: Monitor },
  { name: "Engineering", jobs: 542, icon: Code },
  { name: "Business", jobs: 211, icon: Building2 },
  { name: "Human Resource", jobs: 346, icon: Users },
];

export default function CategorySection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">
          Explore by <span className="text-[#26a4ff]">Category</span>
        </h2>

        <button className="text-[#26a4ff] font-medium">
          Show all jobs →
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>
    </section>
  );
}