import { HeroSection } from "./components/pages/home/hero-section";
import { Highlightedprojects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/known-techs";
import { HomePageInfo } from "@/app/types/page-info";


export const metadata = {
  title: 'Home',
}

export default function Home() {
 
  return (
    <>
      <HeroSection homeInfo={{
        introduction: {
          raw: ""
        },
        technologies: [],
        profilePicture: {
          url: ""
        },
        socials: [],
        knowTechs: []
      }} />
      <KnowTechs />
      <Highlightedprojects />
    </>
  );
}
