import Image from "next/image";
import { Lilita_One } from 'next/font/google'

import HeroSection from "./components/heroSection";
import NavBar from './components/navBar';
import AboutSection from "./components/aboutSection";
import CompanySection from "./components/companySection";
import SkillSection from "./components/skillSection";
import Footer from "./components/footer";

import EmailSection from "./components/emailSection";

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`${lilita.className} flex min-h-screen flex-col bg-[#121212]`}>
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <CompanySection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
