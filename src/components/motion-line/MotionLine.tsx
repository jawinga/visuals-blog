import "./MotionLine.scss";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
type EasingName = "linear" | "easeIn" | "easeOut" | "easeInOut";

interface MotionLineProps {
  title: string;
  description: string;
  easing: EasingName;
}

const EASES: Record<EasingName, [number, number, number, number]> = {
  linear: [0.0, 0.0, 1.0, 1.0],
  easeIn: [0.42, 0.0, 1.0, 1.0],
  easeOut: [0.0, 0.0, 0.58, 1.0],
  easeInOut: [0.42, 0.0, 0.58, 1.0],
};

const MotionLine = ({ title, description, easing }: MotionLineProps) => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 300 },
  };

  const transition: Transition = {
    type: "tween",
    duration: 1.5,
    ease: EASES[easing],
    repeat: Infinity,
    repeatDelay: 0.5,
    repeatType: "reverse",
  };

  return (
    <div className="line-container">
      <div className="motion-labels">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="motion-line-track">
        <motion.div
          className="motion-line-box"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={transition}
          style={{ willChange: "transform" }}
        />
      </div>
    </div>
  );
};

export default MotionLine;
