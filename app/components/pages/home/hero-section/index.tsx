'use client'

import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import { HomePageInfo } from '@/app/types/page-info'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandWhatsapp,
} from 'react-icons/tb'
import { motion } from 'framer-motion'

export const metadata = {
  title: 'Home',
}

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/MelissaMaximo',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/melissa-m%C3%A1ximo-8404b1328/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://wa.me/5512997516865',
    icon: <TbBrandWhatsapp />,
  },
]

type HomeSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  console.log(homeInfo.introduction)

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Melissa Máximo</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou desenvolvedora de software com paixão por criar soluções
            inovadoras e eficientes. Com experiência em diversas tecnologias,
            minha jornada me levou a explorar tanto o front-end quanto o
            back-end, sempre focada em construir interfaces intuitivas e
            sistemas robustos. Ao longo dos anos, aprendi a importância de
            escrever códigos limpos e escaláveis, além de colaborar com equipes
            multidisciplinares para entregar projetos de alto impacto.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            <TechBadge
              key="nextjs"
              name="Next.js"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />

            <TechBadge
              key="react"
              name="React"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />

            <TechBadge
              key="javascript"
              name="JavaScript"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />

            <TechBadge
              key="html"
              name="Java"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />

            <TechBadge
              key="css"
              name="CSS"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />

            <TechBadge
              key="nodejs"
              name="Node.js"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />

            <TechBadge
              key="typescript"
              name="MySQL"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src="/images/FOTO_CV.jpg"
            alt="Foto de perfil de Melissa Máximo"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
