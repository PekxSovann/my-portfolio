import React from "react";

import FooterLinks from "./footerLinks";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="grid grid-cols-3">
          <div className="">
            <h2 className="text-3xl mb-3">Contact</h2>
              <ul>
                <FooterLinks />
              </ul>
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <a
            href="/assets/TommyDang-CV.pdf"
            download={"Hire me!"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline poppins text-sm"
          >
            <h3 className="text-xl mb-3">Download my CV!</h3>
          </a>
        </div>
        <div className="flex flex-col-reverse">
          <p className="text-slate-700 ju">
            Made by Dang Tommy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;