import React from "react";

import Navbar from "../components/navBar"
import ProjectTemplate from "../components/projectTemplate"
import { QuidolProjectData } from "../components/projectData";
import Footer from "../components/footer";

import { Lilita_One } from 'next/font/google'

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
})

const Quidol = () => {
  return (
    <div className={`${lilita.className} centeredSection`}>
      <Navbar />
      <div className="my-24 flex flex-col items-center">
        <h1 className="text-4xl">{QuidolProjectData.title}</h1>
        <ProjectTemplate projectData={QuidolProjectData} />
      </div>
      <Footer />
    </div>
  )
};

export default Quidol