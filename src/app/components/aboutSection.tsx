"use client";
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:pt-16 sm:pd-16">
        <Image
          className="rounded-full"
          src="/images/aboutme_picture.jpeg"
          alt="profile Image"
          width={350}
          height={350}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 underline underline-offset-8 decoration-green-500">About me</h2>
          <p className="text-base lg:text-lg mt-7">
            I&apos;m a <span className="font-bold">Front End</span>, <span className="font-bold">Back End</span> and a
            <span className="font-bold"> Full Stack</span> developer based in France and I {" "}
            decided to focus my work around the Web and Mobile development in order to produce
            the best application I can create!
            <br /> <br />
            My skills resolve mainly around React, React Native, Flutter and NodeJS but I&apos;m always {" "}
            striving to learn more!
            <br /> <br />
            Don&apos;t hesitate to check out all my informations!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;