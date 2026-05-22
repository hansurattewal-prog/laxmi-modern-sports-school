/**
 * Type declarations and static data for Laxmi Modern Sports Senior Secondary School
 * Location: Village Bichpari, District Sonipat, Haryana
 */

export interface SchoolInfo {
  name: string;
  shortName: string;
  tagline: string;
  established: string;
  affiliation: string;
  address: {
    village: string;
    district: string;
    state: string;
    pin: string;
  };
  leaders: {
    principal: {
      name: string;
      designation: string;
      qualification: string;
      message: string;
      image: string;
    };
    director: {
      name: string;
      designation: string;
      qualification: string;
      message: string;
      image: string;
    };
  };
  contacts: {
    phone1: string;
    phone2: string;
    email: string;
    hours: string;
  };
}

export interface SportDiscipline {
  id: string;
  name: string;
  icon: string;
  description: string;
  coach: string;
  achievements: string[];
  equipment: string[];
}

export interface AcademicStream {
  id: string;
  name: string;
  tagline: string;
  subjects: string[];
  eligibility: string;
  careerPaths: string[];
}

export interface CampusFacility {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "sports" | "academics" | "campus";
}

export interface SchoolStat {
  label: string;
  value: string;
  icon: string;
}

export interface Testimony {
  id: string;
  name: string;
  role: string;
  achievement?: string;
  text: string;
}

export interface AdmissionEnquiry {
  studentName: string;
  parentName: string;
  phone: string;
  classGrade: string;
  sportsInterest: string;
  comments: string;
  date: string;
}

export const SCHOOL_DATA: SchoolInfo = {
  name: "Laxmi Modern Sports Sr. Sec. School",
  shortName: "LMSSS Bichpari",
  tagline: "Empowering Minds, Shaping Champions",
  established: "2008",
  affiliation: "HBSE & CBSE aligned modern curriculum up to Senior Secondary (12th Grade)",
  address: {
    village: "Bichpari",
    district: "Sonipat",
    state: "Haryana",
    pin: "131301"
  },
  leaders: {
    principal: {
      name: "Mrs. Poonam Lather",
      designation: "Principal",
      qualification: "M.A., B.Ed, M.Phil with 15+ Years Academic Leadership Experience",
      message: "At Laxmi Modern Sports School, we believe that education and physical fitness are complementary pillars of a successful life. Our primary focus is to discover and polish raw talent, encouraging students to dream big, work with unwavering discipline, and achieve pinnacle heights. We are proud of our excellent board results and our state-level sporting stars.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    director: {
      name: "Mr. Manjeet Lather",
      designation: "Director",
      qualification: "B.P.Ed, M.P.Ed, National Level Coach & Visionary administrator",
      message: "Infrastructure feeds aspiration. We have built an ecosystem where sports facilities compete with international standards, and scholastic pathways are paved with modern technology. Whether it is Kabaddi, Wrestling, Athletics, or science experiments, we ensure every child in Village Bichpari and Sonipat gets access to the absolute best environment.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  },
  contacts: {
    phone1: "+91 90507 73434",
    phone2: "+91 89304 15079",
    email: "info@laxmimodernschool.com",
    hours: "Summer: 8:00 AM - 2:00 PM | Winter: 8:30 AM - 2:30 PM"
  }
};

export const INSTANT_STATS: SchoolStat[] = [
  { label: "State & National Medals", value: "85+", icon: "Trophy" },
  { label: "Board Exam Pass Rate", value: "100%", icon: "GraduationCap" },
  { label: "Qualified Sports Coaches", value: "8+", icon: "Activity" },
  { label: "Campus Area", value: "5+ Acres", icon: "Map" },
  { label: "Active Students", value: "1200+", icon: "Users" },
  { label: "Sports Disciplines Offered", value: "10+", icon: "Flame" }
];

export const SPORTS_DISCIPLINES: SportDiscipline[] = [
  {
    id: "wrestling",
    name: "Wrestling (कुश्ती)",
    icon: "Shield",
    description: "Traditional and Olympic freestyle wrestling academy with safety-padded wrestling mats, and sand Akhada training pit overseen by SAI qualified coach.",
    coach: "Coach Satish Lather (National Silver Medalist)",
    achievements: [
      "District Champion Trophy (under-14 & under-17)",
      "2 Gold and 3 Bronze medals in Haryana School State Games",
      "Qualifying representation in National School Games"
    ],
    equipment: ["Standard Freestyle Wrestling Rings", "Strength training gymnasium", "Olympic-grade weight pit", "Sauna & recovery steam facilities"]
  },
  {
    id: "kabaddi",
    name: "Kabaddi (कबड्डी)",
    icon: "Users2",
    description: "Pro-Kabaddi standard indoor-style mat fields and outdoor clay grounds. Highly advanced tactics, endurance conditioning, and agility training program.",
    coach: "Coach Manjeet Lather (Director & Former State Captain)",
    achievements: [
      "Haryana State School Kabaddi Champions under-19 (2024)",
      "3 students selected in Sub-Junior National Camp",
      "Bichpari Village Rural Kabaddi Tournament Winners"
    ],
    equipment: ["Synthetic Mat Arena", "Specialized fitness tracks", "Targeted agility ladder equipment", "Modern video analysis suite"]
  },
  {
    id: "athletics",
    name: "Track & Field (एथलेटिक्स)",
    icon: "Zap",
    description: "Sprints, hurdles, middle distance, long jump, and shot put development program with dedicated professional turf tracks and coaching support.",
    coach: "Coach Rajesh Singh (NIS Diploma in Athletics)",
    achievements: [
      "Gold Medal in State 400m hurdles under-17 boys",
      "Silver Medal in State Long Jump under-15 girls",
      "Best School Delegation Trophy at Sonipat Athletics Meet"
    ],
    equipment: ["400-meter clay athletic track", "Professional starting blocks", "Fiberglass high-jump and pole-vault pits", "Laser distance measures"]
  },
  {
    id: "volleyball",
    name: "Volleyball (वॉलीबॉल)",
    icon: "Sun",
    description: "Modern hard courts with professional floodlights for evening sessions. Tactical positioning, spiking power workouts, and fast reaction practices.",
    coach: "Coach Poonam Lather (Mentor) / Asst. Coach Vikram",
    achievements: [
      "Sonipat Inter-School Championship runners-up (2025)",
      "District level winner for boys under-17 category"
    ],
    equipment: ["Two standard volleyball courts with safety netting", "Impact-absorbing turf coaching area", "Automatic serving launcher"]
  },
  {
    id: "cricket",
    name: "Cricket Academy",
    icon: "Award",
    description: "Nurturing young cricketers with standard pitch dimensions, leather balls, safety gear, and professional net practices including bowling machine workouts.",
    coach: "Coach Sandeep Lather (Registered BCCI Level A)",
    achievements: [
      "Selected Under-16 Haryana State Squad inclusion",
      "Winners of Sonipat School Cricket Cup"
    ],
    equipment: ["3 professional practice turf nets", "Automatic bowling machinery", "Premium bowling & batting video playback feedback"]
  },
  {
    id: "yoga",
    name: "Yoga & Meditation (योग)",
    icon: "Activity",
    description: "Ensuring deep cognitive balance, physical flexibility, state level participation, and stress management methods for academic excellence.",
    coach: "Yoga Acharya Savita Lather",
    achievements: [
      "100% participation of primary children in Surya Namaskar series",
      "State Yoga Championship participation - 5 Medals"
    ],
    equipment: ["Peaceful wooden flooring Yoga hall", "Eco-friendly yoga mats", "Symphonic background relaxation system"]
  }
];

export const ACADEMIC_STREAMS: AcademicStream[] = [
  {
    id: "science",
    name: "Science Stream (PCM / PCB)",
    tagline: "Unleash Innovation and Analytical Brilliance",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Physical Education"],
    eligibility: "80%+ Marks in Class 10th Board Exams or specialized scholarship testing",
    careerPaths: ["Engineering (IIT/JEE)", "Medical Sciences (NEET)", "Defense Forces (NDA)", "Pure Sciences & Space Research"]
  },
  {
    id: "commerce",
    name: "Commerce Stream",
    tagline: "Pave the Future of Business and Finance",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics / Informatics Practices", "English"],
    eligibility: "70%+ Marks in Class 10th Board Exams",
    careerPaths: ["Chartered Accountancy (CA)", "Business Management (BBA/MBA)", "Investment Banking", "Corporate Law"]
  },
  {
    id: "arts",
    name: "Arts & Humanities",
    tagline: "Discover Creative Thoughts and Civil Administration",
    subjects: ["History", "Political Science", "Geography", "Physical Education", "English Core", "Hindi Elective"],
    eligibility: "Open Entry & Sports Scholarship Candidates",
    careerPaths: ["Civil Services (UPSC)", "Media & Mass Communication", "Sports Management & Coaching", "Public Relations & Law"]
  }
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: "facility-track",
    title: "5-Acre Sports Facility Hub",
    description: "Expansive tracks, wrestling Akhada, mat rooms, Kabaddi courts, and multi-purpose halls fully integrated into the school schedule.",
    image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=800&q=80",
    category: "sports"
  },
  {
    id: "facility-lab-phy",
    title: "Modern Physics & Chemistry Labs",
    description: "Equipped with specialized equipment, interactive testing arrays, and proper supervision protocols for board level practical exams.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    category: "academics"
  },
  {
    id: "facility-comp",
    title: "Hi-Tech Computer Laboratory",
    description: "Equipped with high-speed internet, smart nodes, full desktop configurations, and early coding curriculums for children.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    category: "academics"
  },
  {
    id: "facility-hostel",
    title: "Sports Hostel & Pure Vegetarian Mess",
    description: "Safe, disciplined hostel rooms for national/state level players. Provides high-protein diet designed by dieticians.",
    image: "https://images.unsplash.com/photo-1555854817-cc0867f8e916?auto=format&fit=crop&w=800&q=80",
    category: "campus"
  },
  {
    id: "facility-transport",
    title: "Safe Transport & CCTV System",
    description: "Extensive bus network servicing Sonipat, Gohana, and 15+ surrounding villages with GPS tracking, cameras, and verified helpers.",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=800&q=80",
    category: "campus"
  },
  {
    id: "facility-library",
    title: "Knowledge Vault (Digital Library)",
    description: "Quiet study zones housing over 5000+ reference volumes, educational novels, competitive exam booklets, and sports manuals.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    category: "academics"
  }
];

export const TESTIMONIALS: Testimony[] = [
  {
    id: "t1",
    name: "Vikram Lather",
    role: "Sports Alumnus",
    achievement: "Gold Medalist at National School Games (Kabaddi)",
    text: "Laxmi Modern Sports School gave me more than just education. Director Manjeet Sir worked with me every morning in the clay pit and refined my grappling holds, while Poonam Ma'am made sure I never fell behind in my CBSE syllabus. Today I play with national pride, and I owe it all to the strict training and loving guidance of LMSSS."
  },
  {
    id: "t2",
    name: "Dr. Ramesh Sheoran",
    role: "Proud Parent",
    achievement: "Parent of Preeti (Science 12th Board - 96.4%)",
    text: "We were worried that joining a sports-centric school would impact our daughter's marks. Instead, she developed great discipline. She woke up early for yoga, scored 96.4% in PCM, and got admission into a top engineering college. Best school in Sonepat district for academic and physical balance."
  },
  {
    id: "t3",
    name: "Anjali Malik",
    role: "Current Class 12 Student",
    achievement: "Wrestling Under-17 State Bronze Medalist",
    text: "The infrastructure here is stellar. The wrestling mats are clean, the coaches are always supporting us, and the hostel provides fresh village milk and ghee, which is essential to gain power. Having dedicated mentors like Poonam Ma'am makes us strive for double glory!"
  }
];

export const SCHOOL_FAQS = [
  {
    q: "Where is the school located?",
    a: "We are situated in Village Bichpari, District Sonipat, Haryana. Our location is central, accessible via our safe and dedicated bus pickup system servicing wide areas of Sonipat, Gohana, and local villages."
  },
  {
    q: "Is there a sports scholarship program?",
    a: "Yes! Director Manjeet Lather runs a sports talent identification drive. Students who have represented at state or national levels in Wrestling, Kabaddi, Athletics, and allied events are granted complete or partial fee concessions, and specialized sports hostel benefits."
  },
  {
    q: "What academic board is the school affiliated with?",
    a: "We operate on HBSE & CBSE aligned modern curriculums. We have a consistent track record of 100% academic pass rates in Senior Secondary (12th Grade) across Science, Commerce, and Arts streams."
  },
  {
    q: "How can parents contact the Principal and Director directly?",
    a: "You can reach out during visiting hours (9:00 AM to 1:00 PM). Parents can also connect via hotlines: Call +91 90507 73434 (Principal Mrs. Poonam Lather) or +91 89304 15079 (Director Mr. Manjeet Lather)."
  },
  {
    q: "What are the school hours?",
    a: "During summers, the school starts at 8:00 AM and ends at 2:00 PM. During winters, normal timing is shifted to 8:30 AM to 2:30 PM. Sports residency coaching takes place in the early morning at 5:30 AM and evening under advanced floodlights."
  }
];
