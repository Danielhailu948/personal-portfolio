import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <About />

      <ProjectsSection />

      <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="text-zinc-600 dark:text-zinc-300">
          Add your email and social links here.
        </p>
      </section>
    </div>
  )
}
