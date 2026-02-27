export default function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8 shadow-sm dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">React + Vite + Tailwind</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">Your Name</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          I build modern web apps with clean UI, solid UX, and scalable code. This starter project is set up
          with a scalable folder structure, ESLint, Prettier, and Tailwind CSS.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            Contact
          </a>
        </div>
      </section>

      <section id="about" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="max-w-3xl text-zinc-600 dark:text-zinc-300">
          Add a short bio here. Talk about what you do, what you’re interested in, and the kinds of problems
          you like solving.
        </p>
      </section>

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
