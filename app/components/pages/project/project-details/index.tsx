'use client'

import { Button } from '@/app/components/button'
import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/tech-badge'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '@/app/components/link'
import { HiArrowCircleLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/images/hero-bg.png), url(https://media.graphassets.com/7Kic5YHkQcmGrN57MSXw)',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'center, center',
          backgroundSize: 'cover, cover'
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Título */}
      <SectionTitle
        subtitle="projetos"
        title="BookWise"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      {/* Descrição */}
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus, dicta
        excepturi dolores itaque animi ducimus repellat sed veniam id.
      </p>

      <div className="w-ful mad-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
      </div>

      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>

        <a href="https://github.com" target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>

      <Link href="/projects">
        <HiArrowCircleLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
