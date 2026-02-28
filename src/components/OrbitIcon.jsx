import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'

export default function OrbitIcon({
  Icon,
  href,
  label,
  x,
  y,
  onHoverChange,
  isPaused,
  isActive,
}) {
  const tooltipId = useId()
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverStart = () => {
    setIsHovered(true)
    onHoverChange?.(true)
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    onHoverChange?.(false)
  }

  return (
    <motion.a
      href={href}
      target={href?.startsWith('mailto:') ? undefined : '_blank'}
      rel={href?.startsWith('mailto:') ? undefined : 'noreferrer'}
      aria-describedby={tooltipId}
      aria-label={label}
      className="absolute left-1/2 top-1/2"
      style={{ x, y }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 420, damping: 25 }}
    >
      <div
        className={
          "relative grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-zinc-900/80 shadow-[0_10px_25px_-12px_rgba(0,0,0,0.8)] backdrop-blur " +
          (isActive
            ? 'ring-2 ring-sky-400/70 shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_18px_40px_-20px_rgba(56,189,248,0.8)]'
            : isPaused
              ? 'opacity-90'
              : 'opacity-95')
        }
      >
        <Icon className="text-2xl text-zinc-100" />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              id={tooltipId}
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-zinc-950/90 px-2 py-1 text-xs font-medium text-zinc-100 shadow-lg"
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.a>
  )
}
