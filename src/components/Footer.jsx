export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-8 dark:border-zinc-800/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-zinc-900 dark:hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-zinc-900 dark:hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
