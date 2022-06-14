import { AnimatePresence, motion } from "framer-motion";
import "./framerMotion.css";
import { useState } from "react";

const MyComponent = ({ img, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="f">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="f-card"
        style={{
          borderRadius: "3rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h2 layout="position" >
          {<img className="f-img" src={img} alt="" />}
        </motion.h2>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className = "f-expand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>{text}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MyComponent;
