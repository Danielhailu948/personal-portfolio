import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { useMemo, useState } from 'react'
import OrbitIcon from './OrbitIcon.jsx'

function degToRad(deg) {
  return (deg * Math.PI) / 180
}

function OrbitingItem({ item, rotation, radius, isPaused, activeId, setIsPaused, setActiveId, baseAngleDeg }) {
  const angle = useTransform(rotation, (r) => degToRad(r + baseAngleDeg))
  const x = useTransform(angle, (a) => radius * Math.cos(a) - 28)
  const y = useTransform(angle, (a) => radius * Math.sin(a) - 28)

  return (
    <OrbitIcon
      Icon={item.icon}
      href={item.link}
      label={item.label}
      x={x}
      y={y}
      isPaused={isPaused}
      isActive={activeId === item.id}
      onHoverChange={(hovered) => {
        setIsPaused(hovered)
        setActiveId(hovered ? item.id : null)
      }}
    />
  )
}

export default function OrbitSystem({ links, size = 420, radius = 150, durationSeconds = 24 }) {
  const reduceMotion = useReducedMotion()
  const rotation = useMotionValue(0)

  const [isPaused, setIsPaused] = useState(false)
  const [activeId, setActiveId] = useState(null)

  const baseAngles = useMemo(() => {
    const step = links?.length ? 360 / links.length : 0
    return (links || []).map((l, idx) => ({ id: l.id, base: idx * step }))
  }, [links])

  useAnimationFrame((t, delta) => {
    if (reduceMotion || isPaused) return

    const speedDegPerMs = 360 / (durationSeconds * 1000)
    rotation.set((rotation.get() + delta * speedDegPerMs) % 360)
  })

  const ringRotation = reduceMotion ? 0 : rotation

  return (
    <div className="mx-auto flex w-full items-center justify-center">
      <div
        className="relative"
        style={{ width: size, height: size }}
        onMouseLeave={() => {
          setIsPaused(false)
          setActiveId(null)
        }}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            aria-hidden="true"
            className="h-full w-full rounded-full border border-white/10"
            style={{ rotate: ringRotation }}
          />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="grid h-48 w-48 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_-25px_rgba(56,189,248,0.55)]">
            <div className="text-center">
              <p className="text-base font-semibold text-zinc-200">Contact Me</p>
              <p className="mt-2 text-sm text-zinc-400">Let's work together</p>
            </div>
          </div>
        </div>

        {(links || []).map((item) => {
          const base = baseAngles.find((a) => a.id === item.id)?.base ?? 0

          return (
            <OrbitingItem
              key={item.id}
              item={item}
              rotation={rotation}
              radius={radius}
              isPaused={isPaused}
              activeId={activeId}
              setIsPaused={setIsPaused}
              setActiveId={setActiveId}
              baseAngleDeg={base}
            />
          )
        })}

        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_55%)]" />
      </div>
    </div>
  )
}
