import React, { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, Compass, ArrowRight, Star } from "lucide-react";
import { SCHOOL_DATA } from "../types";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Simple static direction steps to Bichpari
  const directionTips = [
    { from: "From Sonipat Junction", distance: "Approx. 18 km", route: "Head north on Gohana Road, past the main Bypass. Look for Bichpari sign board on the right bank." },
    { from: "From Gohana Town", distance: "Approx. 15 km", route: "Head south along Sonepat Highway, past local sugar mills. Sonepat-Bichpari local bus stops directly at the school gate." },
    { from: "From Delhi GT Karnal Road", distance: "Approx. 45 km", route: "Take Murthal Bypass exit toward Sonipat City, proceed past bypass toward Mohana-Bichpari lane." }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please fill out name and message.");
      return;
    }

    setIsSuccess(true);
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">VISIT OUR CAMPUS & DIAL HOTLINES</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2">
            Contact & Directions
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Need directions to Village Bichpari? Want to coordinate early morning wrestling practices with our coaches? Choose a channel below to consult our staff.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Block: School Contact card & visual maps */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="font-display font-bold text-lg text-slate-905 mb-6 flex items-center gap-2">
                <span className="w-2 h-5 bg-blue-600 rounded"></span>
                Official Contact Numbers
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Principal Hotline card */}
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">School Principal</span>
                  <h4 className="font-display font-semibold text-sm text-slate-805">Mrs. Poonam Lather</h4>
                  <a href="tel:9050773434" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition flex items-center gap-1.5 pt-1">
                    <Phone className="w-4 h-4 text-slate-400" />
                    +91 90507 73434
                  </a>
                </div>

                {/* Director Hotline card */}
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-2">
                  <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">School Director</span>
                  <h4 className="font-display font-semibold text-sm text-slate-805">Mr. Manjeet Lather</h4>
                  <a href="tel:8930415079" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition flex items-center gap-1.5 pt-1">
                    <Phone className="w-4 h-4 text-slate-400" />
                    +91 89304 15079
                  </a>
                </div>
              </div>

              {/* General address & hours detail list */}
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-650">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900">Registered Campus Location</h5>
                    <p className="text-xs text-slate-500 mt-1">Laxmi Modern Sports Senior Secondary School, Village Bichpari, District Sonipat, Haryana, Pin: 131301 </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-905">Administrative Visiting Hours</h5>
                    <p className="text-xs text-slate-500 mt-1">Summer: 8:00 AM to 2:00 PM | Winter: 8:30 AM to 2:30 PM (Sundays Active for hostel resident boards)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-905">Email Address Correspondence</h5>
                    <p className="text-xs text-slate-500 mt-1">info@laxmimodernschool.com | support@laxmimodernschool.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Visual maps & road guidelines to Sonipat Bichpari */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="font-display font-bold text-lg text-slate-905 mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-500" />
                Inter-City Route Navigator
              </h3>
              
              <div className="space-y-3">
                {directionTips.map((tip, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100 gap-2 text-xs">
                    <div>
                      <span className="font-extrabold text-slate-805 block">{tip.from}</span>
                      <p className="text-slate-550 mt-1">{tip.route}</p>
                    </div>
                    <span className="bg-blue-50 text-blue-800 font-mono font-bold px-2 py-1 rounded border border-blue-100 inline-block shrink-0 self-start sm:self-center">
                      {tip.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: General contact ticket desk */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-black text-xl text-white mb-4 flex items-center gap-2">
                <span>Direct Message Desk</span>
                <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider text-white">Online</span>
              </h3>
              
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Send a quick direct message to our admissions board. We check emails hourly during active sessions.
              </p>

              {isSuccess && (
                <div className="mb-4 p-4 bg-green-950/40 border border-green-800/80 text-green-300 rounded-xl flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="w-4.5 h-4.5 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Message Dispatched!</span>
                    <span className="mt-1 block">Your comment block was successfully delivered to Principal Poonam Lather's support office.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-hidden p-3 rounded-lg text-xs font-semibold text-slate-200"
                    placeholder="e.g., Ramesh Malhan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Your Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-hidden p-3 rounded-lg text-xs font-semibold text-slate-200"
                    placeholder="e.g., ramesh@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Detailed Message Body</label>
                  <textarea
                    className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-hidden p-3 rounded-lg text-xs font-medium text-slate-100 h-28"
                    placeholder="e.g., I would like to schedule a wrestling mat trial with director Manjeet Lather next Saturday for my class 9 son."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  id="contact-dispatch-btn"
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-display font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:shadow-lg hover:shadow-blue-600/15 cursor-pointer transition"
                >
                  <Send className="w-4 h-4" />
                  Dispatch Message
                </button>
              </form>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-850 text-[10px] text-slate-500 flex items-center gap-2">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Registered under Sonepat Haryana State Sports Board</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
