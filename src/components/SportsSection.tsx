import { useState } from "react";
import { SPORTS_DISCIPLINES, SportDiscipline } from "../types";
import { Trophy, Shield, Dumbbell, Clock, Apple, Star, ArrowRight, Table } from "lucide-react";

export default function SportsSection() {
  const [selectedSport, setSelectedSport] = useState<SportDiscipline>(SPORTS_DISCIPLINES[0]);
  const [activeTab, setActiveTab] = useState<"overview" | "schedule" | "diet">("overview");

  // Custom mocked schedules for sports of Sonipat
  const getRegimenData = (sportId: string) => {
    switch (sportId) {
      case "wrestling":
        return {
          schedule: [
            { time: "05:00 AM - 06:30 AM", activity: "Traditional Akhada soil workouts & body weight curls" },
            { time: "06:30 AM - 07:15 AM", activity: "Stretching & Yoga coordination" },
            { time: "03:30 PM - 05:30 PM", activity: "Tactical wrestling holds, grips, & sparring sessions under Coach Satish" },
            { time: "05:30 PM - 06:15 PM", activity: "Stamina building 3km cross country jog" }
          ],
          diet: [
            { meal: "Pre-Workout (04:45 AM)", items: "Soaked almonds (Badam) & walnut mash + warm water" },
            { meal: "Post-Workout breakfast", items: "Fresh whole milk (Dudh), sprouted chana, & seasonal fruits" },
            { meal: "Lunch at school mess", items: "Wheat Rotis with home-cooked dal, green vegetables, & fresh curd" },
            { meal: "Pre-Evening Session", items: "Banana or sweet potato mashed + handful of roasted chana" },
            { meal: "Dinner (Hostel)", items: "Light millet (Bajra / Wheat) Roti with fresh homemade Ghee & paneer/lentils" }
          ]
        };
      case "kabaddi":
        return {
          schedule: [
            { time: "05:15 AM - 06:30 AM", activity: "Agility ladders, starting sprints, & abdominal strength circuits" },
            { time: "06:30 AM - 07:00 AM", activity: "Breath-holding exercises & recovery mud sessions" },
            { time: "04:00 PM - 06:00 PM", activity: "Anti-raiding techniques, ankle/thigh traps practice, & defensive simulations" },
            { time: "06:00 PM - 06:30 PM", activity: "Review of match strategy and tactical videos" }
          ],
          diet: [
            { meal: "Pre-Workout (05:00 AM)", items: "Dates, soaked raisins, & natural honey water" },
            { meal: "Post-Workout breakfast", items: "Fresh paneer bhurji, multigrain porridge with milk" },
            { meal: "Lunch at school mess", items: "Arhar Dal, steamed rice, multi-seed bread, & mint buttermilk" },
            { meal: "Pre-Evening Session", items: "Peanut butter sandwich & boiled sweet corn" },
            { meal: "Dinner (Hostel)", items: "Mixed flour chapatis, high protein soybean curry, and fresh milk glass" }
          ]
        };
      default:
        return {
          schedule: [
            { time: "05:30 AM - 06:45 AM", activity: "Pace work, high knee strides, and aerobic base jogging" },
            { time: "03:45 PM - 05:45 PM", activity: "Explosive block starts, technical hurdles, or long-jump drill checks" },
            { time: "05:45 PM - 06:15 PM", activity: "Cool down stretches, foam rolling, & muscle recovery checks" }
          ],
          diet: [
            { meal: "Pre-Workout", items: "1 Banana + soaked almonds" },
            { meal: "Post-Workout breakfast", items: "Oats porridge with raisins and fresh hot milk" },
            { meal: "Lunch", items: "Standard high carb wheat rotis, green leafy vegetables, thick curd" },
            { meal: "Evening Pre-Session", items: "Boiled potato or handful of roasted grams" },
            { meal: "Dinner", items: "Slow cooking dal, soybean chunks, wheat chapatis, and cow milk" }
          ]
        };
    }
  };

  const currentRegimen = getRegimenData(selectedSport.id);

  return (
    <section id="sports" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-1/4 h-1/3 bg-radial from-blue-500/5 to-transparent rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">CHAMPIONS CLAYMAT & MATS</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2">
            Sports Excellence Center
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            As a premier sports school, we provide world-class infrastructure, expert mentors, and rigorous physical conditioning plans to cultivate champions who dominate State, National, and International tournaments.
          </p>
        </div>

        {/* Dynamic Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Sport Picker */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-display font-bold text-lg text-slate-800 px-2 mb-4">
              Our Sports Academies
            </h3>
            <div className="space-y-2">
              {SPORTS_DISCIPLINES.map((sport) => (
                <button
                  id={`sport-tab-${sport.id}`}
                  key={sport.id}
                  onClick={() => {
                    setSelectedSport(sport);
                    setActiveTab("overview");
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all ${
                    selectedSport.id === sport.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/10 scale-102 font-semibold"
                      : "bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100/50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${selectedSport.id === sport.id ? "bg-blue-650 text-white" : "bg-blue-50 text-blue-600"}`}>
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base leading-tight">
                        {sport.name}
                      </div>
                      <div className={`text-[10px] uppercase font-bold tracking-wider ${selectedSport.id === sport.id ? "text-blue-300" : "text-slate-400"}`}>
                        Led by National Coach
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition ${selectedSport.id === sport.id ? "text-blue-400 translate-x-1" : "text-slate-450"}`} />
                </button>
              ))}
            </div>

            {/* Quick Note about Trials */}
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl mt-6">
              <h4 className="font-display font-bold text-blue-800 text-xs uppercase tracking-wide flex items-center gap-1.5">
                <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                Admission Scholarship Trials
              </h4>
              <p className="text-xs text-blue-700 mt-2 leading-relaxed">
                Direct admission without fee for state medal winners. Registrations open under director <strong>Manjeet Lather</strong>.
              </p>
            </div>
          </div>

          {/* Right Area: Interactive Hub display details */}
          <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between min-h-[500px]">
            
            {/* Top Navigation inside the Display Panel */}
            <div className="bg-slate-900 text-white p-4 sm:p-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:items-center sm:justify-between border-b border-slate-800">
              <div>
                <h3 className="font-display font-black text-xl sm:text-2xl tracking-tight text-white flex items-center gap-2">
                  <span>{selectedSport.name}</span>
                  <span className="text-xs bg-blue-600 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-widest text-white">Elite</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Mentor: <strong className="text-slate-200">{selectedSport.coach}</strong>
                </p>
              </div> join

              {/* Subtabs selectors */}
              <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start sm:self-center">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    activeTab === "overview" ? "bg-blue-600 text-white shadow-xs" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("schedule")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    activeTab === "schedule" ? "bg-blue-600 text-white shadow-xs" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Training Timetable
                </button>
                <button
                  onClick={() => setActiveTab("diet")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    activeTab === "diet" ? "bg-blue-600 text-white shadow-xs" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Diet Program
                </button>
              </div>
            </div>

            {/* Tab body */}
            <div className="p-6 sm:p-8 flex-1">
              {activeTab === "overview" && (
                <div className="space-y-6 animate-in fade-in duration-250">
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    {selectedSport.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Key Equipment or Infrastructure */}
                    <div className="bg-slate-55 p-5 rounded-xl border border-slate-100">
                      <h4 className="font-display font-semibold text-slate-800 text-sm flex items-center gap-2 mb-3">
                        <Dumbbell className="w-4 h-4 text-blue-600" />
                        Infrastructure & Gear Available
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-650">
                        {selectedSport.equipment.map((eq, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-650 shrink-0"></span>
                            <span>{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Landmark Hall of Fame Achievements */}
                    <div className="bg-yellow-50/50 p-5 rounded-xl border border-yellow-100">
                      <h4 className="font-display font-semibold text-amber-900 text-sm flex items-center gap-2 mb-3">
                        <Trophy className="w-4 h-4 text-amber-600" />
                        LMSSS Hall Of Fame Achievements
                      </h4>
                      <ul className="space-y-2 text-xs text-amber-805">
                        {selectedSport.achievements.map((ach, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                            <span className="font-medium">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "schedule" && (
                <div className="space-y-4 animate-in fade-in duration-250">
                  <p className="text-xs text-slate-500 italic mb-4">
                    *Our athletes balance rigorous workouts with class curriculums. Timetable overseen personally by Director Manjeet Lather.
                  </p>

                  <div className="border border-slate-100 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 text-slate-700 uppercase tracking-widest text-[10px] font-bold border-b border-slate-100">
                        <tr>
                          <th className="p-4">Training Time Slot</th>
                          <th className="p-4">Daily Activity Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {currentRegimen.schedule.map((slot, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition">
                            <td className="p-4 font-mono text-xs font-semibold text-blue-600 flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {slot.time}
                            </td>
                            <td className="p-4 text-xs sm:text-sm text-slate-700 font-medium">
                              {slot.activity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "diet" && (
                <div className="space-y-4 animate-in fade-in duration-250">
                  <div className="flex items-center gap-2 text-xs text-slate-500 bg-blue-100/10 border border-blue-500/10 p-3 rounded-lg mb-4">
                    <Apple className="w-4 h-4 text-blue-600 shrink-0" />
                    <p className="font-medium text-slate-655">We focus heavily on standard haryanvi dietary strength markers (milk, almonds, ghee, curd) to power recovery.</p>
                  </div>

                  <div className="border border-slate-100 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 text-slate-700 uppercase tracking-widest text-[10px] font-bold border-b border-slate-100">
                        <tr>
                          <th className="p-4">Meal Timing</th>
                          <th className="p-4">Specific Recommended Food Items</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {currentRegimen.diet.map((item, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition">
                            <td className="p-4 font-display font-extrabold text-xs text-slate-800">
                              {item.meal}
                            </td>
                            <td className="p-4 text-xs sm:text-sm text-slate-600">
                              {item.items}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions banner panel */}
            <div className="bg-slate-55 p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="font-semibold text-slate-800 text-sm">Want to join this academic & coaching batch?</p>
                <p className="text-xs text-slate-500">Contact coach panel directly to align registration trials.</p>
              </div>
              <a
                href="tel:8930415079"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
              >
                Call Director Manjeet: 8930415079
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
