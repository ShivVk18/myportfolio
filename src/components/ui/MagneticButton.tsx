"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  distance?: number;
}

export const MagneticButton = ({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  distance = 0.35,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const xSpring = useSpring(0, { damping: 20, stiffness: 180 });
  const ySpring = useSpring(0, { damping: 20, stiffness: 180 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * distance;
    const deltaY = (e.clientY - centerY) * distance;

    xSpring.set(deltaX);
    ySpring.set(deltaY);
  };

  const handleMouseEnter = () => {};

  const handleMouseLeave = () => {
    xSpring.set(0);
    ySpring.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block cursor-pointer ${className}`}
      data-cursor="pointer"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick}>
        {content}
      </a>
    );
  }

  return <div onClick={onClick}>{content}</div>;
};
