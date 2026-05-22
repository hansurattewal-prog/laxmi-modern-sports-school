import React from "react";
import { Trophy, Phone, Mail, Clock, MapPin, GraduationCap } from "lucide-react";
import { SCHOOL_DATA } from "../types";

export default function Footer({ onNavClick }: { onNavClick: (sectionId: string) => void }) {
  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavClick(id);
  };

  return (
    <footer id="footer-root" className="bg-slate-950 text-slate-400 border-t border-slate-900">
      
      {/* Upper Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
        
        {/* Col 1: School Branding */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-black text-lg text-white leading-none">LAXMI MODERN</h4>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">Sports Senior Secondary School</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
            Nurturing athletic physical excellence and top-tier board scores in Sonepat since 2008. Affiliated curriculum up to Class 12th Senior Secondary in Science, Commerce, and Humanities.
          </p>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            Empowering Minds • Shaping Champions
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="lg:col-span-3 space-y-4">
          <h5 className="font-display font-semibold text-xs text-white uppercase tracking-wider">Explore Campus</h5>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <a href="#messages" onClick={(e) => handleNavClick("messages", e)} className="hover:text-blue-400 transition">Leadership Messages</a>
            </li>
            <li>
              <a href="#sports" onClick={(e) => handleNavClick("sports", e)} className="hover:text-blue-400 transition">Sports Excellence Program</a>
            </li>
            <li>
              <a href="#academics" onClick={(e) => handleNavClick("academics", e)} className="hover:text-blue-400 transition">Academic Board Streams</a>
            </li>
            <li>
              <a href="#facilities" onClick={(e) => handleNavClick("facilities", e)} className="hover:text-blue-400 transition">Infrastructure & Labs</a>
            </li>
            <li>
              <a href="#admissions" onClick={(e) => handleNavClick("admissions", e)} className="hover:text-blue-400 transition">Admission Enquiry Desk</a>
            </li>
            <li>
              <a href="#ai-counselor" onClick={(e) => handleNavClick("ai-counselor", e)} className="hover:text-blue-400 transition font-bold text-blue-400">✨ AI Parent Assistant</a>
            </li>
          </ul>
        </div>

        {/* Col 3: Contacts */}
        <div className="lg:col-span-4 space-y-4 text-xs">
          <h5 className="font-display font-semibold text-xs text-white uppercase tracking-wider">Direct Hotlines</h5>
          
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-blue-500 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block font-bold leading-normal">Mrs. Poonam Lather (Principal)</span>
                <a href="tel:9050773434" className="text-slate-200 hover:text-blue-400 font-semibold font-mono inline-block">
                  +91 90507 73434
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-blue-500 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block font-bold leading-normal">Mr. Manjeet Lather (Director)</span>
                <a href="tel:8930415079" className="text-slate-200 hover:text-blue-400 font-semibold font-mono inline-block">
                  +91 89304 15079
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 border-t border-slate-900 pt-3">
              <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
              <div>
                <span className="text-slate-300 font-semibold">Village Bichpari, Sonepat</span>
                <p className="text-[10px] text-slate-500 mt-0.5">District Sonepat, Haryana, Pin: 131301</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lower Copyright Area Bar banner */}
      <div className="bg-slate-950/70 border-t border-slate-900 py-6 text-center text-[10px] text-slate-550 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Laxmi Modern Sports Senior Secondary School. All Rights Reserved.</p>
        <p className="font-semibold uppercase tracking-wider text-slate-500">HBSE Board Affiliated • Sonepat Haryana India</p>
      </div>

    </footer>
  );
}
