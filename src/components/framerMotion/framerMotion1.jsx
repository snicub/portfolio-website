import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import "./framerMotion.css";

function Content({img, caption, disabled}){
    return(
        <motion.h1
            className = "title"
            layoutId= "title"
            style = {{opactiy: disabled ? 0.2 : 1 }}
        >
        {img}
        {caption}
        </motion.h1> 
    );
}

function ExpandedCard({text, onCollapse}) {
    return(

        <>
        <motion.div
        classname = "card expanded"
        layoutId = "expandable-card"
        onClick = {onCollapse}
        > 
        {text}
        
        </motion.div>
        <motion.p   
            className = "card expanded secondary"
            onClick = {onCollapse}
            transition = {{ delay: 0.3}}
            initial = {{opacity : 0, top: "6rem"}}
            animate = {{ opactiy: 1, top: "3rem"}}
            >
                
            </motion.p>
            
    )


}
