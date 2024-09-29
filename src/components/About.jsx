import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
Passionate about machine learning, generative AI, NLP and LLMs, with practical experience
in developing AI-driven solutions. Proficient in data analysis, model training,customized
conversational chatbots and data-driven problem-solving. Eager to apply knowledge in
real-world settings and gain industry experience. Looking for internship opportunities to
further enhance my skills.      </motion.p>

  
    </>
  );
};

export default SectionWrapper(About, "about");
