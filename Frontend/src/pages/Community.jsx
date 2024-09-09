import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
  const features = [
    {
      icon: "📚",
      title: "Articles and Resources",
      description: "Access helpful information",
      link: "/resources",
    },
    {
      icon: "📅",
      title: "Events and Workshops",
      description: "Join community activities",
      link: "/events",
    },
    {
      icon: "❤️",
      title: "Inspirational Stories",
      description: "Read uplifting experiences",
      link: "/Stories",
    },
    {
      icon: "🎓",
      title: "Learning Modules",
      description: "Enhance your knowledge and skills",
      link: "/Modules"
    },
  ];

  return (
    <div className="community-page max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Welcome to Our Community
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card bg-white shadow-xl rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">{feature.description}</p>
            {feature.link ? (
              <Link to={feature.link}>
                <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Explore
                </button>
              </Link>
            ) : (
              <button
                className="bg-gray-400 text-white px-5 py-3 rounded-lg cursor-not-allowed"
                disabled
              >
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
