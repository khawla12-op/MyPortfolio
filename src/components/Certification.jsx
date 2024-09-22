import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certif} from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import {certifications} from "../constants"
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
  index,
  name,
  description,
  image,
  certification_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='certification_image'
            className='w-full h-full rounded-2xl'
          /> 
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(certification_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={certif}    
                alt='certification link'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Certifications</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

   
        <div className='mt-20 flex flex-wrap gap-7 flex-wrap justify-around'>

        {certifications.map((certification, index) => (
          <CertificationCard key={`certification-${index}`} index={index} {...certification} />
        ))}
      </div>
     
    </>
  );
};


export default SectionWrapper(Certifications, "");
