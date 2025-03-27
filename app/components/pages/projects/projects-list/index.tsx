'use client'

import Link from 'next/link'
import { ProjectCard } from './project-card'
import { motion } from 'framer-motion'

// Certifique-se de definir ou importar fadeUpAnimation corretamente
const fadeUpAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <motion.div
        key="project"
        {...fadeUpAnimation}
        transition={{ duration: 0.5 }} // Corrigido aqui
      >
        <Link href="/projects/book-wise">
          <ProjectCard />
        </Link>
      </motion.div>
    </section>
  )
}
