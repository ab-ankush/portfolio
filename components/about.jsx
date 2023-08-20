"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useActiveSectionHook from "@/hooks/useActiveSectionHook";

const About = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const { ref } = useActiveSectionHook({
    sectionName: "About",
    threshold: 0.4,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.7], [100, 0]);

  return (
    <div id="About" ref={targetRef} className="scroll-mt-28">
      <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        style={{ opacity, y }}
        transition={{ delay: 2 }}
        ref={ref}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 capitalize">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I'm a Full-Stack web developer with a passion for building beautiful
          websites and applications. I'm currently pursuing my Bachelor's degree
          in <span className="font-bold">Information Technology</span> at the
          Maharaja Agrasen Institute of Technology, Delhi.
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          My passion for full-stack development, particularly in the{" "}
          <span className="font-bold">MERN </span> stack, has driven me to excel
          in web development. Additionally, my proficiency in languages like{" "}
          <span className="font-bold">C++</span> has further enhanced my
          technical capabilities. Alongside my academic and professional
          pursuits, I find joy in playing cricket and reading light novels.
        </p>
      </motion.section>
    </div>
  );
};

export default About;
