import React from 'react';
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';

function AnimatedText({text, classNm}) {
  const words = text.split(" ");

  const [ref, inView] = useInView({
    triggerOnce: false, // This triggers the animation only once
    threshold: 0.5, // Adjust this threshold as needed
  });

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
    ref={ref}
    className={`${classNm} ${inView ? 'in-view' : ''}`}
    // text-2xl md:text-xl lg:text-3xl text-white font-bold px-5  lg:px-16
      // style={{ overflow: "hidden", display: "flex", flexWrap:"wrap", fontSize: "2rem", justifyContent:"end", textAlign:"right" }}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    > {words.map((word, index) => (
      <motion.span
        variants={child}
        style={{ marginRight: "5px" }}
        key={index}
      >
        {word}
      </motion.span>
    ))}
  </motion.div>
);
};


export default AnimatedText