'use client'

import { motion } from 'framer-motion'
import ThemeChanger from '@/components/ThemeChanger'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex min-h-screen flex-col items-center justify-center p-8"
    >
      <ThemeChanger />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Hi, I&apos;m Riad 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-center text-lg max-w-xl text-neutral-700 dark:text-neutral-300 leading-relaxed"
      >
        I build modern web experiences with React, Next.js, and Nuxt.js.
        <br />
        Based in Riga, Latvia.
        <br /> 
        Always learning, always building.
      </motion.p>

      {/* <Link
        href="#projects"
        className="mt-6 text-blue-600 hover:underline dark:text-blue-400"
      >
        See my projects ↓
      </Link> */}
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </motion.main>
  )
}