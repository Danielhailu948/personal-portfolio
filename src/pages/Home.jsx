import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <About />

      <section id="projects" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">(Tailwind sanity check)</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {['Project One', 'Project Two'].map((title) => (
            <article
              key={title}
              className="rounded-xl border border-zinc-200 p-5 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Short description. Replace with real projects and add links.
              </p>
              <div className="mt-4 flex gap-3 text-sm">
                <a className="font-medium text-indigo-600 hover:underline dark:text-indigo-400" href="#">
                  Live
                </a>
                <a className="font-medium text-indigo-600 hover:underline dark:text-indigo-400" href="#">
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="text-zinc-600 dark:text-zinc-300">
          Add your email and social links here.
        </p>
      </section>
    </div>
  )
}
