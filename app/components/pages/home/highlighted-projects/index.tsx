import { SectionTitle } from '@/app/components/section-title'
import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { ProjectCard } from './project-card'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '@/app/components/link'

export const Highlightedprojects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos recentes" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />

        <p className="flex item-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link className="inline-flex" href="/projects">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
