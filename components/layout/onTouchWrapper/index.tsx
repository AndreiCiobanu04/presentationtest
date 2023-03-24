import { motion } from "framer-motion";
import { forwardRef, Ref, useRef } from "react";
interface onTouchProps {
  children: any;
  onTouchCallback?: Function;
  className?: string;
  isHovered?: boolean;
  animate?: any;
  exit?: any;
  initial?: any;
}
const OnTouchWrapper = forwardRef(
  (
    {
      children,
      onTouchCallback,
      className = "",
      isHovered,
      animate,
      exit,
      initial,
    }: onTouchProps,
    ref: Ref<any>
  ) => {
    const touchMoveRef = useRef(false);
    return (
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        ref={ref}
        className={className}
        onTouchEnd={() => {
          if (!touchMoveRef?.current) {
            onTouchCallback?.();
          }
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          touchMoveRef.current = false;
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          touchMoveRef.current = true;
        }}
      >
        {children}
      </motion.div>
    );
  }
);

export default OnTouchWrapper;
