import { PortableTextReactComponents } from "@portabletext/react/src/types";
import { motion } from "framer-motion";

const variantContent = {
  animate: {
    transition: { staggerChildren: 0.3 },
  },
};

const inputs = (index) => ({
  initial: { y: 0, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: index * 1.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});

const components: Partial<PortableTextReactComponents> = {
  block: {
    // Ex. 1: customizing common block types
    h2: ({ children, index }) => (
      <motion.h2 variants={inputs(index)} className="text-3xl my-10">
        {children}
      </motion.h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
    normal: ({ children, index }) => (
      <motion.p variants={inputs(index)} className="text-xl my-10">
        {children}
      </motion.p>
    ),
    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <motion.ul
        className="list-disc pl-5 my-10"
        variants={variantContent}
        animate="animate"
        initial="initial"
      >
        {children}
      </motion.ul>
    ),
    number: ({ children }) => <ol className="list-decimal">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children, index }) => (
      <motion.li variants={inputs(index)} className="text-xl">
        {children}
      </motion.li>
    ),
  },
};

export default components;
