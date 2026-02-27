import TechCube from '../components/TechCube.jsx'

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-purple-400 font-semibold tracking-widest text-sm uppercase">ABOUT ME</div>

            <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-zinc-50 leading-tight">
              Passionate Frontend Developer
            </h2>

            <div className="mt-6 text-zinc-300 leading-relaxed space-y-4">
              <p>
                I am a frontend developer focused on building modern, responsive web applications. I specialize in
                React and enjoy creating clean, user-friendly interfaces that deliver great user experiences.
              </p>
              <p>
                I am passionate about learning new technologies, improving my development skills, and building
                real-world projects that solve meaningful problems.
              </p>
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold text-zinc-50">Core Technologies</div>
              <div className="flex flex-wrap gap-3 mt-6">
                {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-200 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <TechCube />
          </div>
        </div>
      </div>
    </section>
  )
}
