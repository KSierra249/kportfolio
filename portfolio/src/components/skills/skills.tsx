import { FC } from 'react';

export const Skills: FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C++"
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "HTML/CSS",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MySQL",
        "MongoDB"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git & GitHub",
        "Docker",
        "Jest",
        "Webpack",
        "Nx"
      ]
    },
    {
      title: "Other Skills",
      skills: [
        "Agile Methodologies",
        "UI/UX Design",
        "Problem Solving",
        "Team Collaboration",
        "Critical Thinking"
      ]
    }
  ];

  return (
    <section id="skills" className="w-full py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-light mb-16 text-center tracking-wide" style={{ 
          color: '#2d3748',
          fontWeight: '300'
        }}>
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 mb-6 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-xs font-medium text-gray-600 bg-white border border-gray-200 hover:border-gray-300 transition-colors uppercase tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;