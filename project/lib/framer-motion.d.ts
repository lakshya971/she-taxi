declare module 'framer-motion' {
  import * as React from 'react';

  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileFocus?: any;
    whileDrag?: any;
    whileInView?: any;
    viewport?: any;
  }

  export type Motion = {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      AnimationProps & JSX.IntrinsicElements[K] & React.RefAttributes<Element>
    >;
  };

  export const motion: Motion;
  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    custom?: any;
    initial?: boolean;
    exitBeforeEnter?: boolean;
    onExitComplete?: () => void;
  }>;
}