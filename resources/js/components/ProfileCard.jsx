export default function ProfileCard({
  name = "Matthew",
  subtitle = "Using <AnimatedContent />",
  image,
  width = "320px",
  height = "210px",
  accentColor = "blue",
  href = "#",
}) {
  const accentMap = {
    purple: "from-purple-500/60 via-fuchsia-500/30",
    blue: "from-sky-500/0 via-blue-500/30",
    pink: "from-pink-500/60 via-rose-500/30",
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ width, height }}
      className={`group relative rounded-2xl p-px
        bg-linear-to-br ${accentMap[accentColor]} to-transparent
        transition-all duration-300 hover:scale-[1.03]`}
    >
      {/* Card Body */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden">

        {/* Background Image */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b
                        from-black/20 via-black/40 to-black/80" />

        {/* Header highlight */}
        <div className="absolute top-0 left-0 right-0 h-16
                        bg-linear-to-b from-white/25 to-transparent" />
                        
        {/* Bottom content */}
        <div className="absolute bottom-3 left-4">
          <h2 className="text-xl font-bold text-white pl-2">
            {name}
          </h2>
          <p className=" text-white/70 pb-2 pl-2">
            {subtitle}
          </p>
        </div>

      </div>
    </a>
  )
}
