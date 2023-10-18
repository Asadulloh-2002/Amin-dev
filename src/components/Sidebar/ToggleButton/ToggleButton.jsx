import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <motion.button onClick={() => setOpen((prev) => !prev)}>
      <svg width={23} height={23} viewBox="0 0 23 23">
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', duration: .8, delayChildren: .2 }}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', duration: 1, delayChildren: .2 }}
          variants={{
            closed: { d: 'M 2 9 L 20 9' },
            open: { d: '0 9 L 0 9' },
          }}
        />
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', duration: .8, delayChildren: .2 }}
          variants={{
            closed: { d: "M 2 15.5 L 20 15.5" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default ToggleButton;
