import { Lilita_One } from 'next/font/google'

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import ProjectSection from '../components/projectSection';

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
})

export default function ProjectPage() {
  return (
    <main className={`${lilita.className} flex min-h-screen flex-col bg-[#121212]`}>
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectSection />
      </div>
      <Footer />
    </main>
  );
}
