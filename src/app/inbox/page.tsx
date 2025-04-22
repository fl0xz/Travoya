'use client';

import { useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';

// Mock data for conversations
const mockConversations = [
  {
    id: '1',
    host: {
      name: 'Maria Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
    },
    villa: {
      title: 'Luxury Villa with Private Pool',
      location: 'Playa Blanca, Spain',
      imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2940&auto=format&fit=crop',
      price: 250,
    },
    checkIn: '2025-08-10',
    checkOut: '2025-08-17',
    guests: 4,
    messages: [
      { id: 'm1', sender: 'host', content: 'Hi there! Let me know your questions.', timestamp: '10:00 AM' },
      { id: 'm2', sender: 'guest', content: 'Hello! Can we check in early?', timestamp: '10:05 AM' },
    ],
  },
  {
    id: '2',
    host: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=2787&auto=format&fit=crop',
    },
    villa: {
      title: 'Beachfront Villa Escape',
      location: 'Puerto del Carmen, Spain',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
      price: 420,
    },
    checkIn: '2025-09-01',
    checkOut: '2025-09-08',
    guests: 2,
    messages: [
      { id: 'm1', sender: 'guest', content: 'Is the beachfront accessible?', timestamp: '08:30 AM' },
      { id: 'm2', sender: 'host', content: 'Yes, it is just a few steps away.', timestamp: '08:45 AM' },
    ],
  },
];

export default function InboxPage() {
  const [conversations] = useState(mockConversations);
  const [selectedId, setSelectedId] = useState(conversations[0].id);
  const selected = conversations.find(c => c.id === selectedId)!;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex flex-1 overflow-hidden">
        {/* Left: Conversations List */}
        <aside className="w-1/4 bg-white border-r border-gray-200 overflow-y-auto">
          {conversations.map(conv => (
            <div
              key={conv.id}
              onClick={() => setSelectedId(conv.id)}
              className={`p-4 cursor-pointer hover:bg-gray-100 flex items-center space-x-3 ${conv.id === selectedId ? 'bg-gray-100' : ''}`}
            >
              <img src={conv.host.avatar} alt={conv.host.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-grow">
                <h4 className="font-medium text-gray-800">{conv.host.name}</h4>
                <p className="text-sm text-gray-500 truncate">{conv.villa.title}</p>
              </div>
            </div>
          ))}
        </aside>

        {/* Middle: Message Thread */}
        <section className="flex-grow bg-white p-6 overflow-y-auto">
          <div className="flex items-center space-x-4 border-b border-gray-200 pb-4 mb-4">
            <img src={selected.host.avatar} alt={selected.host.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{selected.host.name}</h3>
              <p className="text-sm text-gray-500">Your message thread</p>
            </div>
          </div>
          <div className="space-y-4">
            {selected.messages.map(msg => (
              <div
                key={msg.id}
                className={`max-w-xl ${msg.sender === 'guest' ? 'ml-auto text-right' : 'mr-auto text-left'}`}
              >
                <div className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'guest' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} `}>
                  {msg.content}
                </div>
                <div className="text-xs text-gray-400 mt-1">{msg.timestamp}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <textarea
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 resize-none h-24"
            />
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </div>
        </section>

        {/* Right: Villa Details */}
        <aside className="w-1/4 bg-white border-l border-gray-200 p-6 overflow-y-auto">
          <img src={selected.villa.imageUrl} alt={selected.villa.title} className="w-full h-32 object-cover rounded-lg" />
          <h4 className="mt-4 font-semibold text-gray-900">{selected.villa.title}</h4>
          <p className="text-sm text-gray-500">{selected.villa.location}</p>
          <div className="mt-4 space-y-2 text-gray-800 text-sm">
            <p><span className="font-medium">Dates:</span> {selected.checkIn} to {selected.checkOut}</p>
            <p><span className="font-medium">Guests:</span> {selected.guests}</p>
            <p><span className="font-medium">Price:</span> £{selected.villa.price}/night</p>
          </div>
        </aside>
      </main>
    </div>
  );
} 