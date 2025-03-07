import { useState } from "react";
import { motion } from "framer-motion";

export default function GrowingCircle() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100 relative">
      <div className="relative w-[500px] h-[250px] flex items-center">
        {/* Dashed Arrow Line */}
        <div className="absolute top-1/2 left-10 right-10 border-dashed border-t-2 border-black"></div>

        {/* Circles Transition */}
        { [60, 90, 120, 150, 180, 200].map((size, index) => (
          <motion.div
            key={index}
            initial={{ width: "60px", height: "60px", left: "0px" }}
            animate={animate ? { width: `${size}px`, height: `${size}px`, left: `${index * 50}px` } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`absolute rounded-full ${index === 0 || index === 5 ? "bg-blue-500" : "bg-blue-300"}`}
          ></motion.div>
        ))}

        {/* Labels */}
        
        <div className="absolute left-0 top-[60px] text-black text-sm">60px</div>
        <div className="absolute right-0 top-[60px] text-black text-sm">300px</div>
        <div className="absolute left-0 bottom-[-40px] text-black text-sm">Initial State</div>
        <div className="absolute right-0 bottom-[-40px] text-black text-sm">Final State</div>

        {/* Animate Button */}
        <button
          onClick={() => setAnimate(!animate)}
          className="absolute bottom-[-80px] left-[50%] transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Animate
        </button>
      </div>
    </div>
  );
}
