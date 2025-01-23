import { useEffect, useState } from 'react';

const AnimatedNumbers = ({ count }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const increment = count / 100; // Adjust for animation speed
    const updateCounter = () => {
      setCurrent((prev) => {
        if (prev < count) {
          const nextValue = Math.min(prev + increment, count);
          return nextValue;
        }
        return prev;
      });
    };

    const interval = setInterval(updateCounter, 10); // Update every 10ms
    return () => clearInterval(interval); // Cleanup on unmount
  }, [count]);

  return (
    <span className="counter">{Math.ceil(current)}</span>
  );
};

export default AnimatedNumbers;

