import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections/index.tsx'

export const metadata = {
  title: 'Projetos'
}

export default function Project() {
  return (
    <>
      <ProjectDetails />
      <ProjectSections />
    </>
  )
}
