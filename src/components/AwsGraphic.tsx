"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import { awsHubServices } from "@/lib/content";

const nodes = awsHubServices.map((service, i) => {
  const angle = (i / awsHubServices.length) * Math.PI * 2;
  return {
    ...service,
    x: 50 + 38 * Math.cos(angle),
    y: 50 + 38 * Math.sin(angle),
  };
});

export function AwsGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <div className="glass absolute inset-0 rounded-3xl" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
        {nodes.map((node, i) => (
          <motion.path
            key={node.label}
            d={`M 50 50 L ${node.x} ${node.y}`}
            stroke="url(#aws-line-gradient)"
            strokeWidth="0.4"
            strokeLinecap="round"
            strokeDasharray="2.5 2.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              strokeDashoffset: [0, -10],
            }}
            transition={{
              pathLength: { duration: 1, delay: 0.2 + i * 0.08, ease: "easeOut" },
              opacity: { duration: 0.5, delay: 0.2 + i * 0.08 },
              strokeDashoffset: {
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              },
            }}
          />
        ))}
        <defs>
          <linearGradient
            id="aws-line-gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
          >
            <stop offset="0%" stopColor="#6d6dfb" />
            <stop offset="100%" stopColor="#3fd7e0" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
        style={{ left: "50%", top: "50%" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass flex size-16 items-center justify-center rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] sm:size-20">
          <Cloud className="size-7 text-accent-soft sm:size-8" />
        </div>
        <span className="rounded-full bg-ink/60 px-2.5 py-0.5 text-[11px] font-medium text-muted">
          AWS
        </span>
      </motion.div>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.3 + i * 0.08 },
            scale: { duration: 0.5, delay: 0.3 + i * 0.08 },
            y: {
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            },
          }}
        >
          <div className="glass flex size-11 items-center justify-center rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.3)] sm:size-12">
            <node.icon className="size-4 text-accent-cyan sm:size-5" />
          </div>
          <span className="rounded-full bg-ink/60 px-2 py-0.5 text-[10px] font-medium text-muted">
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
