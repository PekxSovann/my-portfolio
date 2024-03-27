import React from "react";

import Navbar from "../components/navBar"
import ProjectTemplate from "../components/projectTemplate"
import { TimesUpProjectData } from "../components/projectData";
import Footer from "../components/footer";

import { Lilita_One } from 'next/font/google'

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
})

const TimesUp = () => {
  return (
    <div className={`${lilita.className} centeredSection`}>
      <Navbar />
      <div className="my-24 flex flex-col items-center">
        <h1 className="text-4xl">{TimesUpProjectData.title}</h1>
        <ProjectTemplate projectData={TimesUpProjectData} />
      </div>
      <Footer />
    </div>
  )
};

export default TimesUp