import { useState } from "react";
import { ACADEMIC_STREAMS } from "../types";
import { BookOpen, GraduationCap, Award, Laptop, Users, CheckCircle2, Trophy, ArrowRight } from "lucide-react";

export default function AcademicsSection() {
  const [selectedStream, setSelectedStream] = useState(ACADEMIC_STREAMS[0]);

  return (
    <section id="academics" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative vectors top-left */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-radial from-amber-500/5 to-transparent rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">HBSE & CBSE AFFILIATED ACADEMICS</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2">
            Academic Programs & Streams
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            While we build physical champions, we do not compromise on intellectual brilliance. Our board curriculums emphasize scientific logic, creative curiosity, and targeted coaching for major entrance exams.
          </p>
        </div>

        {/* Academic High Points Bar banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4 hover:shadow-md transition">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">100% Board Pass Rate</h4>
              <p className="text-xs text-slate-500 mt-1">Consistent historic records of distinction marks in Class 10 & 12 state/board examinations.</p>
            </div>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4 hover:shadow-md transition">
            <div className="p-3 bg-blue-50 text-blue-750 rounded-xl border border-blue-150">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">JEE / NEET & NDA Coaching</h4>
              <p className="text-xs text-slate-500 mt-1">Special afternoon batches for competitive prep and mock papers led by specialized physics & math tutors.</p>
            </div>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4 hover:shadow-md transition">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">Smart Technology Labs</h4>
              <p className="text-xs text-slate-500 mt-1">Classrooms outfitted with audio-visual equipment and digital course modules to aid deep cognitive digestion.</p>
            </div>
          </div>
        </div>

        {/* Dynamic Streams Tab Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* Streams Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col justify-start space-y-3">
            <div className="bg-slate-900 text-white p-5 rounded-t-2xl">
              <h3 className="font-display font-bold text-base tracking-tight text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                Select Senior Stream
              </h3>
              <p className="text-xs text-slate-400 mt-1">Explore specialized stream structures for Class 11 & 12 scholars.</p>
            </div>

            <div className="bg-slate-50 p-3 rounded-b-2xl border-x border-b border-slate-200/80 space-y-2 flex-1">
              {ACADEMIC_STREAMS.map((stream) => (
                <button
                  id={`stream-tab-${stream.id}`}
                  key={stream.id}
                  onClick={() => setSelectedStream(stream)}
                  className={`w-full text-left p-4 rounded-xl border font-bold text-sm transition-all flex items-center justify-between ${
                    selectedStream.id === stream.id
                      ? "bg-white text-blue-700 border-blue-600 shadow-md scale-102"
                      : "bg-transparent text-slate-700 border-transparent hover:bg-white hover:border-slate-200"
                  }`}
                >
                  <span className="font-display">{stream.name}</span>
                  <ArrowRight className={`w-4 h-4 transition ${selectedStream.id === stream.id ? "text-blue-600 translate-x-1" : "text-slate-400"}`} />
                </button>
              ))}

              <div className="mt-6 p-4 rounded-xl bg-blue-50/50 text-blue-900 text-xs border border-blue-100">
                <p className="font-bold flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-blue-600" />
                  Primary & Middle Wings
                </p>
                <p className="mt-1.5 text-slate-650 leading-relaxed">
                  We also provide comprehensive education for Primary (1st to 5th) & Middle (6th to 10th) wings focusing strictly on foundational mathematics, active bilingual English, and computer science literacy.
                </p>
              </div>
            </div>
          </div>

          {/* Broad Display Content */}
          <div className="lg:col-span-8 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Stream Title and tag */}
              <div className="pb-6 border-b border-slate-800">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">STREAM HIGHLIGHT</span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                  {selectedStream.name}
                </h3>
                <p className="text-sm text-slate-400 italic mt-1.5">
                  "{selectedStream.tagline}"
                </p>
              </div>

              {/* Sub components layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                
                {/* Subject Matrices */}
                <div className="space-y-3">
                  <h4 className="font-display font-semibold text-slate-250 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Core Curricular Subjects
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedStream.subjects.map((sub, idx) => (
                      <div key={idx} className="bg-slate-950 p-2.5 rounded-lg text-xs font-semibold text-slate-300 border border-slate-850">
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Career Guidance Pathways */}
                <div className="space-y-3">
                  <h4 className="font-display font-semibold text-slate-250 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    Target Prep Pathways
                  </h4>
                  <div className="space-y-2">
                    {selectedStream.careerPaths.map((pathName, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-355 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                        <span className="font-medium text-slate-305 text-slate-300">{pathName}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Entry eligibility parameters */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/40 p-4 rounded-xl">
                <div>
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Entry Benchmark Eligibility</h5>
                  <p className="text-xs text-slate-200 font-medium mt-1">{selectedStream.eligibility}</p>
                </div>
                <div className="text-xs text-slate-400">
                  Scholarships accessible for rural sports players.
                </div>
              </div>

            </div>

            {/* Inquire stream link */}
            <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-450 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span>*Board examinations overseen by highly-trained external evaluation examiners.</span>
              <button
                id="explore-stream-inquire"
                onClick={() => {
                  const element = document.getElementById("admissions");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 transition cursor-pointer"
              >
                Inquire About Stream Admissions
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
