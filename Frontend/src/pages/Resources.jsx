import React from "react";

const articles = [
  {
    title: "Safety Tips for Women",
    description: "Learn essential safety tips to protect yourself in various situations.",
    link: "/articles/safety-tips",
  },
  {
    title: "Understanding Your Legal Rights",
    description: "A comprehensive guide to understanding your legal rights as a woman.",
    link: "/articles/legal-rights",
  },
  {
    title: "Self-Defense Techniques",
    description: "Explore effective self-defense techniques that every woman should know.",
    link: "/articles/self-defense",
  },
];

const resources = [
  {
    title: "Mental Health Support",
    description: "Access resources for mental health support and coping strategies.",
    link: "/resources/mental-health",
  },
  {
    title: "Local Support Groups",
    description: "Find local support groups and community resources available to you.",
    link: "/resources/support-groups",
  },
  {
    title: "Emergency Contacts",
    description: "Important emergency contacts and hotlines for immediate assistance.",
    link: "/resources/emergency-contacts",
  },
];

const Resources = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white bg-blue-600 p-4 rounded mb-6 text-center w-full">
          Articles and Resources
        </h1>
        <div className="w-full gap-6">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-center">Articles</h2>
            <div className="grid grid-cols-1 gap-4">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 text-center"
                >
                  <h3 className="text-xl font-bold mb-2">
                    <a href={article.link} className="text-blue-600 hover:underline">
                      {article.title}
                    </a>
                  </h3>
                  <p>{article.description}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">Resources</h2>
            <div className="grid grid-cols-1 gap-4">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 text-center"
                >
                  <h3 className="text-xl font-bold mb-2">
                    <a href={resource.link} className="text-blue-600 hover:underline">
                      {resource.title}
                    </a>
                  </h3>
                  <p>{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
