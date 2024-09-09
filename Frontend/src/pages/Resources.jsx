import React from "react";
import { ExternalLink, BookOpen, LifeBuoy } from "lucide-react"; // Icons for enhancing UI

const articles = [
  {
    title: "Safety Tips for Women",
    description: "Learn essential safety tips to protect yourself in various situations.",
    link: "https://safetyfirst.blog/women-safety-tips/",
  },
  {
    title: "Understanding Your Legal Rights",
    description: "A comprehensive guide to understanding your legal rights as a woman.",
    link: "https://blog.ipleaders.in/eight-important-rights-every-indian-woman-know/#:~:text=Every%20woman%20has%20the%20right,intent%20to%20disrobe%20her%20(Sec",
  },
  {
    title: "Self-Defense Techniques",
    description: "Explore effective self-defense techniques that every woman should know.",
    link: "https://www.healthline.com/health/womens-health/self-defense-tips-escape#8-moves-to-try",
  },
];

const resources = [
  {
    title: "Mental Health Support",
    description: "Access resources for mental health support and coping strategies.",
    link: "https://www.nimh.nih.gov/health/topics/women-and-mental-health",
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
      <div className="w-full max-w-5xl flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-white bg-blue-600 p-4 rounded mb-6 text-center w-full shadow-md">
          Articles and Resources
        </h1>

        {/* Articles Section */}
        <div className="w-full mb-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
            <BookOpen className="inline-block mr-2 text-blue-700" />
            Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 text-center border-t-4 border-blue-500 hover:border-blue-700"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-700">
                  <a
                    href={article.link}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title} <ExternalLink className="inline-block ml-2" size={16} />
                  </a>
                </h3>
                <p className="text-gray-700">{article.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
            <LifeBuoy className="inline-block mr-2 text-green-700" />
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 text-center border-t-4 border-green-500 hover:border-green-700"
              >
                <h3 className="text-xl font-bold mb-4 text-green-700">
                  <a
                    href={resource.link}
                    className="text-green-600 hover:underline"
                    target={resource.link.startsWith("/") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {resource.title} <ExternalLink className="inline-block ml-2" size={16} />
                  </a>
                </h3>
                <p className="text-gray-700">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
