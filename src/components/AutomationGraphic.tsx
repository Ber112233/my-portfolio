"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Sparkles, Workflow } from "lucide-react";

const nodes = [
  { icon: Database, label: "Datos", x: 8, y: 18 },
  { icon: Workflow, label: "Automatización", x: 50, y: 6 },
  { icon: Sparkles, label: "IA", x: 50, y: 62 },
  { icon: Cloud, label: "Cloud", x: 88, y: 30 },
];

const paths = [
  "M 14 26 C 28 26, 28 16, 46 14",
  "M 14 26 C 28 26, 28 64, 46 68",
  "M 58 14 C 72 14, 72 30, 84 32",
  "M 58 68 C 72 68, 72 36, 84 34",
];

export function AutomationGraphic() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
      <div className="glass absolute inset-0 rounded-3xl" />

      <svg
        viewBox="0 0 100 75"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {paths.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="url(#line-gradient)"
            strokeWidth="0.4"
            strokeLinecap="round"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, strokeDashoffset: [0, -12] }}
            transition={{
              pathLength: { duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" },
              opacity: { duration: 0.6, delay: 0.3 + i * 0.15 },
              strokeDashoffset: {
                duration: 2.4,
                repeat: Infinity,
                ease: "linear",
                delay: 1.2,
              },
            }}
          />
        ))}
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="100" y2="0">
            <stop offset="0%" stopColor="#6d6dfb" />
            <stop offset="100%" stopColor="#3fd7e0" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.2 + i * 0.12 },
            scale: { duration: 0.5, delay: 0.2 + i * 0.12 },
            y: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
          }}
        >
          <div className="glass flex size-14 items-center justify-center rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:size-16">
            <node.icon className="size-6 text-accent-soft sm:size-7" />
          </div>
          <span className="rounded-full bg-ink/60 px-2 py-0.5 text-[11px] font-medium text-muted">
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
