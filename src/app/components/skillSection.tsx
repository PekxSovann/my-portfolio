import React from "react";
import Image from 'next/image'

import {
  FRONT_END_SKILLS,
  BACK_END_SKILLS,
  CICD_TEST_SKILLS,
  DESIGN_SKILLS
} from '../constants';

const SkillSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white mb-5 underline underline-offset-8 decoration-green-500">My Toolkit</h2>
      <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
      <ul className="grid grid-cols-4 md:grid-cols-8 col-auto justify-items-center mb-10">
        {
          FRONT_END_SKILLS.map((item, index) => (
            <li key={index}>
              <div className="w-99 h-99 rounded-full bg-[#ffffff] shadow mr-2 ml-2">
                <Image
                  className="rounded-full"
                  src={item.picture}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center">{item.title}</p>
            </li>
          ))
        }
      </ul>

      <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
      <ul className="grid grid-cols-4 md:grid-cols-8 col-auto justify-items-center mb-10">
        {
          BACK_END_SKILLS.map((item, index) => (
            <li key={index}>
              <div className="w-99 h-99 rounded-full bg-[#ffffff] shadow mr-2 ml-2">
                <Image
                  className="rounded-full"
                  src={item.picture}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center">{item.title}</p>
            </li>
          ))
        }
      </ul>

      <h3 className="text-2xl font-bold text-white mb-4">CI/CD & Tests</h3>
      <ul className="grid grid-cols-4 md:grid-cols-8 col-auto justify-items-center mb-10">
        {
          CICD_TEST_SKILLS.map((item, index) => (
            <li key={index}>
              <div className="w-99 h-99 rounded-full bg-[#ffffff] shadow mr-2 ml-2">
                <Image
                  className="rounded-full"
                  src={item.picture}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center">{item.title}</p>
            </li>
          ))
        }
      </ul>

      <h3 className="text-2xl font-bold text-white mb-4">Design</h3>
      <ul className="grid grid-cols-4 md:grid-cols-8 col-auto justify-items-center mb-10">
        {
          DESIGN_SKILLS.map((item, index) => (
            <li key={index}>
              <div className="w-99 h-99 rounded-full bg-[#ffffff] shadow mr-2 ml-2">
                <Image
                  className="rounded-full"
                  src={item.picture}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center">{item.title}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default SkillSection;