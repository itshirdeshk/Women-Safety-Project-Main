import React from "react";

const RotatingTextBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="animate-text">
          <div className="text-6xl font-bold text-white whitespace-nowrap">
            <p className="block">Empowering Safety Features</p>
            <p className="block">Instant Access to Emergency Services</p>
            <p className="block">AI-Powered Support 24/7</p>
            <p className="block">Join a Supportive Community</p>
            <p className="block">Stay Informed with Safety Videos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RotatingTextBackground;
