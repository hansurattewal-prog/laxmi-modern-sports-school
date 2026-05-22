import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Sparkles, Send, Bot, User, Trash2, ArrowRight } from "lucide-react";
import { SCHOOL_DATA } from "../types";

export default function SchoolAIHub() {
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    {
      sender: "bot",
      text: "Namaste! Welcome to Laxmi Modern Sports School's AI Counselor. I can answer questions about admissions, sports scholarship trials, school fee calculation, our village location in Bichpari Sonepat, or contact details of Principal Poonam Lather & Director Manjeet Lather. Ask me anything!"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickQuestion = (question: string) => {
    processResponse(question);
  };

  const processResponse = (userInput: string) => {
    const rawInput = userInput.trim();
    if (!rawInput) return;

    // Add user message to log
    const updatedMessages = [...messages, { sender: "user" as const, text: rawInput }];
    setMessages(updatedMessages);

    // Simulate thinking state
    setTimeout(() => {
      const normalized = rawInput.toLowerCase();
      let replyText = "";

      // Local semantic intelligence logic matching
      if (normalized.includes("principal") || normalized.includes("poonam") || normalized.includes("lather")) {
        replyText = `Our respected Principal is Mrs. Poonam Lather (M.A., B.Ed, M.Phil). She has over 15 years of academic leadership experience in Haryana. You can dial her directly at +91 90507 73434 to discuss children's academics, board performance, or overall discipline.`;
      } else if (normalized.includes("director") || normalized.includes("manjeet") || normalized.includes("90507") || normalized.includes("89304")) {
        replyText = `Our energetic Director is Mr. Manjeet Lather (B.P.Ed, M.P.Ed), a veteran National Level Coach. He leads all sports development trials and akhada mat setups. You can dial him directly at +91 89304 15079. His email contact is info@laxmimodernschool.com. Or principal's number is +91 90507 73434.`;
      } else if (normalized.includes("contact") || normalized.includes("phone") || normalized.includes("mobile") || normalized.includes("number") || normalized.includes("call")) {
        replyText = `You can call us on:
Principal Mrs. Poonam Lather: +91 90507 73434
Director Mr. Manjeet Lather: +91 89304 15079
Email: info@laxmimodernschool.com
Visiting hours are from 9:00 AM to 1:00 PM on working school days.`;
      } else if (normalized.includes("location") || normalized.includes("where") || normalized.includes("address") || normalized.includes("bichpari") || normalized.includes("sonipat") || normalized.includes("sonepat")) {
        replyText = `Laxmi Modern Sports School is located in Village Bichpari, District Sonipat (Sonepat), Haryana - PIN 131301. We provide secure school bus transportation with verified drivers to several nearby villages in Sonepat and Gohana zones.`;
      } else if (normalized.includes("sport") || normalized.includes("game") || normalized.includes("wrestling") || normalized.includes("kabaddi") || normalized.includes("athletic") || normalized.includes("cricket")) {
        replyText = `We specialize as a Modern Sports School! We offer dedicated training academies for:
1. Wrestling (कुश्ती) with safety-padded wrestling mats and clay pit akhada.
2. Kabaddi (कबड्डी) with indoor-specification synthetic mats.
3. Track & Field Athletics on our 5-acre sports ground.
4. Volleyball courts with evening floodlights.
5. Cricket nets with automated ball launchers.
6. Daily Yoga and flexibility classes for mental peace.`;
      } else if (normalized.includes("scholarship") || normalized.includes("free") || normalized.includes("concession")) {
        replyText = `Under Director Manjeet Lather's guidelines, we run an extensive Sports Talent Identification scheme. Students who achieved Medals in State or National Sports Games are eligible for up to 100% tuition fee discount and specialized residency hostel rooms. Apply via our Enquiry Portal!`;
      } else if (normalized.includes("fee") || normalized.includes("cost") || normalized.includes("price") || normalized.includes("admission")) {
        replyText = `Admissions are currently OPEN for the 2026-27 session! 
Tuition ranges around ₹18k/yr for Primary wings, up to ₹32k/yr for Senior Secondary PCM/PCB streams. Full board residency hostels are ₹45k/yr. Significant sports medal scholarships are available. Try our interactive 'Fee Estimator' on this page!`;
      } else if (normalized.includes("academic") || normalized.includes("classes") || normalized.includes("stream") || normalized.includes("science") || normalized.includes("arts") || normalized.includes("commerce")) {
        replyText = `We provide HBSE-aligned classes from 1st to 12th Grade. For Class 11 and 12, scholars can select: 
1. Science Stream (PCM / PCB) with smart labs.
2. Commerce Stream with trade economics guidelines.
3. Arts & Humanities Stream (ideal for Civil Services or Sports Management).`;
      } else {
        replyText = `Thank you for your inquiry about Laxmi Modern Sports School, Bichpari Sonepat! For specific queries about admission trials, pricing, or hostel beds, please give us a direct call at +91 90507 73434 (Poonam Lather) or +91 89304 15079 (Manjeet Lather). We would love to guide you!`;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: replyText }]);
    }, 400);

    setInputVal("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processResponse(inputVal);
    }
  };

  return (
    <section id="ai-counselor" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-blue-400">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            Instant Digital Assistant
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mt-2">
            AI School Counselor Hub
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Have quick questions about our sports matches, class boards, or principal hotlines? Chat with our instant AI assistant trained strictly on LMSSS data.
          </p>
        </div>

        {/* Live Chat Interface */}
        <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[550px]">
          
          {/* Mobile Sidebar Info panel */}
          <div className="md:w-1/3 bg-slate-950/80 p-5 border-b md:border-b-0 md:border-r border-slate-850 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-semibold text-sm text-slate-300 mb-3 flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-blue-400" />
                Quick Discovery Chips
              </h3>
              <p className="text-[11px] text-slate-500 leading-normal mb-5">
                Click a helper query to receive an instant detailed answer from the school's records.
              </p>

              <div className="flex flex-wrap md:flex-col gap-2">
                {[
                  "Where is the school located?",
                  "Contact Poonam Lather Principal",
                  "Call Director Manjeet Lather",
                  "What sports are offered?",
                  "Admissions and school fees",
                  "Sports Merit Scholarships"
                ].map((q, idx) => (
                  <button
                    id={`quick-chip-${idx}`}
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-left bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-300 px-3 py-2 rounded-xl text-[11px] font-semibold flex items-center justify-between group cursor-pointer transition w-auto md:w-full"
                  >
                    <span className="truncate">{q}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Log option */}
            <div className="mt-6 pt-4 border-t border-slate-900 hidden md:flex items-center justify-between text-[10px] text-slate-500">
              <span>LMSSS AI Guide v1.2</span>
              <button
                onClick={() => setMessages([
                  {
                    sender: "bot",
                    text: "Namaste! Welcome back to LMSSS AI Counselor. Ask me about scholarship trials, location, or leadership!"
                  }
                ])}
                className="hover:text-blue-400 transition flex items-center gap-1"
                title="Clear Logs"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear Logs
              </button>
            </div>
          </div>

          {/* Chat Conversational Stage */}
          <div className="flex-1 flex flex-col justify-between bg-slate-900/60">
            
            {/* Conversation list */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4 max-h-[420px]">
              {messages.map((m, index) => (
                <div
                  key={index}
                  className={`flex gap-3 max-w-4/5 animate-in fade-in slide-in-from-bottom-2 duration-150 ${
                    m.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border shadow-xs ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white border-blue-500"
                      : "bg-slate-950 text-blue-400 border-slate-800"
                  }`}>
                    {m.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div className={`p-3.5 rounded-2xl text-xs leading-relaxed font-medium md:text-sm ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white rounded-tr-none font-semibold"
                      : "bg-slate-950/90 text-slate-200 border border-slate-850 rounded-tl-none"
                  }`}>
                    {m.sender === "bot" ? (
                      <div className="whitespace-pre-line">{m.text}</div>
                    ) : (
                      m.text
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Box bar */}
            <div className="p-4 bg-slate-950/80 border-t border-slate-850 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about principal, fee structures, sports..."
                aria-label="AI Search input"
                className="flex-1 bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-hidden p-3 rounded-xl text-xs font-semibold text-slate-200 pl-4 h-11"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                id="ai-send-btn"
                onClick={() => processResponse(inputVal)}
                className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white shrink-0 hover:shadow-lg hover:shadow-blue-600/10 cursor-pointer transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
