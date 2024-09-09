import React, { useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, type: 'webinar', title: 'Understanding Your Legal Rights', date: '2024-09-15', time: '14:00', speaker: 'Jane Doe, Lawyer', description: 'Learn about your legal rights and how to protect yourself in various situations.' },
    { id: 2, type: 'local', title: 'Self-Defense Workshop', date: '2024-09-20', time: '10:00', location: 'City Community Center', description: 'Hands-on workshop teaching basic self-defense techniques.' },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.type === filter);

  const [newEvent, setNewEvent] = useState({ title: '', type: 'webinar', date: '', time: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = events.length + 1;
    setEvents([...events, { ...newEvent, id: newId }]);
    setNewEvent({ title: '', type: 'webinar', date: '', time: '', description: '' });
  };

  return (
    <div className="events-page text-center bg-gray-50 min-h-screen py-10">
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-4xl font-bold">Events and Workshops</h1>
      </header>

      <main className="p-8">
        {/* Filter Buttons */}
        <div className="filter-buttons mb-8 flex justify-center space-x-4">
          {['all', 'webinar', 'local'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full font-semibold ${
                filter === type ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              } hover:bg-blue-400 hover:text-white transition duration-200`}
            >
              {type === 'all' ? 'All Events' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="event-card bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {event.date} at {event.time}
                  </p>
                  {event.type === 'local' && (
                    <p className="text-sm text-gray-600 mb-1">Location: {event.location}</p>
                  )}
                  {(event.type === 'webinar' || event.type === 'qa') && (
                    <p className="text-sm text-gray-600 mb-1">Speaker: {event.speaker}</p>
                  )}
                  <p className="text-sm text-gray-700 mt-4">{event.description}</p>
                  <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200">
                    Register
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No events available for this category.</p>
          )}
        </div>

        {/* New Event Form */}
        <div className="new-event-form mt-16 max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-6">Suggest a New Event</h3>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              value={newEvent.type}
              onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="webinar">Webinar</option>
              <option value="local">Local Event</option>
              <option value="qa">Q&A Session</option>
            </select>
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="time"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Event Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 h-32"
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200">
              Suggest Event
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Events;
