import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import OnTouchWrapper from "components/layout/onTouchWrapper";
import { motion } from "framer-motion";

const CardLegal = ({ title, description, img, link }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState<boolean>();
  return (
    <div
      className="cursor-pointer relative w-80 h-80 m-auto rounded-3xl overflow-hidden shadow-3xl group"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <OnTouchWrapper
        onTouchCallback={() => setIsHovered(!isHovered)}
        className="p-10 absolute inset-0 z-10 bg-[#f5e204] flex flex-col justify-center items-center text-center"
        isHovered={isHovered}
        animate={{
          rotateY: isHovered ? 0 : 90,
          transition: { duration: 0.5, delay: isHovered ? 0.5 : 0 },
        }}
        initial={{ rotateY: 90 }}
        exit={{ rotateY: 90 }}
      >
        <p className="text-black text-2xl font-bold">{title}</p>
        {/* <p className="text-black text-xl">{description}</p> */}
      </OnTouchWrapper>
      <OnTouchWrapper
        className="h-full"
        onTouchCallback={() => setIsHovered(!isHovered)}
      >
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{
            rotateY: isHovered ? 90 : 0,
            transition: { duration: 0.5, delay: isHovered ? 0 : 0.5 },
          }}
          exit={{ rotateY: 0 }}
          className="h-full"
        >
          <Image
            src="/ferrari-cool.png"
            alt="What we do"
            className="object-fill h-full"
            width={320}
            height={332}
          />
        </motion.div>
      </OnTouchWrapper>
    </div>
    // </Link>
  );
};
export default CardLegal;
