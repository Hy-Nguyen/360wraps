'use client';

import { motion, SVGMotionProps, Transition } from 'framer-motion';

interface Props extends SVGMotionProps<any> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
}

export default function MenuButton({
  isOpen,
  width = 28,
  height = 28,
  strokeWidth = 1,
  color = '#fff',
  transition = { delay: 0 },
  ...props
}: Props) {
  return (
    <motion.svg
      viewBox={`0 0 24 24`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="w-full cursor-pointer pl-3 xl:pl-0"
    >
      <motion.path
        d="M2 4H22"
        stroke="#fff"
        stroke-width="3"
        stroke-linecap="round"
        animate={isOpen ? { rotate: 45, translateY: '45%' } : { rotate: 0, translateY: 0 }}
      />
      <motion.path
        d="M2 12H22"
        stroke="#fff"
        stroke-width="3"
        stroke-linecap="round"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.path
        d="M2 20H22"
        stroke="#fff"
        stroke-width="3"
        stroke-linecap="round"
        animate={isOpen ? { rotate: -45, translateY: '-25%' } : { rotate: 0, translateY: 0 }}
      />
    </motion.svg>
  );
}
