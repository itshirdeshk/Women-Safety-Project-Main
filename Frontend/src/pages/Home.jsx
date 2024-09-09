import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineRobot,
  AiOutlineAlert,
  AiOutlineFileProtect,
  AiOutlineSafety,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="relative">
        {/* Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="circle bg-blue-400 opacity-50 blur-md"></div>
            <div className="circle bg-red-400 opacity-50 blur-md"></div>
            <div className="circle bg-yellow-400 opacity-50 blur-md"></div>
            <div className="circle bg-green-400 opacity-50 blur-md"></div>
            <div className="circle bg-purple-400 opacity-50 blur-md"></div>
          </div>
        </div>

        <div className="container mx-auto p-4">
          {/* Hero Section */}
          <div
            className="relative bg-cover bg-center h-[60vh] w-full flex flex-col justify-center items-center text-center text-white p-6 mt-6 rounded-lg shadow-lg animate-bg-shift"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/564x/f0/2a/d5/f02ad5979696537aa97f7a38fb446f66.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-85 rounded-lg"></div>

            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Safety, Our Priority
              </h1>
              <h3 className="text-lg md:text-2xl font-medium mb-8">
                Instant access to emergency services, support, and resources.
              </h3>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">
              Empowering Safety Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card */}
              <div className="relative group bg-gradient-to-r from-blue-600 to-purple-700 p-8 h-80 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-black opacity-40 rounded-lg"></div>
                <div className="relative z-10">
                  <AiOutlineRobot className="text-white text-6xl mb-4 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    AI-Powered Chatbot
                  </h3>
                  <p className="text-white">
                    Instantly connect with our AI-powered chatbot for guidance,
                    counseling, and support 24/7.
                  </p>
                </div>
              </div>
              <div className="relative group bg-gradient-to-r from-green-600 to-teal-700 p-8 h-80 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-black opacity-40 rounded-lg"></div>
                <div className="relative z-10">
                  <AiOutlineSafety className="text-white text-6xl mb-4 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Emergency Assistance
                  </h3>
                  <p className="text-white">
                    Quickly access emergency services and alert your contacts with
                    a single tap.
                  </p>
                </div>
              </div>
              <div className="relative group bg-gradient-to-r from-red-600 to-pink-700 p-8 h-80 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-black opacity-40 rounded-lg"></div>
                <div className="relative z-10">
                  <AiOutlineAlert className="text-white text-6xl mb-4 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Report an Incident
                  </h3>
                  <p className="text-white">
                    Easily report incidents and track the status of your case
                    directly through the app.
                  </p>
                </div>
              </div>
              <div className="relative group bg-gradient-to-r from-yellow-600 to-orange-700 p-8 h-80 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-black opacity-40 rounded-lg"></div>
                <div className="relative z-10">
                  <AiOutlineFileProtect className="text-white text-6xl mb-4 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Community Support
                  </h3>
                  <p className="text-white">
                    Join a supportive community of women to share experiences,
                    tips, and advice.
                  </p>
                </div>
              </div>
              <div className="relative group bg-gradient-to-r from-pink-600 to-red-700 p-8 h-80 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-black opacity-40 rounded-lg"></div>
                <div className="relative z-10">
                  <AiOutlineAlert className="text-white text-6xl mb-4 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Red Zone Alerts
                  </h3>
                  <p className="text-white">
                    Receive alerts about high-risk areas and avoid unsafe zones.
                  </p>
                </div>
              </div>
              <div className="relative group bg-gradient-to-r from-purple-600 to-indigo-700 p-8 h-80 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-black opacity-40 rounded-lg"></div>
                <div className="relative z-10">
                  <AiOutlineSafety className="text-white text-6xl mb-4 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Safety Videos
                  </h3>
                  <p className="text-white">
                    Watch educational videos on self-defense, safety tips, and
                    more to stay informed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional styles */}
      <style>
        {`
          .animate-text {
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: textAnimation 4s infinite;
          }

          @keyframes textAnimation {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }

          .animate-fade {
            animation: fadeIn 3s ease-in-out;
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          /* Circle Styles */
          .circle {
            position: absolute;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
            mix-blend-mode: screen;
            pointer-events: none;
          }

          .circle:nth-child(1) {
            top: 20%;
            left: 10%;
            transform: translate(-50%, -50%);
          }

          .circle:nth-child(2) {
            top: 30%;
            right: 15%;
            transform: translate(50%, -50%);
          }

          .circle:nth-child(3) {
            bottom: 20%;
            left: 20%;
            transform: translate(-50%, 50%);
          }

          .circle:nth-child(4) {
            bottom: 30%;
            right: 25%;
            transform: translate(50%, 50%);
          }

          .circle:nth-child(5) {
            top: 50%;
            left: 70%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
    </>
  );
}

export default Home;
