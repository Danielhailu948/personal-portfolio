import { motion } from 'framer-motion'

export default function ContactForm() {
  return (
    <form
      className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-2">
        <label className="text-sm font-medium text-zinc-200" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="h-11 rounded-lg border border-white/10 bg-zinc-950/40 px-4 text-sm text-zinc-100 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-zinc-200" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@domain.com"
          className="h-11 rounded-lg border border-white/10 bg-zinc-950/40 px-4 text-sm text-zinc-100 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-zinc-200" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          className="resize-none rounded-lg border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 420, damping: 30 }}
        className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-zinc-950 shadow-[0_16px_40px_-18px_rgba(56,189,248,0.9)] hover:bg-sky-400"
      >
        Send
      </motion.button>
    </form>
  )
}
