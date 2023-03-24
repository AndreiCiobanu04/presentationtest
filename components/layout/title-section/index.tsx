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
const TitleSection = ({
  img,
  title = "",
  isMobile,
  dateCreated = "",
  author = false,
  children = null,
}) => {
  return (
    <>
      <motion.div
        className="sm:w-1/2 sm:mr-24"
        variants={variantContent}
        animate="animate"
        initial="initial"
      >
        <motion.h1
          className="mt-10 sm:mt-0 text-4xl bold"
          variants={variantTitle}
        >
          {title}
        </motion.h1>
        {author && (
          <motion.p variants={variantTitle} className="mt-5 font-semibold">
            Authors: J.K Rowling
          </motion.p>
        )}
        {dateCreated && (
          <motion.p variants={variantTitle} className="mt-5">
            Date: {dateCreated}
          </motion.p>
        )}
        <motion.div className="mt-5" variants={inputs}>
          {children}
        </motion.div>
      </motion.div>
      <motion.div
        variants={variantContent}
        animate="animate"
        initial="initial"
        className="sm:w-1/2 justify-center flex"
      >
        <motion.div
          className="h-[340px] sm:h-[300px]"
          variants={image(isMobile ? 0 : 0.5)}
        >
          <Image
            priority
            loading="eager"
            src="/ferrari-cool.png"
            alt="What we do"
            width={325}
            height={325}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default TitleSection;
