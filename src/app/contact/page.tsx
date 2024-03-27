import { Lilita_One } from 'next/font/google'

import EmailSection from "../components/emailSection";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
})

export default function ContactPage() {
  return (
    <main className={`${lilita.className} flex min-h-screen flex-col bg-[#121212]`}>
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
