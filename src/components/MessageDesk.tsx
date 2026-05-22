import { MessageSquare, Phone, ShieldCheck, Mail, Users, Compass, Quote } from "lucide-react";
import { SCHOOL_DATA } from "../types";

export default function MessageDesk() {
  const { principal, director } = SCHOOL_DATA.leaders;

  return (
    <section id="messages" className="py-20 bg-white relative overflow-hidden">
      {/* Dynamic graphic grids on sides */}
      <div className="absolute inset-y-0 left-0 w-1/3 pulsing-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">GOVERNING BODY MESSAGES</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2">
            Leadership Desk
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Meet our founding visionaries who blend ancient sports disciplines with advanced digital learning environments to shape the leaders of tomorrow.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Card 1: Director */}
          <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-blue-555/10 group-hover:text-blue-500/20 transition-colors">
              <Quote className="w-16 h-16 transform -scale-x-100 text-blue-500/10" />
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-200">
                {/* Director Avatar / Professional Frame */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-blue-600 rounded-2xl rotate-3 scale-102 group-hover:rotate-6 transition-transform"></div>
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                    alt={director.name}
                    className="relative w-28 h-28 object-cover rounded-2xl border-4 border-white shadow-md animate-in fade-in transition"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-xl text-xs font-bold border-2 border-white shadow-md">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                </div>

                <div className="text-center sm:text-left space-y-2">
                  <span className="bg-blue-50 text-blue-750 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-105">
                    {director.designation}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-slate-900 tracking-tight">
                    {director.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-tight">
                    {director.qualification}
                  </p>
                </div>
              </div>

              {/* Message excerpt */}
              <div className="py-6 text-slate-650 leading-relaxed text-sm sm:text-base relative italic">
                "{director.message}"
              </div>
            </div>

            {/* Support Actions */}
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-blue-500" />
                <span>Available for sports career consultation</span>
              </div>
              <a
                href="tel:8930415079"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
              >
                <Phone className="w-3.5 h-3.5" />
                Direct Call: 8930415079
              </a>
            </div>
          </div>

          {/* Card 2: Principal */}
          <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-blue-555/10 group-hover:text-blue-500/20 transition-colors">
              <Quote className="w-16 h-16 transform -scale-x-100 text-blue-500/10" />
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-200">
                {/* Principal Avatar / Professional Frame */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-2xl -rotate-3 scale-102 group-hover:-rotate-6 transition-transform"></div>
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                    alt={principal.name}
                    className="relative w-28 h-28 object-cover rounded-2xl border-4 border-white shadow-md animate-in fade-in transition"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -bottom-2 -right-2 bg-blue-800 text-white p-1.5 rounded-xl text-xs font-bold border-2 border-white shadow-md">
                    <Users className="w-4 h-4" />
                  </span>
                </div>

                <div className="text-center sm:text-left space-y-2">
                  <span className="bg-blue-50 text-blue-750 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-105">
                    {principal.designation}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-slate-900 tracking-tight">
                    {principal.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-tight">
                    {principal.qualification}
                  </p>
                </div>
              </div>

              {/* Message excerpt */}
              <div className="py-6 text-slate-650 leading-relaxed text-sm sm:text-base relative italic">
                "{principal.message}"
              </div>
            </div>

            {/* Support Actions */}
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-blue-500" />
                <span>Available for parent-child academic feedback</span>
              </div>
              <a
                href="tel:9050773434"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
              >
                <Phone className="w-3.5 h-3.5" />
                Direct Call: 9050773434
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
