import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Portfolio from "@/components/Portfolio";
import Thoughts from "@/components/Thoughts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
        <Hero />
        <Expertise />
        <Portfolio />
        <Thoughts />
        <Contact />
      </main>
      
      <footer className="py-8 text-center border-t border-[#e2e2e2] mt-10">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Nasrullah Tanim. All rights reserved.
        </p>
      </footer>
    </>
  );
}
