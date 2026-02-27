export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Daniel-Portfolio
        </a>
        <nav className="hidden items-center gap-8 text-base text-zinc-600 dark:text-zinc-300 sm:flex">
          <a className="hover:text-zinc-900 dark:hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-zinc-900 dark:hover:text-white" href="#projects">
            Projects
          </a>
          <a className="hover:text-zinc-900 dark:hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
        <a
          className="rounded-md bg-zinc-900 px-4 py-2.5 text-base font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          href="#contact"
        >
          Let's talk
        </a>
      </div>
    </header>
  )
}
