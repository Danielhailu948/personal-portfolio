import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>
      <Footer />
    </div>
  )
}
