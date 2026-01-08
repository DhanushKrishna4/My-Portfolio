import React from 'react';

const ShootingStars = () => {
  // Fewer elements for lightning to keep it from being distracting
  const strikes = Array.from({ length: 4 });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {strikes.map((_, i) => (
        <div
          key={i}
          className="lightning-strike"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 10}%`,
            animationDelay: `${Math.random() * 7}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;