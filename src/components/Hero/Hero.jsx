import styles from "./Hero.module.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const imgVariant = {
  initial: {
    y: 1000,
    x: 1000,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
}

const Hero = () => {
  return (
    <div className={styles.hero}>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className={styles.wrapper}
      >
        <motion.div variants={textVariants} className={styles.textContainer}>
          <motion.h2 variants={textVariants}>Khusanboyev Asadulloh</motion.h2>
          <motion.h1 variants={textVariants}>
            Wep developer and Geologist
          </motion.h1>
          <motion.div variants={textVariants} className={styles.buttons}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={sliderVariants}
        animate="animate"
        initial="initial"
        className={styles.slidingTextContainer}
      >
        Write Content Creator Influencer
      </motion.div>
      <motion.div  variants={imgVariant} initial="initial" animate="animate" className={styles.imageContainer}>
        <img src="/hero.png" alt="Xusanboyev Asadulloh" />
      </motion.div>
    </div>
  );
};

export default Hero;
