// eslint-disable-next-line 
import { AnimatePresence, motion } from "framer-motion";
import "./framerMotion.css";
import { useState } from "react";

const MyComponent = ({ img, text, caption }) => {
  const [isOpen, setIsOpen] = useState(false);



/* THIS IS THE ORIGNAL VERSION */

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
        whileHover={{ scale: 1.05 }}
      >

        <motion.h2  className="f-align" >
          {<img className="f-img" src={img} alt="" />}

          {<div className="f-caption">{caption} </div>}
        </motion.h2>
        
        
          {isOpen && (
            <motion.div
              className="f-expand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}  
            >
              <p>{text}</p>
            </motion.div>
          )}

          {!isOpen && (
            <motion.div
            className="f-expand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            > </motion.div>
          )}
      </motion.div>
    </div>
  );
};



export default MyComponent;

