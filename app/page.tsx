import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
  <Hero />
  <FadeIn>
    <About />
  </FadeIn>
  <FadeIn>
    <Project />
  </FadeIn>
  <Footer />
</>
  );
}