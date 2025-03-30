'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
// Other imports

import {
  Calendar,
  Clock,
  MapPin,
  IndianRupee,
  Phone,
  Mail,
  Users,
} from 'lucide-react';
import { flagshipEvents, culturalEvent, collaborationEvents } from './events-data';

type EventId = string | number;

interface EventType {
  id: EventId;
  title: string;
  image: string;
  description: string;
  date?: string;
  time?: string;
  venue?: string;
  teamSize?: string;
  fee?: string;
  registrationLink: string;
  coordinators?: Array<{
    name: string;
    phone?: string;
    email?: string;
  }>;
}

interface EventCardProps {
  event: EventType;
  onOpenPopup: (event: EventType) => void;
}

export default function Events() {
  const [popupEvent, setPopupEvent] = useState<EventType | null>(null);

  const openPopup = (event: EventType) => setPopupEvent(event);
  const closePopup = () => setPopupEvent(null);

  const EventCard = ({ event, onOpenPopup }: EventCardProps) => (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-700/50 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full aspect-square object-cover cursor-pointer"
          onClick={() => onOpenPopup(event)}
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <h3 className="text-xl font-bold">{event.title}</h3>
        </div>
      </div>
      <button
        className="p-4 cursor-pointer flex items-center justify-center border-t border-purple-700/30 text-purple-300 hover:text-purple-500"
        onClick={() => onOpenPopup(event)}
      >
        View Details
      </button>
    </div>
  );

  return (
    <main className="min-h-screen text-white relative">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover md:object-center object-top"
          style={{ minHeight: '100vh', minWidth: '100vw' }}
        >
          <source src="/gwback.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <Navbar />

      <section className="relative z-10 container mx-auto px-4 py-16 mt-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Flagship Events</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {flagshipEvents.map((event) => (
            <EventCard key={event.id} event={event} onOpenPopup={openPopup} />
          ))}
        </div>

        <div className="my-16">
          <div className="bg-gradient-to-r from-purple-900/80 to-black/80 backdrop-blur-md rounded-xl p-8 border border-purple-700/50 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">{culturalEvent.title}</h3>
            <p className="text-xl">
              Join us on <strong>{culturalEvent.date} at {culturalEvent.time} at {culturalEvent.venue}</strong> to conclude this amazing week with performances, music, and celebration!
            </p>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Collaboration Events</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collaborationEvents.map((event) => (
            <EventCard key={event.id} event={event} onOpenPopup={openPopup} />
          ))}
        </div>
      </section>

      {popupEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={closePopup}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 rounded-lg w-11/12 max-w-lg p-6 overflow-auto max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
              <img
                src={popupEvent.image}
                alt={popupEvent.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-2 right-2 text-gray hover:text-gray-300 text-3xl font-bold bg-gray-800/75 p-1 rounded-full"
                onClick={closePopup}
              >
                ✗
              </button>
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-4 text-center">{popupEvent.title}</h3>
            <p className="text-gray-300 mb-4">{popupEvent.description}</p>
            <div className="space-y-2 mb-4">
              {popupEvent.date && (
                <div className="flex items-center gap-2 text-purple-300">
                  <Calendar size={16} />
                  <span>{popupEvent.date}</span>
                </div>
              )}
              {popupEvent.time && (
                <div className="flex items-center gap-2 text-purple-300">
                  <Clock size={16} />
                  <span>{popupEvent.time}</span>
                </div>
              )}
              {popupEvent.venue && (
                <div className="flex items-center gap-2 text-purple-300">
                  <MapPin size={16} />
                  <span>{popupEvent.venue}</span>
                </div>
              )}
              {popupEvent.teamSize && (
                <div className="flex items-center gap-2 text-purple-300">
                  <Users size={16} />
                  <span>{popupEvent.teamSize}</span>
                </div>
              )}
              {popupEvent.fee && (
                <div className="flex items-center gap-2 text-purple-300">
                  {popupEvent.fee.includes('₹') ? <IndianRupee size={16} /> : null}
                  <span>{popupEvent.fee}</span>
                </div>
              )}
            </div>
            {popupEvent.coordinators && popupEvent.coordinators.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  {popupEvent.coordinators.length > 1 ? 'Event Coordinators' : 'Event Coordinator'}
                </h4>
                <div className="space-y-3">
                  {popupEvent.coordinators.map((coordinator, idx) => (
                    <div key={idx} className="bg-gray-800/50 p-3 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <p className="font-medium">{coordinator.name}</p>
                        {coordinator.phone && (
                          <div className="flex items-center gap-2 text-sm mt-1 sm:mt-0">
                            <Phone size={14} />
                            <span>{coordinator.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <motion.a
              href={popupEvent.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 px-6 bg-purple-600 hover:bg-purple-500 rounded-lg text-center transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Register Now
            </motion.a>
          </motion.div>
        </div>
      )}
    </main>
  );
}
