import { useState, useEffect } from "react";
import { Phone, Mail, Clock, MapPin, Menu, X, ChevronRight, GraduationCap } from "lucide-react";
import { SCHOOL_DATA } from "../types";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Messages", id: "messages" },
    { label: "Sports Center", id: "sports" },
    { label: "Academics", id: "academics" },
    { label: "Facilities", id: "facilities" },
    { label: "Admissions", id: "admissions" },
    { label: "AI Counselor", id: "ai-counselor" },
    { label: "Contact Us", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header id="header-root" className="w-full z-50 transition-all duration-300">
      {/* Top Warning/Contact Info Bar */}
      <div className="w-full bg-blue-900 text-blue-100 py-2 px-4 text-xs sm:px-6 lg:px-8 border-b border-blue-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Leftside location and hours */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-blue-300" />
              Village Bichpari, Sonepat, Haryana
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <Clock className="w-3.5 h-3.5 text-blue-300" />
              {SCHOOL_DATA.contacts.hours}
            </span>
          </div>

          {/* Rightside direct Leader Hotlines */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a href={`tel:${SCHOOL_DATA.leaders.principal.name}`} className="flex items-center gap-1 text-white hover:text-blue-200 font-medium transition">
              <Phone className="w-3.5 h-3.5 text-blue-300" />
              Principal (Poonam Lather): 9050773434
            </a>
            <span className="text-blue-800">|</span>
            <a href="tel:8930415079" className="flex items-center gap-1 text-white hover:text-blue-200 font-medium transition">
              <Phone className="w-3.5 h-3.5 text-blue-300" />
              Director (Manjeet Lather): 8930415079
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8 border-b ${
          isScrolled
            ? "sticky top-0 bg-white/95 backdrop-blur-md shadow-md border-slate-200"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand Brand */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-xl bg-blue-800 flex items-center justify-center text-white shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-all">
              <GraduationCap className="w-7 h-7" />
              <span className="absolute -bottom-1 -right-1 bg-blue-900 text-[9px] font-bold px-1 rounded-md text-blue-300 border border-blue-900">
                SPORTS
              </span>
            </div>
            <div>
              <h1 className="font-display font-black text-lg sm:text-xl leading-none text-blue-900 tracking-tight group-hover:text-blue-700 transition-colors">
                LAXMI MODERN
              </h1>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                Sports Sr. Sec. School • Bichpari
              </p>
            </div>
          </div>

          {/* Desktop Navigation Linkages */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                id={`nav-btn-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-700 font-bold border border-blue-100"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent"
                }`}
              >
                {item.id === "ai-counselor" ? (
                  <span className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">
                    ✨ AI Counselor
                  </span>
                ) : (
                  item.label
                )}
              </button>
            ))}
            <button
              id="cta-admission"
              onClick={() => handleNavClick("admissions")}
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-display font-bold px-5 py-2.5 rounded-lg text-sm shadow-md hover:shadow-lg transition-all"
            >
              Admission Open
            </button>
          </div>

          {/* Mobile Menu Action Hamburger */}
          <div className="flex items-center lg:hidden gap-3">
            <a
              href="tel:9050773434"
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
              title="Call principal"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden absolute top-auto left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-5 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl mb-4">
              <a href="tel:9050773434" className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600">
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                Poonam: 9050773434
              </a>
              <a href="tel:8930415079" className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600">
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                Manjeet: 8930415079
              </a>
              <div className="col-span-2 border-t border-slate-100 pt-2 flex items-center gap-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Bichpari, Sonepat
              </div>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  id={`mobile-nav-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-semibold transition ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-750 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.id === "ai-counselor" && "✨ "}
                    {item.label}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${activeSection === item.id ? "text-blue-600" : "text-slate-400"}`} />
                </button>
              ))}
            </div>

            <button
              id="mobile-admission-btn"
              onClick={() => handleNavClick("admissions")}
              className="w-full mt-4 bg-blue-600 text-white font-display font-bold px-5 py-3.5 rounded-lg text-center shadow-md shadow-blue-900/10 block hover:bg-blue-700"
            >
              Register for Admission (2026-27)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
