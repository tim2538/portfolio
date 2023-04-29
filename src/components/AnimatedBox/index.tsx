import { Box, SxProps } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedBoxProps {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  sx?: SxProps;
}

export default function AnimatedBox(
  props: React.PropsWithChildren<AnimatedBoxProps>
) {
  const { direction = 'bottom', sx, ...other } = props;

  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const translateValues = {
    left: '-10%',
    right: '10%',
    top: '-10%',
    bottom: '10%'
  };

  const transformEnd =
    direction === 'top' || direction === 'bottom'
      ? `translateY(${translateValues[direction]})`
      : `translateX(${translateValues[direction]})`;

  const transform = isVisible ? 'translateY(0) translateX(0)' : transformEnd;
  const opacity = isVisible ? 1 : 0;

  return (
    <Box
      ref={boxRef}
      {...other}
      sx={{
        ...sx,
        transform,
        opacity,
        transition: 'transform 1s ease-out, opacity 1s ease-out'
      }}
    />
  );
}
