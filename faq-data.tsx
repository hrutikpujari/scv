export interface FaqItem {
  question: string
  answer: string
  list?: string[]
}

export const generalFaqs: FaqItem[] = [
  {
    question: "What sets Shankarrao Chavan Vidyalaya & Junior College apart from other schools in Kamothe?",
    answer:
      "SCV offers a unique combination of quality education, holistic development, and affordability. With our 4.2-star rating from parent reviews, we provide comprehensive education from pre-primary through junior college levels under one roof. Unlike many premium schools in Kamothe that charge high fees, we maintain accessible fee structures while delivering excellence in academics, sports, and cultural activities.",
  },
  {
    question: "Where is SCV located?",
    answer:
      "Our campus is conveniently located in Kamothe, Navi Mumbai, serving students from the surrounding communities.",
  },
  {
    question: "Does SCV offer transportation services?",
    answer:
      "Yes, we provide transportation services covering Kamothe and nearby areas. Please contact our administrative office for specific route information and fees.",
  },
  {
    question: "What are the school hours?",
    answer: "School hours vary by grade level:",
    list: [
      "Pre-primary: 9:00 AM - 12:30 PM",
      "Primary and Middle School: 8:00 AM - 2:30 PM",
      "High School and Junior College: 7:30 AM - 2:00 PM",
    ],
  },
  {
    question: "How can I schedule a campus visit?",
    answer:
      "Campus visits can be arranged by contacting our admissions office at [admissions contact number] or emailing admissions@scv.org.in. We recommend scheduling visits on weekdays between 9:00 AM and 2:00 PM to observe a typical school day.",
  },
]

export const preSchoolFaqs: FaqItem[] = [
  {
    question: "What is the admission age requirement for pre-primary classes?",
    answer:
      "For admission to pre-primary, children should be at least 3 years old by June 30th of the academic year. For Kindergarten and Grade 1, the corresponding age requirements apply (4-5 years for KG, 5-6 years for Grade 1).",
  },
  {
    question: "What is the fee structure for pre-primary to Grade 1?",
    answer: "Our pre-primary to Grade 1 program has the following fee structure:",
    list: [
      "Tuition Fee: ₹12,000 (₹1,000 × 12)",
      "Term Fee: ₹2,000 (₹1,000 × 2)",
      "Other Fee: ₹6,000 (₹3,000 × 2)",
      "Total Annual Fee: ₹20,000",
    ],
  },
  {
    question: "What is the teacher-to-student ratio in pre-primary classes?",
    answer:
      "We maintain a low teacher-to-student ratio in our pre-primary classes, significantly better than the 25:1 or 30:1 ratios seen at some competitor schools. This ensures each child receives the attention and care they need during these formative years.",
  },
  {
    question: "Do you have naptime or extended day options for pre-primary students?",
    answer:
      "While we don't have a formal naptime program, we do structure the day with appropriate rest periods. Extended day options are available for working parents until 3:30 PM for an additional fee.",
  },
  {
    question: "What is your approach to early literacy and numeracy?",
    answer:
      "Our early childhood program focuses on developing foundational skills through play-based learning, structured activities, and age-appropriate materials. We introduce pre-reading, pre-writing, and basic mathematical concepts in a supportive environment that makes learning enjoyable.",
  },
  {
    question: "How do you handle separation anxiety in young children?",
    answer:
      "Our experienced early childhood educators implement a gradual adjustment period at the beginning of the school year. Parents are welcome to stay for shorter periods during the first few days, and our teachers are trained to provide emotional support to help children transition comfortably.",
  },
  {
    question: "Is there a uniform for pre-primary students?",
    answer:
      "Yes, we have a comfortable and age-appropriate uniform for pre-primary students. Details about uniform requirements are provided upon admission.",
  },
  {
    question: "Do you provide meals or snacks?",
    answer:
      "Students are required to bring their own healthy snacks and lunch. We provide guidelines on nutritious options and maintain a nut-free environment for student safety.",
  },
]

export const schoolFaqs: FaqItem[] = [
  {
    question: "What curriculum does SCV follow?",
    answer:
      "SCV follows a comprehensive curriculum aligned with national educational standards. Our program emphasizes strong fundamentals while encouraging critical thinking, problem-solving, and creativity.",
  },
  {
    question: "What is the fee structure for different grade levels?",
    answer:
      "Refer to Admissions page for fee details. These rates are competitive compared to other premium schools in Kamothe while maintaining educational excellence.",
  },
  {
    question: "How are students assessed throughout the year?",
    answer:
      "We follow a continuous and comprehensive evaluation system with a combination of formative and summative assessments. This includes regular class participation, project work, unit tests, and term examinations to provide a holistic view of student progress.",
  },
  {
    question: "What extracurricular activities are available?",
    answer: "SCV offers a wide range of extracurricular activities including:",
    list: [
      "Sports: Cricket, football, basketball, volleyball, athletics, chess, table tennis",
      "Cultural: Dance, music, drama, art and craft",
      "Academic: Debate, quiz, robotics, science club, math club",
      "Community service and environmental awareness programs",
    ],
  },
  {
    question: "How do you support students who need additional academic help?",
    answer:
      "We provide remedial classes for students who need extra support in specific subjects. Our teachers are available for consultation during designated hours, and we maintain communication with parents to address any learning challenges promptly.",
  },
  {
    question: "What is your homework policy?",
    answer:
      "Homework is assigned to reinforce classroom learning and develop independent study habits. The amount increases gradually with grade level but is balanced to avoid overwhelming students. We emphasize quality over quantity in homework assignments.",
  },
  {
    question: "How do you handle discipline issues?",
    answer:
      "We follow a positive discipline approach focused on teaching appropriate behavior rather than punishment. Clear expectations, consistent consequences, and open communication with parents help create a respectful learning environment.",
  },
  {
    question: "What technology resources are available to students?",
    answer:
      "Students have access to computer labs, smart classrooms, and digital learning resources appropriate to their grade level. Technology is integrated into the curriculum to enhance learning while teaching responsible digital citizenship.",
  },
  {
    question: "Do you offer language options beyond English?",
    answer:
      "Yes, students learn Hindi and Marathi as additional languages. These are taught with an emphasis on functional communication skills as well as literary appreciation.",
  },
]

export const juniorCollegeFaqs: FaqItem[] = [
  {
    question: "What streams do you offer at the Junior College level?",
    answer:
      "We offer Science and Commerce streams for Grades 11-12, with specialized subject combinations to prepare students for various career paths and competitive examinations.",
  },
  {
    question: "What is the fee structure for Junior College?",
    answer:
      "Our Junior College fee structure is competitive with other institutions in Kamothe. Detailed fee information is provided during the admission process and varies slightly based on the chosen stream and subject combinations.",
  },
  {
    question: "How do students gain admission to Junior College?",
    answer:
      "Admission to our Junior College is primarily based on 10th standard board examination results. We announce cut-off percentages after the board results are declared. Students need to submit their application with their mark sheet, and admissions are granted based on merit and availability of seats.",
  },
  {
    question: "What support do you provide for competitive exam preparation?",
    answer:
      "We offer additional coaching and preparation for various competitive examinations including JEE, NEET, CET, and others. Our faculty provides specialized guidance, practice tests, and study materials to help students succeed in these challenging examinations.",
  },
  {
    question: "What is your track record for student placements in higher education?",
    answer:
      "Our students have consistently secured admissions in reputable colleges and universities across India. Many of our science stream students qualify for engineering and medical programs, while our commerce students excel in BBA, BCom, CA, and other professional courses.",
  },
  {
    question: "Do you provide career counseling for Junior College students?",
    answer:
      "Yes, we have dedicated career counselors who guide students regarding higher education options, entrance examination strategies, and career planning. We also organize career fairs and alumni interaction sessions to provide real-world perspectives.",
  },
  {
    question: "How do you prepare students for university academics?",
    answer:
      "Beyond the prescribed syllabus, we focus on developing research skills, analytical thinking, time management, and independent learning strategies that are essential for success in higher education.",
  },
  {
    question: "Are there leadership opportunities for Junior College students?",
    answer:
      "Junior College students can take on various leadership roles including student council positions, club leadership, mentoring younger students, and organizing events. These opportunities help develop important soft skills and strengthen college applications.",
  },
  {
    question: "Do you organize industrial visits or educational trips?",
    answer:
      "Yes, we organize relevant industrial visits, educational field trips, and expert lectures to provide practical exposure and real-world connections to classroom learning.",
  },
  {
    question: "What facilities are specifically available for Junior College students?",
    answer:
      "Junior College students have access to specialized laboratories, a dedicated library section with advanced reference materials, career guidance cell, and study areas designed for collaborative and independent learning.",
  },
]

export const admissionsFaqs: FaqItem[] = [
  {
    question: "When does the admission process begin for the new academic year?",
    answer:
      "Admissions typically begin in [Month] for the following academic year. We recommend applying early as seats are limited and filled on a first-come, first-served basis for most grade levels.",
  },
  {
    question: "What documents are required for admission?",
    answer: "Required documents vary by grade level but generally include:",
    list: [
      "Completed application form",
      "Birth certificate",
      "Previous school report cards/mark sheets",
      "Transfer certificate (for students changing schools)",
      "Passport-size photographs",
      "Proof of residence",
      "Parents' identification proof",
    ],
  },
  {
    question: "Is there an entrance test?",
    answer:
      "For Pre-Primary to Grade 1, we conduct a simple interaction to assess developmental readiness rather than a formal test. For Grades 2-10, there is a basic assessment of age-appropriate academic skills. Junior College admissions are primarily based on 10th board examination results.",
  },
  {
    question: "Do you have seats reserved for siblings of current students?",
    answer:
      "While we don't formally reserve seats, siblings of current students receive preference in the admission process, provided they meet our basic admission criteria.",
  },
  {
    question: "Can students join mid-session?",
    answer:
      "Mid-session admissions are possible subject to seat availability and the student's ability to integrate into the ongoing academic program. These are evaluated on a case-by-case basis.",
  },
  {
    question: "Do you offer any scholarships or financial aid?",
    answer:
      "We offer merit scholarships for outstanding academic achievers and limited financial aid for deserving students with demonstrated need. Please contact our administrative office for current scholarship opportunities.",
  },
]

export const parentInvolvementFaqs: FaqItem[] = [
  {
    question: "How does SCV communicate with parents?",
    answer: "We maintain regular communication through:",
    list: [
      "Digital communication platform/app for day-to-day updates",
      "Scheduled parent-teacher meetings (once per term)",
      "Progress reports and report cards",
      "Email notifications for important announcements",
      "School website and social media updates",
    ],
  },
  {
    question: "Are there opportunities for parent involvement?",
    answer: "We encourage parent involvement through:",
    list: [
      "Parent volunteer programs",
      "Parent-teacher association",
      "Guest lectures by parents with specialized expertise",
      "Participation in school events and celebrations",
      "Parent workshops and seminars",
    ],
  },
  {
    question: "How often are parent-teacher meetings held?",
    answer:
      "Formal parent-teacher meetings are scheduled once per term. However, parents can request additional meetings with teachers or administrators as needed by appointment.",
  },
  {
    question: "How can parents address concerns or provide feedback?",
    answer: "Parents can share concerns or feedback through:",
    list: [
      "Direct communication with the relevant teacher",
      "Scheduled meetings with coordinators or principal",
      "Email to the dedicated parent communication channel",
      "Feedback forms distributed periodically",
    ],
  },
]
