import { AnimatePresence, motion } from 'framer-motion'
import { overlayVariants, modalVariants } from '../animations/motionVariants.js'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <motion.button
            type="button"
            className="absolute inset-0 bg-black"
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={onClose}
          />

          <motion.div
            layoutId={`project-card-${project.id}`}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-zinc-50 shadow-sm backdrop-blur hover:bg-white/15"
                aria-label="Close modal"
              >
                ✕
              </motion.button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-zinc-50">{project.title}</h3>
              <p className="mt-3 text-zinc-300 leading-relaxed">{project.fullDescription ?? project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {(project.technologies ?? []).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 shadow-sm transition hover:bg-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-50 hover:bg-white/10"
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
