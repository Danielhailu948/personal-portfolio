import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { projectsData } from '../data/projectsData.js'
import { itemVariants, sectionVariants } from '../animations/motionVariants.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null)

  const projects = useMemo(() => projectsData, [])

  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="text-center text-4xl font-bold text-zinc-50">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-center text-zinc-300 max-w-2xl mx-auto">
            A selection of projects showcasing my experience building modern web applications.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} onOpen={setActiveProject} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
