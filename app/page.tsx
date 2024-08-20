import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Portfolio from "@/components/Portfolio";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <Portfolio />
      <Features/>
      <GetApp />
    </>
  );
}
