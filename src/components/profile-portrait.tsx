"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function ProfilePortrait({ alt }: { alt: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.figure
      className="portrait-slot"
      initial={reduce ? false : { opacity: 0, scale: 0.97, clipPath: "inset(4% 4% 4% 4% round 24px)" }}
      whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 24px)" }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: reduce ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src="/profile/mahmoud-abdulghani-almaqrami.webp"
        alt={alt}
        fill
        sizes="(max-width: 560px) 82vw, (max-width: 900px) 520px, 36vw"
        className="profile-portrait-image"
      />
    </motion.figure>
  );
}
