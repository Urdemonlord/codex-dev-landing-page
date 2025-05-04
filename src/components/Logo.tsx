import React from 'react';
import logoImage from '../images/logo.png';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center">
      <div className="relative">
        <img
          src={logoImage}
          alt="Codex Logo"
          className="h-24 md:h-32"
          width="auto"
          height="auto"
          style={{
            objectFit: 'contain',
            maxWidth: 'none',
            filter: 'brightness(1.1)'
          }}
        />
      </div>
    </a>
  );
};

export default Logo;