"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import autoloters from "@/public/autoloters.jpeg";
import Parallax from "./paralax";

export default function About() {
  const { ref } = useSectionInView("About");
  const [views, setViews] = useState(false);

  return (
    <>
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-justify leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I mainly focus on backend development, but I really enjoy working on different parts of every project. My main stack is
        {" "}
        <span className="font-medium"> 
          React, Node.js with Express.js / Nest.JS / Prisma and MongoDB
        </span>{" "}
        , but I'm very involved with other languages and technologies as well, such as PHP, .NET, Java, Python and C++. I'm also proficient
        in mobile app development with React Native and Flutter.
      </p>

      <p className="mb-3">
        <span className="italic">When I'm not coding</span>, I enjoy playing the guitar, reading books, 
        playing video games or working on my motorcycle.
        I also like riding to the countryside to relax and enjoy the{" "}
          <motion.span
          onClick={() => setViews(true)}
          className="cursor-pointer text-xl font-bold inline-block"
          animate={{
            y: [0, -12, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          views
        </motion.span>.
      </p>
    {views && <Parallax/>}
    </motion.section>
    </>
  );
}
