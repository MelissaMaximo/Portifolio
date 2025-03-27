import { SectionTitle } from "../../section-title"
import { TbBrandNextjs } from "react-icons/tb"
import { KnowTech } from "../home/known-techs/know-tech"
import { TbBrandReact } from "react-icons/tb"
import { TbBrandJavascript } from "react-icons/tb"

export const KnowTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />
       
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                <KnowTech 
                    key="nextjs"
                    tech={{
                        icon: <TbBrandNextjs />,
                        name: 'Next.js',
                        startDate: '2021-01-01'
                    }} 
                />
                <KnowTech 
                    key="react"
                    tech={{
                        icon: <TbBrandReact />,
                        name: 'React',
                        startDate: '2019-05-01'
                    }} 
                />
                <KnowTech 
                    key="javascript"
                    tech={{
                        icon: <TbBrandJavascript />,
                        name: 'JavaScript',
                        startDate: '2018-09-01'
                    }} 
                />
              
            </div>
       
        </section>
    )

}