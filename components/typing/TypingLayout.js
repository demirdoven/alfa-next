"use client";
import { motion } from "framer-motion";
import AnimText from "./AnimText";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function TypingLayout( {stopTyping} ) {
  return (
    <motion.div 
      className="absolute top-[4px] left-0 z-1 "
      // onClick={ ()=>{ stopTyping() } } 
    >
      <motion.div
        variants={containerVariants}
        animate="visible"
        initial="hidden"
        className="flex h-[50px] flex-col p-2 "
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-2"
        >
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center"
        >
         
        </motion.div>
        <motion.span
          variants={itemVariants}
          className="inline w-full pl-2 text-xl text-slate-900"
        >
          <AnimText delay={1} />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
