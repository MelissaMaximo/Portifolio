import { HiArrowCircleLeft } from "react-icons/hi"
import { SectionTitle } from "../../section-title"
import { Link } from "../../link"

export const PageIntroduction = () => {
    return(
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
        <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-senter [&>h3]:text-4xl"
        />
        <div className="flex flex-col items-center">
            <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur officia, veritatis quisquam quis consequatur.
            </p>

            <Link href={"/"}>
                <HiArrowCircleLeft size={20} />
                Voltar para Home
            </Link>
        </div>
    </section>
    
    )
}