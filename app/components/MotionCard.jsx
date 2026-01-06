import { motion } from "framer-motion";

const MotionCard = ({ title, y, z, bg = "bg-[#e9e9dd]" }) => {
  return (
    <motion.div
      style={{ y }}
      // The card itself is the motion component.
      // It's positioned absolutely within the relative parent in RightCards.jsx
      className={`absolute inset-0 ${z} ${bg} rounded-3xl p-10 flex flex-col justify-end shadow-sm`}
    >
      <h3 className="text-3xl font-medium text-neutral-800">
        {title}
      </h3>

      <p className="mt-4 text-neutral-600">
        High-impact solutions designed to scale your brand effectively.
      </p>

      <a className="mt-6 inline-flex items-center gap-2 text-sm underline text-neutral-800">
        Know More <span>↗</span>
      </a>
    </motion.div>

    //todo add teh smooth animationtion
  );
};

export default MotionCard;
