import Portfolio from "@/components/Portfolio";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills/>
      <Portfolio />
      <Contact/>
    </>
  );
}
