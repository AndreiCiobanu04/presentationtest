import { MotionConfig } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";

interface ReviewCardProps {
  author: string;
  review: string;
  isMobile: boolean;
}

const ReviewCard = ({ author, review, isMobile }: ReviewCardProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container md:text-left text-justify px-10 mb-6 flex flex-col md:flex-row items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <div className=" md:h-[100px] md:w-[100px] h-[100px] md:mr-5 flex items-center justify-center">
          <Image
            className="object-contain"
            width={isMobile ? 75 : 100}
            height={isMobile ? 75 : 100}
            src="/ferrari-cool.png"
            alt="alt"
          />
        </div>
      </div>
      <p className=" md:border-dotted md:border-spacing-y-4 md:border-l-[6px] md:border-white text-[#424244] font-serif text-sm md:text-base px-8 md:px-10 w-[100vw] md:w-[300px]">
        {review}
      </p>
    </motion.div>
  );
};

export default ReviewCard;
