export default function SkillsSection() {
    const skills = [
      { name: "Microsoft Office", level: 85 },
      { name: "Analisis", level: 70 },
      { name: "Komunikasi", level: 90 },
      { name: "Visuall Foxpro", level: 75 },
    ];
  
    return (
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-black font-bold text-3xl mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 font-semibold">{skill.name}</span>
                <span className="text-gray-800 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  