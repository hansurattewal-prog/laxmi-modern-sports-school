import { Trophy, GraduationCap, Users, MapPin, ArrowRight, Star, Dumbbell } from "lucide-react";
import { INSTANT_STATS, SCHOOL_DATA } from "../types";

export default function Hero({ onExploreClick }: { onExploreClick: (sectionId: string) => void }) {
  // Map icons to design assets helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-blue-500" />;
      case "Activity":
      case "Flame":
        return <Dumbbell className="w-6 h-6 text-blue-500" />;
      case "Map":
        return <MapPin className="w-6 h-6 text-green-500" />;
      case "Users":
        return <Users className="w-6 h-6 text-violet-500" />;
      default:
        return <Star className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="home" className="relative bg-slate-950 text-white min-h-[92vh] flex items-center overflow-hidden">
      {/* Absolute Geometric Backdrop Details */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      
      {/* Decorative colored glow orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-blue-900/10 blur-[120px] pointer-events-none"></div>

      {/* Styled School Image Mask Backplane backdrop */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 z-0 opacity-25 lg:opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent lg:from-slate-950 lg:via-slate-950/40 lg:to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
          alt="Laxmi Modern Sports School Campus Background"
          className="w-full h-full object-cover object-center scale-105 select-none"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Bold Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Tag Badges */}
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-300">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
            Sports & Academics Excellence Hub
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight sm:leading-none text-white">
            Where Raw Talent is <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Chiseled Into Champions
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Welcome to <strong className="text-white font-medium">{SCHOOL_DATA.name}</strong>, a premium residential and day secondary school in Bichpari, Sonepat. We unify Olympic disciplines of Wrestling, Kabaddi, and Athletics with exceptional board classrooms.
          </p>

          {/* Quick Informative Badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full py-2">
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0 border border-blue-500/20">HBSE</div>
              <span className="text-xs text-slate-300 font-medium">Class 1st to 12th Quality Curriculum</span>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0 border border-blue-500/20">🏆</div>
              <span className="text-xs text-slate-300 font-medium">Free Sports Training Scholars</span>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center gap-2.5 col-span-2 md:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0 border border-blue-500/20">🏠</div>
              <span className="text-xs text-slate-300 font-medium">Specialized Athlete Hostels</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <button
              id="hero-enlist-cta"
              onClick={() => onExploreClick("admissions")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-display font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              Apply Online Enquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              id="hero-explore-cta"
              onClick={() => onExploreClick("sports")}
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Sports Academy
            </button>
          </div>
        </div>

        {/* Right Side: Floating Spotlight Graphic Card & Stats Grid */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
            {/* Corner visual accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-2xl pointer-events-none"></div>

            <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              Highlights at a Glance
            </h3>

            {/* Structured Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {INSTANT_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-slate-850 p-4 rounded-xl flex items-center gap-3 hover:border-slate-700 transition"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                    {getIcon(stat.icon)}
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick notice bar */}
            <div className="mt-4 bg-blue-950/40 border border-blue-900/50 p-3 rounded-lg flex items-center gap-2 text-xs text-blue-300">
              <span className="bg-blue-600 text-white font-extrabold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider">Update</span>
              <p className="font-medium">Free sports scholarship trials under Mr. Manjeet Lather start soon!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
