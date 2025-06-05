// src/components/StepProgressBar.tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import StepItem, { StepStatus } from "./stepItem";
import { ALL_STEPS, StepKey } from "../constants/steps";

interface Props {
  currentStepKey: StepKey;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function StepProgressBar({ currentStepKey }: Props) {
  const activeIndex = ALL_STEPS.findIndex((s) => s.key === currentStepKey);

  return (
    <nav className="w-full bg-background py-4 mb-8">
   
      <motion.ol
        className="max-w-4xl mx-auto flex items-center justify-between overflow-x-auto px-4 pb-4 md:overflow-x-visible"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {ALL_STEPS.map((step, idx) => {
          let status: StepStatus = "upcoming";
          if (idx < activeIndex) status = "completed";
          else if (idx === activeIndex) status = "active";

          const isBefore = idx > 0;
          const isAfter = idx < ALL_STEPS.length - 1;

          return (
            <motion.li
              key={step.key}
              className="flex-shrink-0 flex items-center"
              variants={stepVariants}
            >
              {isBefore && (
                <div
                  className={`h-0.5 w-8 ${
                    idx <= activeIndex ? "bg-primary" : "bg-neutral-300"
                  } mx-2`}
                />
              )}

              <StepItem Icon={step.Icon} label={step.label} status={status} />

              {isAfter && (
                <div
                  className={`h-0.5 w-8 ${
                    idx < activeIndex ? "bg-primary" : "bg-neutral-300"
                  } mx-2`}
                />
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
}
