import heroImg from '../assets/hero.png'
import viteLogo from '../assets/vite.jpg'
import reactLogo from '../assets/react.jpg'

export const projectsData = [
  {
    id: 'portfolio-calendar-app',
    title: 'Portfolio Calendar App',
    description: 'A modern event scheduling application with reminders and calendar view.',
    fullDescription:
      'A modern event scheduling application with reminders and a clean calendar experience. Built with a focus on performance, accessibility, and smooth UI interactions.',
    technologies: ['React', 'FullCalendar', 'CSS'],
    image: heroImg,
    github: 'https://github.com/Danielhailu948/smart-calendar.git',
    demo: 'https://beltasor-calendar.vercel.app',
  },
  {
    id: 'vite-starter-dashboard',
    title: 'Comming soon',
    description: 'A fast dashboard starter with component-driven UI and responsive layouts.',
    fullDescription:
      'A Vite-powered dashboard starter focusing on reusable components, responsive layout primitives, and polished microinteractions.',
    technologies: ['Vite', 'React', 'Tailwind CSS'],
    image: reactLogo,
    github: '#',
    demo: '#',
  },
  {
    id: 'motion-ui-kit',
    title: 'comming soon',
    description: 'A set of animated UI patterns and transitions built with Framer Motion.',
    fullDescription:
      'A curated set of motion primitives and interactive UI patterns with shared layout transitions, hover effects, and tasteful entrance animations.',
    technologies: ['Framer Motion', 'React', 'Tailwind CSS'],
    image: viteLogo,
    github: '#',
    demo: '#',
  },
]
