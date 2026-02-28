import { motion } from 'framer-motion'
import { socialLinks } from '../data/socialLinks.js'
import { contactOrbitVariants, contactTitleVariants } from '../animations/motionVariants.js'
import OrbitSystem from './OrbitSystem.jsx'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={contactTitleVariants} className="text-center">
            <h2 className="text-4xl font-bold text-zinc-50 sm:text-5xl">Contact Me</h2>
            <p className="mt-5 text-lg text-zinc-400">Let's build something together</p>
          </motion.div>

          <motion.div variants={contactOrbitVariants} className="mt-14">
            <OrbitSystem links={socialLinks} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
