import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Button,Image } from "react-bootstrap";
import MyImage from '../assets/MyImage.png';
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div

        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
             <Image src={MyImage} roundedCircle width="150" className="MyImage float-left" />

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Khaoula ALLAK</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Big Data and Cloud Computing Engineering Student{" "}
            <br className="sm:block hidden" />
          </p>
          {/* testing */}
          

            <div className="social-media flex mt-3" style={{padding:'7px'}}>
              
              <a
                href="https://www.linkedin.com/in/khaoula-allak/"
                className="mr-3"
              >
                <FaLinkedin size={27} />
              </a>
              <a href="https://github.com/khawla12-op" className="mr-3">
                <FaGithub size={27} />
              </a>
              <a href="https://www.instagram.com/allakkhawla/" className="mr-3">
                <FaInstagram size={27} />
              </a>
              <a href="https://wa.me/212659362565" className="mr-3">
                <FaWhatsapp size={27} />
              </a>
           
            </div>
            <div className="mt-3" style={{padding:'7px'}}>
          <Button variant='primary' href='/cv.pdf ' download style={{ borderRadius: '100px' ,border: '2px solid white' ,padding:'7px' }}>
    Download CV
  </Button>
  </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
