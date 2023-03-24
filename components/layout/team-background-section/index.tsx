import Image from "next/image";
import { motion } from "framer-motion";
const variantContent = {
  animate: {
    transition: { staggerChildren: 0.3 },
  },
};

const variantTitle = {
  initial: { y: 0, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.75,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputs = {
  initial: { y: 0, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.75,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const image = (delay) => ({
  initial: { y: 0, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.75,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});
const TeamBackgroundSection = ({ img, isMobile, children = null }) => {
  return (
    <>
      <motion.div
        variants={variantContent}
        animate="animate"
        initial="initial"
        className="justify-center flex w-full h-full font"
      >
        <motion.div
          className="w-full h-full relative sm:static"
          variants={image(isMobile ? 0 : 0.5)}
        >
          <Image
            priority
            loading="eager"
            src="/ferrari-cool.jpg"
            alt="What we do"
            fill
            className="object-fill"
          />
        </motion.div>
        {children}
      </motion.div>
    </>
  );
};

export default TeamBackgroundSection;
