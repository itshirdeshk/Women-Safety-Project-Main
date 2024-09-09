import React, { useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, type: 'webinar', title: 'Understanding Your Legal Rights', date: '2024-09-15', time: '14:00', speaker: 'Jane Doe, Lawyer', description: 'Learn about your legal rights and how to protect yourself in various situations.' },
    { id: 2, type: 'local', title: 'Self-Defense Workshop', date: '2024-09-20', time: '10:00', location: 'City Community Center', description: 'Hands-on workshop teaching basic self-defense techniques.' },
    { id: 3, type: 'qa', title: 'Mental Health Q&A', date: '2024-09-25', time: '18:00', speaker: 'Dr. Emily Smith, Psychologist', description: 'Live Q&A session on coping with stress and anxiety.' },
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
    <div className="events-workshops-page text-center">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Events and Workshops</h1>
      </header>

      <main className="p-4">
        <div className="filter-buttons mb-4">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2 rounded mr-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            All Events
          </button>
          <button 
            onClick={() => setFilter('webinar')} 
            className={`px-4 py-2 rounded mr-2 ${filter === 'webinar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Webinars
          </button>
          <button 
            onClick={() => setFilter('local')} 
            className={`px-4 py-2 rounded mr-2 ${filter === 'local' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Local Events
          </button>
          <button 
            onClick={() => setFilter('qa')} 
            className={`px-4 py-2 rounded ${filter === 'qa' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Q&A Sessions
          </button>
        </div>

        <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="p-4">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-600">
                  {event.date} at {event.time}
                </p>
                {event.type === 'local' && (
                  <p className="text-sm text-gray-600">Location: {event.location}</p>
                )}
                {(event.type === 'webinar' || event.type === 'qa') && (
                  <p className="text-sm text-gray-600">Speaker: {event.speaker}</p>
                )}
                <p className="mt-2 text-sm">{event.description}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="new-event-form mt-8">
          <h3 className="text-lg font-semibold mb-2">Suggest a New Event</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
            <select
              value={newEvent.type}
              onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
              className="w-full p-2 border rounded"
              required
            >
              <option value="webinar">Webinar</option>
              <option value="local">Local Event</option>
              <option value="qa">Q&A Session</option>
            </select>
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="time"
              value={newEvent.time}
              onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              placeholder="Event Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
              className="w-full p-2 border rounded h-32"
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Suggest Event
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Events;
