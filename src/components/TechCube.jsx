import { motion } from 'framer-motion'

const faces = [
  { label: 'React', transform: 'translateZ(calc(var(--cube) / 2))' },
  { label: 'Tailwind', transform: 'rotateY(180deg) translateZ(calc(var(--cube) / 2))' },
  { label: 'JavaScript', transform: 'rotateY(-90deg) translateZ(calc(var(--cube) / 2))' },
  { label: 'Vite', transform: 'rotateY(90deg) translateZ(calc(var(--cube) / 2))' },
  { label: 'Framer Motion', transform: 'rotateX(90deg) translateZ(calc(var(--cube) / 2))' },
  { label: 'Git', transform: 'rotateX(-90deg) translateZ(calc(var(--cube) / 2))' },
]

export default function TechCube() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-56 w-56 rounded-full bg-gradient-to-br from-purple-500/30 to-sky-500/20 blur-3xl" />

      <div className="relative" style={{ perspective: '900px' }}>
        <motion.div
          className="relative"
          style={{
            width: 'var(--cube)',
            height: 'var(--cube)',
            transformStyle: 'preserve-3d',
            ['--cube']: 'clamp(120px, 18vw, 180px)',
          }}
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          whileHover={{ scale: 1.05 }}
        >
          {faces.map((face) => (
            <div
              key={face.label}
              className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/40 text-sm font-semibold text-zinc-100 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md"
              style={{ transform: face.transform }}
            >
              <span className="select-none tracking-wide">{face.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.25)]" />
      </div>
    </div>
  )
}
