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
As a driven and highly motivated engineering student, I possess a deep-seated passion for tackling complex challenges. My skill set is underpinned by robust analytical capabilities and an unwavering attention to detail.
In addition to my academic pursuits, I hold the position of a lead within the GDSC, an organization dedicated to empowering fellow students by furnishing them with essential resources and unwavering support in their journey toward mastery in technology and software development.
      </motion.p>

  
    </>
  );
};

export default SectionWrapper(About, "about");
