export default function Skills() {
  const skills = [
    {
      title: "Front-End",
      items: ["React", "Tailwind CSS", "HTML", "CSS"],
      gradient: "from-cyan-400/20 to-blue-500/20",
      border: "border-cyan-400/30",
    },
    {
      title: "Design",
      items: ["Figma", "Affinity", "Photoshop"],
      gradient: "from-purple-400/20 to-pink-500/20",
      border: "border-purple-400/30",
    },
    {
      title: "Tools",
      items: ["Git", "Vite"],
      gradient: "from-emerald-400/20 to-teal-500/20",
      border: "border-emerald-400/30",
    },
  ];

  return (
    <section className="w-full pt-16 pb-10 px-1">
      <div className="max-w-7xl mx-auto px-6 md:px-7">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:-ml-5">
          Skills & Tech Stack
        </h2>
        <p className="text-white/60 mb-10 md:-ml-5">
          Tools and technologies I actually use and learn.
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 md:-ml-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border ${skill.border}
              bg-linear-to-br ${skill.gradient}
              backdrop-blur-xl p-6 w-[369px]
              hover:scale-[1.02] transition-transform duration-300`}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm
                    bg-white/10 text-white
                    border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}