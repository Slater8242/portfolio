'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Finlo.lv',
    description: 'Fintech page with Nuxt 3 and Markdown support, styled with vanilla CSS.',
    tech: ['Nuxt 3', 'Vue', 'Markdown', 'CSS'],
    link: 'https://finlolandingpage.netlify.app',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Projects
      </motion.h2>
      <div className={`grid gap-8 ${projects.length===1? 'w-m':'md:grid-cols-2'}`}>
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block p-6 rounded-2xl 
              border border-neutral-200 dark:border-neutral-700 
              hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-in-out 
              bg-white/70 dark:bg-white/5 
              backdrop-blur-sm 
              dark:hover:shadow-gray-800
            "
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-blue-500">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-800/20 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
