import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex ga-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="Thumbnail do projeto BookWise"
          className="w-full h-[200px] sm:h=[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex item-center gap-3 font-medium tect-lg text-gray-50">
          <Image width={20} height={20} alt="" src="/image/icons/projec-title-icon.svg" />
          BookWise
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tempore ut consectetur
          eius eos tempora commodi odio amet iusto, asperiores accusamus facere soluta, recusandae
          dignissimos earum maiores eum eveniet, vel error. Veritatis voluptas labore delectus
          asperiores et eum incidunt animi similique adipisci! Ut eius error assumenda excepturi
          aspernatur repellendus quidem!
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/book-wise">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
