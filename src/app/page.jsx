import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    <Skills/>
      <Projects />
      <Contact />
      {/* এরপর নিচের সেকশনগুলো একে একে আসবে */}
      <div className="h-20 flex items-center justify-center text-gray-500 italic">
       <Footer></Footer>
      </div>
    </main>
  );
}