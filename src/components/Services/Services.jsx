import { motion, useInView } from "framer-motion";
import styles from "./Services.module.scss";
import { Fragment, useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const listvariants = {
  initial: {
    x: -500,
    y: -100,
    opacity: 0,
  },
  animate: (i) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.5,
    },
  }),
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-400px" });
  const isInViewList = useInView(ref, { margin: "-400px" });

  return (
    <motion.div
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      className={styles.services}
    >
      <motion.div variants={variants} className={styles.textContainer}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className={styles.titleContainer}>
        <div className={styles.title}>
          <img src="/people.webp" alt="" />
          <h2>
            <b>Unique</b> Ideas
          </h2>
        </div>
        <div className={styles.title}>
          <h2>
            <b>For you</b> Business
          </h2>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div
        variants={listvariants}
        initial="initial"
        ref={ref}
        animate={isInViewList && "animate"}
        className={styles.listContainer}
      >
        {data.map((item, i) => (
          <motion.div
            variants={listvariants}
            className={styles.box}
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
            key={item.id}
            custom={i}
          >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <button>{item.button}</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;

const data = [
  {
    id: 1,
    title: "Brending",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod ratione cumque illum, numquam reiciendis dolor error rupiditate tempora incidunt qui atque molestias, molestiae illo.",
    button: "Go",
  },
  {
    id: 2,
    title: "Brending",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod ratione cumque illum, numquam reiciendis dolor error rupiditate tempora incidunt qui atque molestias, molestiae illo.",
    button: "Go",
  },
  {
    id: 3,
    title: "Brending",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod ratione cumque illum, numquam reiciendis dolor error rupiditate tempora incidunt qui atque molestias, molestiae illo.",
    button: "Go",
  },
  {
    id: 4,
    title: "Brending",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod ratione cumque illum, numquam reiciendis dolor error rupiditate tempora incidunt qui atque molestias, molestiae illo.",
    button: "Go",
  },
];
