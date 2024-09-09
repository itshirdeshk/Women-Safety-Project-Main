import React, { useState } from "react";
import { Play, ChevronDown, ChevronUp } from "lucide-react";

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Basic Self-Defense Techniques",
      category: "Self-Defense",
      duration: "15:30",
      youtubeId: "HIoj7DHmuEI",
    },
    {
      id: 2,
      title: "Advanced Martial Arts Moves",
      category: "Self-Defense",
      duration: "20:45",
      youtubeId: "FQxa9Cj7KAE",
    },
    {
      id: 3,
      title: "Self-Defense for Women",
      category: "Self-Defense",
      duration: "18:20",
      youtubeId: "HnQ2uv0GjDM",
    },
    {
      id: 4,
      title: "Effective Learning Strategies",
      category: "Learning",
      duration: "12:15",
      youtubeId: "ZUrr5MU4Z4Y",
    },
    {
      id: 5,
      title: "Memory Improvement Techniques",
      category: "Learning",
      duration: "16:40",
      youtubeId: "JbLAGpQ9RXg",
    },
    {
      id: 6,
      title: "Self-Defense for Beginners",
      category: "Self-Defense",
      duration: "22:10",
      youtubeId: "KVpxP3ZZtAc",
    },
  ];

  const visibleVideos = showAllVideos ? videos : videos.slice(0, 5);

  const VideoCard = ({ video }) => (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <div className="relative">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity hover:bg-opacity-60">
          <Play size={48} className="text-white opacity-80" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
        <p className="text-gray-500 mb-2">{video.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{video.duration}</span>
          <button
            onClick={() => setSelectedVideo(video)}
            className="bg-blue-500 text-white px-4 py-1 rounded-lg shadow hover:bg-blue-600 transition-colors"
          >
            Watch
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      
      <h2 className="text-4xl font-bold text-center mb-10 bg-blue-600 text-white p-4 rounded">
        Self-Defense and Learning Videos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      {videos.length > 5 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAllVideos(!showAllVideos)}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors inline-flex items-center"
          >
            {showAllVideos ? (
              <>
                <ChevronUp size={20} className="mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={20} className="mr-2" />
                Show More Videos
              </>
            )}
          </button>
        </div>
      )}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {selectedVideo.title}
            </h3>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              ></iframe>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
