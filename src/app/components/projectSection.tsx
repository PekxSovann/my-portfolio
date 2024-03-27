import React from "react";
import Image from 'next/image'
import Link from 'next/link'

import {
  COMPANY_FIRST_ROW,
  COMPANY_SECOND_ROW,
  PERSONAL_PROJECT_ROW
} from '../constants';

const ProjectSection = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-4xl font-bold text-white mb-10 mt-4 underline underline-offset-8 decoration-green-500">
        My experiences
      </h2>

      <ul className="grid grid-cols-3 col-auto justify-items-center mb-10 mt-5">
        {COMPANY_FIRST_ROW.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.details}`}>
              <Image
                className="rounded-full"
                src={item.logo}
                alt={item.title}
                width={90}
                height={90}
              />
              <p className="text-center">{item.title}</p>
            </Link>
          </li>
        ))
        }
      </ul>

      <ul className="grid grid-cols-4 col-auto justify-items-center mb-10 mt-10">
        {
          COMPANY_SECOND_ROW.map((item, index) => (
            <li key={index} className="mr-2 ml-2">
              <Link href={`/${item.details}`}>
                <Image
                  className="rounded-full"
                  src={item.logo}
                  alt={item.title}
                  width={90}
                  height={90}
                />
                <p className="text-center">{item.title}</p>
              </Link>
            </li>
          ))
        }
      </ul>

      <h2 className="text-4xl font-bold text-white mb-10 mt-4 underline underline-offset-8 decoration-green-500">
        My personal projects
      </h2>

      <ul className="grid grid-cols-4 col-auto justify-items-center mb-10">
        {
          PERSONAL_PROJECT_ROW.map((item, index) => (
            <li key={index} className="mr-2 ml-2">
              <Link href={`/${item.details}`}>
                <Image
                  className="rounded-full"
                  src={item.logo}
                  alt={item.title}
                  width={90}
                  height={90}
                />
                <p className="text-center">{item.title}</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ProjectSection;