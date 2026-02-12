import { type FC, useState } from 'react';
import IMG1 from "../images/Screenshot 2025-05-05 013711.png";
import IMG4 from "../images/fnbologo.jpg";
import IMG3 from "../images/firespring.png";
import IMG2 from "../images/nebraska-n.jpg";

export const Experience: FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'projects'>('experience');
  const [selectedExperience, setSelectedExperience] = useState<{
    title: string;
    role: string;
    duration: string;
    details: string;
    image: string;
    overview: string;
    contributions: string[];
    techStack: string[];
  } | null>(null);

  const projects = [
    {
      title: "AuditAI",
      description: "December 2025",
      overview: "A full stack vulnerability detection app that uses OpenAI, Claude, and CodeBERT to detect and classify code vulnerabilities, score severity, highlight affected lines, and suggest fixes.",
      contributions: [
        "Developed backend APIs and evaluation pipelines to integrate LLM services, validate responses with Zod, and ensure consistent data flow to the frontend.",
        "Implemented backend model evaluation logic using predefined test scenarios, computing precision, accuracy, recall, TP, FP, and FN to assess model reliability.",
        "Collaborated on UI design decisions using Figma to create intuitive user interfaces and improve user experience."
      ],
      techStack: ["React", "Node.js", "Claude AI", "OpenAI", "codeBERT", "Zod", "Figma" ]
    },
    {
      title: "Personal Diary App",
      description: "April 2025",
      techStack: ["React", "Express","TypeScript", "MySQL", "Figma", "Firebase"],
      overview: "A secure journaling web application that allows users to create, view, and manage personal diary entries, set their mood, meals, and activities throughout the day.",
      contributions: [
        "Implemented the backend using Express.js, TypeScript, and Firebase to build CRUD endpoints, accessors, event handlers, custom types, and user authentication for secure journal entry management.",
        "Designed the overall software architecture, selected core technologies, and delegated implementation tasks to other developers.",
        "Helped design and the review the user interface using Figma to ensure engaging and user-friendly experience."
      ]
    },
    {
      title: "Zulip (Open Source Contribution)",
      description: "April 2024",
      repoLink: "https://github.com/zulip/zulip",
      techStack: ["Django", "Python", "TypeScript"],
      overview: "An open-source organized team chat app with unique topic-based threading that combines the best of email and chat to make remote work productive and delightful.",
      contributions: [
        "Implemented backend features in Django and Python, including an up-vote system and improved group chat name visibility",
        "Collaborated in a Scrum-based team, participating in daily stand-ups and retrospectives to manage tasks and improve team workflow."
      ]
    },
    {
      title: "World Travel App",
      description: "May 2023", 
      techStack: ["Python", "Kivy", "MySQL"],
      overview: "An application that users can save their flights and keep information about the pilots, airports, and weather.",
      contributions: [
        "Used Kivy to create the GUI that supports actions such as adding and editing flights, checking the weather of location, and seeing available airports.",
        "Utilized Python to implement the functionality between the GUI, database, and API, so all the components could interact with each other"
      ]
    },
    {
      title: "Burn Plan App",
      description: "December 2022",
      techStack: ["Java"],
      overview: "A burn plan evaluator using Java, simulating common factors considered for controlled burns",
      contributions: [
        "Implemented functionality to check the weather of a specific location using an API key, providing users with weather information for their desired time.",
        "Utilized inheritance and other OOP practices to create various burn plans, enhancing code re-usability and maintainability."
      ]
    }
  ];
  const experiences = [
     {
      title: "First National Bank of Omaha",
      role: "Software Developer",
      duration: "Sep. 2025 – Present",
      image: IMG4,
      details: "Developed secure banking solutions and optimized backend services for better performance.",
      overview: "Working with a team of 4 developers on building a banking mobile application to improve financial literacy for all age groups.",
      contributions: [
        "Developed all backend services and logic using Spring Boot to handle user registration, transaction management, and all learning modules components.",
        "Collaborated on UI design decisions for child, teen, and adult financial literacy learning modules, ensuring usability and clarity across age groups.",
        "Hooked up the backend services to the frontend components for all learning modules, user registration, and transaction management processes."
      ],
      techStack: ["Java", "Spring Boot", "React", "Axios", "Figma"]
    },
    {
      title: "Firespring",
      role: "Software Engineering Intern",
      duration: "May 2024 – Present",
      image: IMG3,
      details: "Worked on developing scalable web applications and contributed to the design of user-friendly interfaces.",
      overview: "Currently at Firespring, I work with a team of developers to refine and add new features to one of Firespring's non-profit web applications.", 
      contributions: [
        "Leveraged and redesigned AWS Lambda functions to better inform the team about the status alerts on production and beta cloud resources.",
        "Improved application performance and maintainability by implementing new features, refactoring and updating legacy code, and writing RSpec tests.",
        "Developed an AI chatbot to assist users with common inquiries about St. Baldrick's Foundation event planning and fundraising activities using Claude API."
      ],
      techStack: ["Ruby on Rails", "Ruby","PHP", "AWS", "JavaScript", "HTML", "SASS", "Claude"]
    },
    {
      title: "PrivyAI",
      role: "Software Developer",
      duration: "Sep. 2024 – May 2025",
      image: IMG1,
      details: "Implemented AI-driven features to enhance data privacy and security in enterprise applications.",
      overview: "Worked with a startup team to develop a med-tech application utilizing AI technologies to save time for physical therapist during their sessions with patients.",
      contributions: [
        "Developed an MVP leveraging Whisper AI for transcription and AWS Bedrock to produce EHR-compliant SOAP notes for physical therapists.",
        "Prompt-engineered the Haiku model to generate standard SOAP notes from recorded sessions by prompting for each of the standard sections",
        "Implemented the application endpoints, event handlers, and accessors using Express.js and TypeScript to support core functionality."
      ],
      techStack: ["React", "Express", "TypeScript", "AWS", "Whisper", "Gen. AI"]
    },
    {
      title: "University of Nebraska - Lincoln",
      role: "Game Developer Intern",
      duration: "Feb. 2024 – May 2024",
      image: IMG2,
      details: "Worked on developing scalable web applications and contributed to the design of user-friendly interfaces.",
      overview: "Worked with a team to design an interactive, educational game that teaches younger students about the importance of water use and how it impacts aquifers.", 
      contributions: [
        "Designed and presented visual layouts of the game to stakeholders, facilitating clear communication and alignment on design concepts and project objectives.",
        "Prototyped and refined game mechanic ideas through feedback and iteration to strengthen player engagement."
      ],
      techStack: [ "Figma", "Game Design", "Prototyping"]
    }
  ];

  return (
    <section
      id="experience"
      className="w-full py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-light mb-16 text-center tracking-wide" style={{ 
          color: '#2d3748',
          fontWeight: '300'
        }}>
          Experience
        </h2>

        <div className="flex justify-center mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-12">
              <button
                onClick={() => setActiveTab('experience')}
                className={`py-4 px-2 border-b-2 font-medium text-sm tracking-wide transition-colors ${
                  activeTab === 'experience'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                EXPERIENCE
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-4 px-2 border-b-2 font-medium text-sm tracking-wide transition-colors ${
                  activeTab === 'projects'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                PROJECTS
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-start border-l-2 border-gray-200 pl-8 py-6 hover:border-gray-400 transition-colors cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-12 h-12 rounded object-cover flex-shrink-0 mt-1"
                  />
                  <div className="ml-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-gray-600 font-medium">{exp.role}</p>
                      </div>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap ml-4">{exp.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      className="text-sm text-gray-500 font-medium hover:text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExperience(exp);
                      }}
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6 hover:border-gray-300 cursor-pointer transition-colors"
                  onClick={() => setSelectedProject(project.title)}
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Learn more →
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}>
          <div
            className="bg-white p-6 shadow-xl max-w-xl w-full max-h-[80vh] overflow-y-auto border border-gray-100"
          >
            <div className="flex items-start justify-between mb-8">
              <h4 className="text-3xl font-medium text-gray-900">
                {selectedProject}
              </h4>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {projects.find((project) => project.title === selectedProject)?.description}
              </span>
            </div>
            
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Overview</h5>
            <p className="text-gray-600 mb-6">
              {projects.find((project) => project.title === selectedProject)?.overview}
            </p>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">Contributions</h5>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              {projects.find((project) => project.title === selectedProject)?.contributions?.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {projects.find((project) => project.title === selectedProject)?.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-8">
              {projects.find((project) => project.title === selectedProject)?.repoLink && (
                <a
                  href={projects.find((project) => project.title === selectedProject)?.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors font-medium text-sm tracking-wide uppercase"
                >
                  View Repository
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      {selectedExperience && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}>
          <div
            className="bg-white p-6 shadow-xl max-w-xl w-full max-h-[80vh] overflow-y-auto border border-gray-100"
          >
            <div className="flex items-start justify-between mb-8">
              <h4 className="text-3xl font-medium text-gray-900">
                {selectedExperience.title}
              </h4>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                onClick={() => setSelectedExperience(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {selectedExperience.role}
              </span>
            </div>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">Overview</h5>
            <p className="text-gray-600 mb-6">
              {selectedExperience.overview}
            </p>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">Contributions</h5>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              {selectedExperience.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {selectedExperience?.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;