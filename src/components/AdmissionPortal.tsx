import React, { useState, useEffect } from "react";
import { Calculator, Download, Phone, CheckCircle2, User, Landmark, ShieldAlert, Award } from "lucide-react";
import { AdmissionEnquiry, SCHOOL_DATA } from "../types";

export default function AdmissionPortal() {
  const [studentName, setStudentName] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [classGrade, setClassGrade] = useState("Class 11 - Senior Sec");
  const [sportsInterest, setSportsInterest] = useState("Wrestling");
  const [comments, setComments] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmissionID, setLastSubmissionID] = useState("");
  const [myInquiries, setMyInquiries] = useState<AdmissionEnquiry[]>([]);

  // Fee Calculator State
  const [calcGrade, setCalcGrade] = useState("Senior"); // Primary, Middle, High, Senior
  const [calcStay, setCalcStay] = useState("Day"); // Day, Residential
  const [hasScholarship, setHasScholarship] = useState(false);

  // Load inquiries from localStorage
  useEffect(() => {
    const historical = localStorage.getItem("lmsss_enquiries");
    if (historical) {
      try {
        setMyInquiries(JSON.parse(historical));
      } catch (err) {
        console.error(err);
      }
    }
  }, [isSubmitted]);

  // Form submit handler
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !parentName || !phone) {
      alert("Please enter Name, Parent Name and Mobile Number!");
      return;
    }

    const newEnquiry: AdmissionEnquiry = {
      studentName,
      parentName,
      phone,
      classGrade,
      sportsInterest,
      comments,
      date: new Date().toLocaleDateString()
    };

    const updated = [...myInquiries, newEnquiry];
    localStorage.setItem("lmsss_enquiries", JSON.stringify(updated));
    setMyInquiries(updated);

    const generatedRegID = "LMSSS-" + Math.floor(100000 + Math.random() * 900000);
    setLastSubmissionID(generatedRegID);
    setIsSubmitted(true);

    // Reset fields
    setStudentName("");
    setParentName("");
    setPhone("");
    setComments("");
  };

  // Fee computation logic
  const calculateFee = () => {
    let tutionFee = 32000; // Base Senior annual tuition
    if (calcGrade === "Primary") tutionFee = 18000;
    else if (calcGrade === "Middle") tutionFee = 24000;
    else if (calcGrade === "High") tutionFee = 28000;

    let stayFee = 0;
    if (calcStay === "Residential") {
      stayFee = 45000; // Hostel & Mess annual charge
    }

    const subTotal = tutionFee + stayFee;
    let discount = 0;
    if (hasScholarship) {
      discount = tutionFee * 0.8; // 80% discount on tuition fee for state medallists!
    }

    const total = subTotal - discount;

    return {
      tution: tutionFee,
      lodge: stayFee,
      deduction: discount,
      netTotal: total
    };
  };

  const calculated = calculateFee();

  return (
    <section id="admissions" className="py-20 bg-white relative overflow-hidden">
      {/* Background radial details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">REGISTRATIONS OPEN (2026-2027)</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2">
            Admission Portal
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Take your first step toward balancing intellectual limits and physical medal mastery. Fill our online inquiry form or calculate an estimated annual fee structure instantly.
          </p>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Online Enquiry Intake Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="font-display font-black text-xl text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-blue-600 rounded"></span>
              Online Admission Inquiry Form
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-5 bg-green-50 border border-green-200 text-green-800 rounded-xl space-y-3 animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Inquiry Registered Successfully!
                </div>
                <p className="text-xs text-green-700 leading-relaxed">
                  Your registration ID is <strong className="font-semibold font-mono bg-green-100 px-1.5 py-0.5 rounded text-green-905">{lastSubmissionID}</strong>. Our counselors, guided by Principal Poonam Lather, will call you on your registered number in the next 24 business hours.
                </p>
                <div className="flex justify-start">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-green-700 hover:text-green-900 underline flex items-center gap-1 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Student's Full Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-hidden p-3 rounded-lg text-xs font-medium pl-10 text-slate-800"
                      placeholder="e.g., Aman Lather"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      required
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Parent / Guardian's Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-hidden p-3 rounded-lg text-xs font-medium pl-10 text-slate-800"
                      placeholder="e.g., Satbeer Lather"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      required
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Mobile Number *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-hidden p-3 rounded-lg text-xs font-medium pl-10 text-slate-800"
                      placeholder="90507XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={10}
                      required
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Grade Class Seeking Admission *</label>
                  <select
                    className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-hidden p-3 rounded-lg text-xs font-semibold text-slate-800"
                    value={classGrade}
                    onChange={(e) => setClassGrade(e.target.value)}
                  >
                    <option>Class 1 - Primary Wing</option>
                    <option>Class 6 - Middle Wing</option>
                    <option>Class 9 - Under 15 Athletic</option>
                    <option>Class 11 - Senior Sec Science</option>
                    <option>Class 11 - Senior Sec Commerce</option>
                    <option>Class 11 - Senior Sec Arts</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Primary Sports Academy Interest</label>
                <select
                  className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-hidden p-3 rounded-lg text-xs font-semibold text-slate-800"
                  value={sportsInterest}
                  onChange={(e) => setSportsInterest(e.target.value)}
                >
                  <option>Wrestling (कुश्ती)</option>
                  <option>Kabaddi (कबड्डी)</option>
                  <option>Athletics (Track & Field)</option>
                  <option>Volleyball Arena</option>
                  <option>Cricket Club</option>
                  <option>Yoga & Flexibilities</option>
                  <option>None (Academics Only)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Comments or Previous Achievements</label>
                <textarea
                  className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-hidden p-3 rounded-lg text-xs font-medium text-slate-800 h-24"
                  placeholder="e.g., Represented Sonipat in state wrestling under-14, achieved silver medal in inter-school 100m race"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>

              <button
                id="sumbit-enquiry-btn"
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-display font-semibold py-3.5 rounded-xl text-center shadow-lg hover:shadow-xl transition duration-200 cursor-pointer text-xs uppercase"
              >
                Submit Form to Admin Board
              </button>
            </form>

            {/* List Submitted Applications */}
            {myInquiries.length > 0 && (
              <div className="mt-8 border-t border-slate-200 pt-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <span>Your Submitted Inquiries ({myInquiries.length})</span>
                </h4>
                <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                  {myInquiries.map((enq, index) => (
                    <div key={index} className="bg-white border border-slate-100 rounded-xl p-3 flex justify-between items-center text-xs">
                      <div>
                        <div className="font-bold text-slate-905">{enq.studentName}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Grade: {enq.classGrade} | Sport: {enq.sportsInterest}</div>
                      </div>
                      <div className="text-right space-y-1">
                        <span className="bg-blue-50 text-blue-800 text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                          In Review
                        </span>
                        <div className="text-[9px] text-slate-400 font-medium">{enq.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Block: Interactive Fee Estimator */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-black text-xl text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-400" />
                Fee Breakdown Estimator
              </h3>

              <div className="space-y-4">
                {/* Selector 1: Grade Wing */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">School Wing Level</label>
                  <div className="grid grid-cols-4 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    {["Primary", "Middle", "High", "Senior"].map((grade) => (
                      <button
                        id={`calc-wing-${grade}`}
                        key={grade}
                        onClick={() => setCalcGrade(grade)}
                        className={`py-2 text-[10px] sm:text-xs font-bold rounded-lg uppercase tracking-wider transition ${
                          calcGrade === grade ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selector 2: Day Scholar vs Residential */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Enlist Accomodation</label>
                  <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    {[
                      { id: "Day", label: "Day Scholar (Local)" },
                      { id: "Residential", label: "Sports Residency Hostel" }
                    ].map((stay) => (
                      <button
                        id={`calc-accom-${stay.id}`}
                        key={stay.id}
                        onClick={() => setCalcStay(stay.id)}
                        className={`py-2 text-[10px] sm:text-xs font-bold rounded-lg uppercase tracking-wider transition ${
                          calcStay === stay.id ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {stay.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selector 3: Sports Scholarship Checkbox slider */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-850 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-bold text-xs text-white flex items-center gap-1.5 uppercase tracking-wide">
                      <Award className="w-4 h-4 text-blue-400" />
                      State/National Medalist Category
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-1">Concedes 80% discount on academic tuition fee structures!</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasScholarship}
                      onChange={() => setHasScholarship(!hasScholarship)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-6 bg-slate-800 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              {/* Fee breakdown list display */}
              <div className="border-t border-slate-800 mt-6 pt-6 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Regular Tuition Fee:</span>
                  <span className="text-slate-200">₹{calculated.tution.toLocaleString()}/yr</span>
                </div>
                {calculated.lodge > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Hostel & Diarian Mess Charges:</span>
                    <span className="text-slate-200">+ ₹{calculated.lodge.toLocaleString()}/yr</span>
                  </div>
                )}
                {calculated.deduction > 0 && (
                  <div className="flex justify-between items-center text-green-400 bg-green-950/20 px-2 py-1 rounded">
                    <span>Sports Merit Scholarship Disc.:</span>
                    <span>- ₹{calculated.deduction.toLocaleString()}/yr</span>
                  </div>
                )}
                <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-sm font-semibold text-white">
                  <span className="font-display font-medium">Estimated Net Fee:</span>
                  <span className="font-display font-extrabold text-base text-blue-400">
                    ₹{calculated.netTotal.toLocaleString()}
                    <span className="text-[10px] text-slate-400 font-normal"> / yr</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Warning badge disclaimer */}
            <div className="mt-6 pt-4 border-t border-slate-800 bg-blue-950/30 border border-blue-900/40 p-3 rounded-lg flex items-start gap-2.5 text-[10px] text-blue-300 leading-relaxed">
              <ShieldAlert className="w-4.5 h-4.5 text-blue-400 shrink-0" />
              <p>Estimates are approximate. School uniforms, final competitive test guides, transport maps, and individual dietary supplements are charged on actuals. Full prospectus verified by Mrs. Poonam Lather.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
