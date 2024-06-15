import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Markdown from "react-markdown";

function FadeInText({ text }) {
  const [ref, inView] = useInView();

  const fadeInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInTransition = {
    duration: 1,
    delay: 0.3,
  };

  return (
    <div ref={ref} className="section">
      <motion.span
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={fadeInTransition}
      >
        <Markdown>{text}</Markdown>
      </motion.span>
    </div>
  );
}

export default FadeInText;
