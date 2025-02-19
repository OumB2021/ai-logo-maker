import { ChevronRight } from "lucide-react";

function Cta() {
  return (
    <div className="flex items-center gap-4">
      <button className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-200">
        Get Started
      </button>
      <button className="px-6 py-3 text-purple-500  font-semibold hover:bg-purple-200 transition duration-200 flex items-center gap-2">
        Learn More <ChevronRight size={20} />
      </button>
    </div>
  );
}
export default Cta;
