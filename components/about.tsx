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
      I am a creative problem solver who thrives on challenges and opportunities to optimize web solutions. I am also a committed learner who constantly updates my skills and knowledge to keep up with the ever-evolving tech field. I contribute to the community by sharing knowledge and participating in open-source projects, fostering growth and innovation.

      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning{" "}
        <span className="font-medium">FullStack Devolopment</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
