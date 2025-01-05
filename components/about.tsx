"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        When I first started coding in PHP, I realized I wanted to follow a path in web development. 
        {" "}<span className="italic">I just loved the feeling</span> of making something made by myself 
        accessible all around the world. 
        So I started working on my {" "}<span className="underline">web developer</span> skills while studying and, 
        by the time I was graduating, I was already working as a full-stack developer.
        My main stack is 
        {" "}
        <span className="font-medium"> 
          React, Node.js and MongoDB.
        </span>{" "}
        I also like to program in Arduino and make mobile apps. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing the guitar, reading books, 
        playing video games or checking my motorcycle.
        I also like riding to the countryside to relax and enjoy the views.
      </p>
    </motion.section>
  );
}
