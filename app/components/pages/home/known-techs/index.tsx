import { SectionTitle } from "@/app/components/section-title"
import { TbBrandNextjs, TbBrandReact } from "react-icons/tb"
import { KnowTech } from "./know-tech"
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb"
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

export const KnowTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />
       
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
            <KnowTech 
                tech={{ icon: <TbBrandNextjs />, name: 'Next.js', startDate: '2025-02-01' }} 
            />
            <KnowTech 
                tech={{ icon: <TbBrandReact />, name: 'React', startDate: '2025-01-01' }} 
            />
            <KnowTech 
                tech={{ icon: <FaJava />, name: 'Java', startDate: '2024-01-01' }} 
            />
            <KnowTech 
                tech={{ icon: <TbBrandJavascript />, name: 'JavaScript', startDate: '2023-01-01' }} 
            />
           <KnowTech 
                tech={{ icon: <FaCss3 />, name: 'CSS', startDate: '2023-01-01' }} 
            />
            <KnowTech 
                tech={{ icon: <FaNodeJs />, name: 'Node.js', startDate: '2025-01-01' }} 
            />
            <KnowTech 
                tech={{ icon: <DiMysql />, name: 'MySQL', startDate: '2024-01-01' }} 
            />
        </div>
       
        </section>
    )

}