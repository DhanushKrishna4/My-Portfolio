import React from 'react';

const ShootingStars = () => {
  const stars = Array.from({ length: 10 });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((_, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            /* Restrict spawn to the top-left 30% of the screen */
            top: `${Math.random() * 30}%`,
            left: `${Math.random() * 30}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;