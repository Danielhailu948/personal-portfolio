import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <About />

      <ProjectsSection />

      <ContactSection />
    </div>
  )
}
