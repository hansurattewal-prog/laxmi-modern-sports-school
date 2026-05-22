import { useState } from "react";
import { CAMPUS_FACILITIES, CampusFacility } from "../types";
import { Building, ShieldCheck, Heart, UserCheck, Flame, Cpu, Eye, CheckCircle } from "lucide-react";

export default function FacilitiesExplorer() {
  const [activeCategory, setActiveCategory] = useState<"all" | "sports" | "academics" | "campus">("all");
  const [selectedFacility, setSelectedFacility] = useState<CampusFacility | null>(null);

  const filteredFacilities = CAMPUS_FACILITIES.filter(
    (f) => activeCategory === "all" || f.category === activeCategory
  );

  return (
    <section id="facilities" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">VIRTUAL CAMPUS TOUR</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2">
            Infrastructure & Facilities
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Spanning over a lush 5-acre landscape in Village Bichpari, Sonepat, our campus brings together digital age labs, specialized sports grounds, and safe boarding ecosystems.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Facilities" },
            { id: "sports", label: "Sports Infrastructure" },
            { id: "academics", label: "Academic & Tech Laboratories" },
            { id: "campus", label: "Residential & Utilities" }
          ].map((cat) => (
            <button
              id={`facility-filter-${cat.id}`}
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-900 text-white border-blue-900 shadow-md scale-102"
                  : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-slate-850"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Facility Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                  <button
                    onClick={() => setSelectedFacility(facility)}
                    className="bg-white text-slate-900 px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <Eye className="w-4.5 h-4.5" />
                    Enlarge Details
                  </button>
                </div>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-md text-blue-200 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider z-10 border border-blue-800">
                  {facility.category}
                </span>
              </div>

              {/* Facility Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2">
                    {facility.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 animate-pulse" />
                    Strictly Certified Facility
                  </span>
                  <span className="text-slate-500 uppercase tracking-wide">LMSSS Code</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Modal overlay */}
        {selectedFacility && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden border border-slate-200 shadow-2xl relative">
              
              {/* Modal Image */}
              <div className="relative h-56 bg-slate-100">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <h3 className="absolute bottom-4 left-4 font-display font-black text-xl text-white">
                  {selectedFacility.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-105 bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Category: {selectedFacility.category}
                  </span>
                  <span className="text-slate-400 text-xs">• Verified Operational</span>
                </div>
                
                <p className="text-sm text-slate-650 leading-relaxed">
                  Our {selectedFacility.title.toLowerCase()} is fully functional and inspected quarterly by our governing board to ensure compliance with student safety, hygenic nutrition standards, and sports pedagogy frameworks under Director Manjeet Lather.
                </p>

                {/* Facilities Specifications bullet lists */}
                <div className="border-t border-slate-100 pt-4 grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-650 bg-blue-600"></span>
                    <span>CCTV Encrypted Zone</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-655 bg-blue-600"></span>
                    <span>Power Backed Nodes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-655 bg-blue-600"></span>
                    <span>Warden Supervised</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-655 bg-blue-600"></span>
                    <span>First Aid Emergency kit</span>
                  </div>
                </div>

                <div className="flex justify-end pt-4 gap-2">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-205 text-slate-700 rounded-lg transition"
                  >
                    Close Window
                  </button>
                  <button
                    onClick={() => {
                      setSelectedFacility(null);
                      const element = document.getElementById("admissions");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white rounded-lg transition"
                  >
                    Inquire Campus Admissions
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
