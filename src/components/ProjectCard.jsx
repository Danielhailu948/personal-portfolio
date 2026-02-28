import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'

export default function ProjectCard({ project, onOpen }) {
  const ref = useRef(null)
  const [isHover, setIsHover] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 220,
    damping: 24,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 220,
    damping: 24,
  })

  const imgX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 220,
    damping: 24,
  })
  const imgY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), {
    stiffness: 220,
    damping: 24,
  })

  const techList = useMemo(() => project.technologies ?? [], [project.technologies])

  function handleMove(e) {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5

    x.set(px)
    y.set(py)
  }

  function handleLeave() {
    setIsHover(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      layoutId={`project-card-${project.id}`}
      className="group relative cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white/5 p-5 transition"
      style={{
        perspective: 900,
      }}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(project)}
      whileHover={{ y: -8, boxShadow: '0px 30px 60px rgba(0,0,0,0.45)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <motion.div
        className="relative rounded-lg overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
      >
        <motion.div
          className="relative h-44 w-full overflow-hidden rounded-lg"
          style={{ x: imgX, y: imgY }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            animate={{ scale: isHover ? 1.05 : 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </motion.div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
          <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {techList.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 shadow-sm transition group-hover:shadow"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <motion.a
              href={project.demo}
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
            >
              Live Demo
            </motion.a>
            <motion.a
              href={project.github}
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-50 hover:bg-white/10"
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
