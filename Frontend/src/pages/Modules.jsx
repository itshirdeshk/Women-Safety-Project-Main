import React from "react";

const Modules = () => {
  return (
    <div className="safety-video-section max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        How to Stay Safe in Critical Situations
      </h2>
      <div className="relative pb-9/16">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Safety Tips Video"
        ></iframe>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Watch this video to learn essential safety tips and strategies to
          protect yourself in critical situations. Remember, being prepared is
          key to ensuring your safety.
        </p>
      </div>
    </div>
  );
};

export default Modules;
