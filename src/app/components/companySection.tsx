import React from 'react';
import Image from 'next/image'

import { COMPANY_FIRST_ROW, COMPANY_SECOND_ROW } from '../constants';

const CompanySection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white mb-10 mt-4 underline underline-offset-8 decoration-green-500">
        They trusted me
      </h2>
      <ul className="grid grid-cols-3 col-auto justify-items-center mb-10">
        {COMPANY_FIRST_ROW.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank">
              <Image
                className="rounded-full"
                src={item.logo}
                alt={item.title}
                width={90}
                height={90}
              />
              <p className="text-center">{item.title}</p>
            </a>
          </li>
        ))
        }
      </ul>
      <ul className="grid grid-cols-4 col-auto justify-items-center mb-5 mt-5">
          {COMPANY_SECOND_ROW.map((item, index) => (
            <li key={index} className="mr-2 ml-2">
              <a href={item.link} target="_blank">
                <Image
                  className="rounded-full"
                  src={item.logo}
                  alt={item.title}
                  width={90}
                  height={90}
                />
                <p className="text-center">{item.title}</p>
              </a>
            </li>
          ))
          }
      </ul>
      <p className="text-2xl font-bold text-white mb-4 mt-4">So why don&apos;t you!</p>
    </div>
  )
};

export default CompanySection;