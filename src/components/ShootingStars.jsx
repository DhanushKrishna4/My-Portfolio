import React from 'react';

const ShootingStars = () => {
  // Restored to 10 stars for a more active background
  const stars = Array.from({ length: 10 });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((_, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;