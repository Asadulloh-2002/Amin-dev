import { motion } from "framer-motion";
import styles from "../Sidebar.module.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delay: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -50,
    opacity: 0,
  },
};

const links = ["Home", "Services", "Portfolio", "Contact", "About"];

const Links = () => {
  return (
    <motion.div className={styles.links} variants={variants}>
      {links.map((item) => (
        <motion.a
          href={`#${item}`}
          variants={itemVariants}
          key={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
