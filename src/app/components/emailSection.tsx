"use client"
import React, { useState } from "react";
import { Resend } from 'resend';
import Link from "next/link";
import Image from "next/image";

import GithubIcon from "../../../public/images/socials/github.svg";
import LinkedinIcon from "../../../public/images/socials/LinkedIn_icon.svg";
import { sendMail } from "../api/send/route";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    try {
      const response = await sendMail(data);
      if (response === 1)
        setEmailSubmitted(1);
    } catch (e) {
      setEmailSubmitted(2);
    }
  }

  return (
    <section className="grid md:grid-cols-2 my-12 py-4 gap-4">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4 underline underline-offset-8 decoration-green-500">Contact me</h2>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi <br/> I&apos;ll try my best 
          to get back to you!
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="https://github.com/PekxSovann" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>

          <Link href="https://www.linkedin.com/in/tommy-dang-002101160/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
          </Link>
        </div>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg top-3/4 transform -translate-1/2 -translate-x-1/2"></div>
      </div>

      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="text-white mb-2 block text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="your_email@google.com"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="subject" className="text-white mb-2 block text-sm font-medium">
              Your subject
            </label>
            <input
              name="subject"
              type="subject"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi!"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="text-white mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send message!
          </button>
          {
            emailSubmitted === 1 && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )
          }
          {
            emailSubmitted === 2 && (
              <p className="text-red-500 text-sm mt-2">
                There was a problem while sending your mail!
              </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
