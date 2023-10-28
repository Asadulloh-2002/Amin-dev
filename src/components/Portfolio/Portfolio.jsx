import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./Portfolio.module.scss";
import { useRef } from "react";

const Single = ({ data }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section ref={ref}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <img src={data.img} alt="" />
          </div>
          <motion.div style={{ y }} className={styles.textContainer}>
            <h2>{data.title}</h2>
            <p>{data.des}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
  });

  return (
    <div className={styles.portfolio} ref={ref}>
      <div className={styles.progress}>
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className={styles.progressBar}
        ></motion.div>
      </div>
      {data.map((item) => (
        <Single data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

const data = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://mattermost.com/wp-content/uploads/2022/04/01_Create-React-App_Typescript@2x.webp",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit facilis praesentium perspiciatis possimus corporis eum animi temporibus quia sequi.",
  },
  {
    id: 2,
    title: "Next Js",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--KkP4AuFt--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit facilis praesentium perspiciatis possimus corporis eum animi temporibus quia sequi.",
  },
  {
    id: 3,
    title: "React You Tube",
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1279225/regular_1708x683_0521-react-redux-and-immutablejs-Waldek_Newsletter-993b50f4ae56e9ee6e024a309c23a6c4.png",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit facilis praesentium perspiciatis possimus corporis eum animi temporibus quia sequi.",
  },
];
