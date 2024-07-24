import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface AnimatedNumberProps {
    value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [number, setNumber] = useState(0);

  const props = useSpring({
    number: value,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    setNumber(value);
  }, [value]);

  return <animated.h1 className='text-[25px] lg:text-[75px] font-bold text-[#FFE3B3]'>{props.number.to((n) => `$${n.toFixed(0)}`)}</animated.h1>;
};

export default AnimatedNumber;
