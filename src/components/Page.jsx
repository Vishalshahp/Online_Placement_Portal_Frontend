import React from "react";
import { motion } from "framer-motion";

export function Page({ title, sub, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="page-head">
        <div>
          <div className="eyebrow">STUDENT PORTAL</div>
          <h1>{title}</h1>
          <p>{sub}</p>
        </div>
      </div>
      {children}
    </motion.div>
  );
}
