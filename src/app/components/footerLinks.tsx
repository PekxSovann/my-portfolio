import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CONTACT_LIST } from "../constants";

const FooterLinks = () => {
  return (
    CONTACT_LIST.map((item, index) => (
      item.isExternal ? (
        <li key={index}>
          <Link href={item.link} target="_blank" className="flex flex-row hover:underline">
            <FontAwesomeIcon icon={item.icon} size="lg" width={22} height={22} className="pr-2" />
            <span className="text-sm text-white">{item.title}</span>
          </Link>
        </li>
      ) : (
          <li key={index}>
            <Link href={item.link} className="flex flex-row hover:underline">
              <FontAwesomeIcon icon={item.icon} size="lg" width={22} height={22} className="pr-2" />
              <span className="text-sm text-white">{item.title}</span>
            </Link>
          </li>
    )))
  )
};

export default FooterLinks;