'use client'
import { useState, useRef, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar, Clock, MapPin, ChevronDown, Users, ArrowRight, Image as ImageIcon,
  ChevronLeft, ChevronRight, X, Star, Phone, Trophy, DollarSign,
  ArrowUpRight,
  Play
} from 'lucide-react'
import { eventCategories } from './eventData'
import { upcomingEvents } from './eventData'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Events() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeYear, setActiveYear] = useState<{ [key: number]: string | number }>({});

  interface Event {
    title: string;
    participants?: number;
    description: string;
    status: string;
    poster: string;
    date?: string;
    time?: string;
    location?: string;
    category?: string;
    registrationLink?: string;
    images?: string[];
    registrationFee?: string;
    prizePool?: string;
    coordinators?: { name: string, number: string }[];
  }

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Initialize active year for each category
  useEffect(() => {
    const initialActiveYears: { [key: number]: string | number } = {};
    eventCategories.forEach((category, index) => {
      if (category.years && category.years.length > 0) {
        initialActiveYears[index] = category.years[0].year;
      }
    });
    setActiveYear(initialActiveYears);
  }, []);

  // Get events for active category and year
  const getActiveEvents = () => {
    const category = eventCategories[activeCategory];
    if (!category.years || category.years.length === 0) return [];

    const currentYear = activeYear[activeCategory];
    const yearData = category.years.find(y => y.year === currentYear);

    return yearData ? yearData.events : [];
  };

  const currentEvents = getActiveEvents();

  return (

    <>
      <Head>
        <title>Event Gallery | Gradient AIML</title>
        <meta name="description" content="View the highlights of past events organized by Gradient AIML at BMSCE. Discover workshops, talks, and more." />
        <meta name="keywords" content="Event Gallery, Gradient AIML, AI events, Machine Learning events, BMSCE, AI workshops gallery" />
        <meta property="og:title" content="Event Gallery | Gradient AIML" />
        <meta property="og:description" content="Relive the moments from past events hosted by Gradient AIML through our event gallery." />
        <meta property="og:image" content="https://gradient-content-server.vercel.app/content/Logo.png" />        <meta name="twitter:card" content="summary_large_image" />
      </Head>


      <div className="min-h-screen text-white" style={{ backgroundColor: '#180336' }}>
        {/* Google Fonts Import */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
        
        .righteous-regular {
          font-family: "Righteous", sans-serif;
          font-weight: 400;
          font-style: normal;
        }
        
        .bree-serif-regular {
          font-family: "Bree Serif", serif;
          font-weight: 400;
          font-style: normal;
        }
        
        .event-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Square event card */
        .event-poster-container {
          position: relative;
          overflow: hidden;
          padding-bottom: 100%; /* Creates a square aspect ratio */
          width: 100%;
        }

        .event-poster-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

        {/* Background pattern */}
        <div className="fixed inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, rgb(127, 111, 168) 1px, transparent 1px), linear-gradient(to bottom, rgb(127, 111, 168) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundColor: '#180336'
          }} />

        <Navbar />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mt-6 md:mt-10 bree-serif-regular">
              <span style={{ color: '#ffffff', opacity: 1 }}>Event </span>
              <span style={{ color: '#C4B5FD', opacity: 1 }}>Gallery</span>
            </h1>
            <p className="text-2xl md:text-2xl mt-6 md:mt-8 font-light mx-auto max-w-3xl" style={{ color: '#DDD6FE' }}>
              Explore our dynamic collection of workshops, hackathons, and technical showcases
            </p>
          </motion.div>

          {/* Upcoming Events Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-24 relative"
          >
            <div className="flex items-center justify-center mb-12">
              <div className="w-16 h-1 bg-purple-500" />
              <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                Upcoming Events
              </h2>
              <div className="w-16 h-1 bg-purple-500" />
            </div>

            <div className={`
    flex flex-col gap-6 py-4
    ${upcomingEvents.length === 1
                ? 'md:flex-row md:justify-center'
                : upcomingEvents.length === 2
                  ? 'md:flex-row md:justify-center md:gap-8'
                  : 'md:flex-row'
              }
  `}>
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={`upcoming-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`
          w-full
          ${upcomingEvents.length === 1
                      ? 'md:w-1/2 md:max-w-md'
                      : upcomingEvents.length === 2
                        ? 'md:w-2/5 md:max-w-lg'
                        : 'md:w-1/3'
                    }
        `}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div
                    className="relative group cursor-pointer bg-purple-950/90 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
                  >
                    {/* Event status badge */}
                    {event.status && (
                      <div className="absolute top-3 right-3 z-20">
                        {event.status === "registration-open" && (
                          <span className="px-3 py-1 text-xs font-medium bg-purple-600 text-white rounded-full border border-purple-400/30 shadow-md">
                            Registration Open
                          </span>
                        )}
                        {event.status === "coming-soon" && (
                          <span className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full border border-blue-400/30 shadow-md">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    )}

                    {/* Event image - Square aspect ratio */}
                    {event.poster && (
                      <div className="event-poster-container">
                        <img
                          src={event.poster}
                          alt={event.title}
                          className="event-poster-image transition-transform duration-700 scale-100 group-hover:scale-110"
                        />
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <Star size={16} className="text-yellow-400" fill="#FBBF24" />
                        <span className="text-yellow-200 text-sm font-medium">{event.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {event.title}
                      </h3>

                      {/* Registration fee and prize pool for upcoming events - ENHANCED */}
                      <div className="text-purple-200 mb-4 flex-1">
                        {event.registrationFee && (
                          <div className="flex items-center gap-2 mb-2 bg-purple-800/40 p-2 rounded-lg">
                            <DollarSign size={18} className="text-purple-300" />
                            <span className="font-medium">Registration: <span className="text-white">{event.registrationFee}</span></span>
                          </div>
                        )}
                        {event.prizePool && (
                          <div className="flex items-center gap-2 mb-2 bg-purple-800/40 p-2 rounded-lg">
                            <Trophy size={18} className="text-yellow-300" />
                            <span className="font-medium">Prize Pool: <span className="text-yellow-100">{event.prizePool}</span></span>
                          </div>
                        )}
                        {event.date && (
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar size={16} className="text-purple-400" />
                            <span>{event.date}</span>
                          </div>
                        )}
                      </div>

                      {/* "Explore" button at the bottom */}
                      <div className="flex items-center justify-center bg-purple-700/30 rounded-lg py-3 px-4 gap-2 group-hover:bg-purple-700/50 transition-colors duration-300 mt-auto">
                        <ArrowRight size={18} className="text-purple-300" />
                        <span className="text-base font-medium text-purple-200">Explore</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-1 bg-purple-500" />
            <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
              Past Events
            </h2>
            <div className="w-16 h-1 bg-purple-500" />
          </div>
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative bg-purple-950/90 p-8 rounded-lg shadow-lg border border-purple-800/30">
              <div className="relative z-10 flex gap-4 justify-center flex-wrap">
                {eventCategories.map((category, index) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(index)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium shadow-md ${activeCategory === index
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-900/80 text-purple-100 hover:bg-purple-800'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Year Selection Tabs */}
          {eventCategories[activeCategory]?.years && eventCategories[activeCategory].years.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center gap-3 mb-8"
            >
              {eventCategories[activeCategory].years.map((yearData) => (
                <button
                  key={yearData.year}
                  onClick={() => setActiveYear({ ...activeYear, [activeCategory]: yearData.year })}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${activeYear[activeCategory] === yearData.year
                    ? 'bg-purple-600 text-white font-medium shadow-md'
                    : 'bg-purple-900/70 text-purple-200 hover:bg-purple-800 hover:text-white'
                    }`}
                >
                  {yearData.year}
                </button>
              ))}
            </motion.div>
          )}

          {/* Active Category Section */}
          <motion.section
            key={`category-${activeCategory}-${activeYear[activeCategory]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold righteous-regular mb-2 text-white">
                  {eventCategories[activeCategory].name} {activeYear[activeCategory] && `- ${activeYear[activeCategory]}`}
                </h2>
                <div className="w-24 h-1 bg-purple-500" />
              </div>
            </div>

            <p className="text-lg text-purple-100 mb-10 max-w-10xl">
              {eventCategories[activeCategory].description}
            </p>

            {/* Events Grid - Square aspect ratio cards */}
            <div className="event-card-grid mb-10">
              {currentEvents.map((event, index) => (
                <motion.div
                  key={`${event.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedEvent(event)}
                  className="cursor-pointer"
                >
                  <div className="group h-full bg-purple-950/90 relative overflow-hidden border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 rounded-lg shadow-lg flex flex-col">
                    {/* Event status badge */}
                    {event.status === "completed" && (
                      <div className="absolute top-3 right-3 z-20">
                        <span className="px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-full shadow-sm">
                          Completed
                        </span>
                      </div>
                    )}

                    {/* Event image - Square aspect ratio */}
                    {event.poster && (
                      <div className="event-poster-container">
                        <img
                          src={event.poster}
                          alt={event.title}
                          className="event-poster-image transition-transform duration-700 scale-100 group-hover:scale-110"
                        />
                      </div>
                    )}

                    {/* Event title */}
                    <div className="relative z-10 p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-3">
                        {event.title}
                      </h3>

                      {/* "Explore" button at the bottom */}
                      <div className="flex items-center justify-center bg-purple-700/30 rounded-lg py-3 px-4 gap-2 group-hover:bg-purple-700/50 transition-colors duration-300 mt-auto">
                        <ArrowRight size={18} className="text-purple-300" />
                        <span className="text-base font-medium text-purple-200">Explore</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Event Detail Modal - Fixed width for better image display */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-purple-950 rounded-xl max-h-[90vh] overflow-y-auto shadow-2xl w-full"
                style={{ maxWidth: "1200px" }}
                onClick={e => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 z-20 text-purple-300 hover:text-white transition-colors p-2 bg-purple-900/80 rounded-full shadow-md"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row">
                  {/* Left side with image - Increased width */}
                  <div className="relative w-full md:w-3/5 flex-shrink-0 bg-purple-900/30">
                    {selectedEvent.poster ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={selectedEvent.poster}
                          alt={selectedEvent.title}
                          className="w-full h-full object-contain"
                          style={{ maxHeight: "90vh" }}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-purple-800/50" style={{ minHeight: "500px" }} />
                    )}

                    {/* Event status badge */}
                    {selectedEvent.status && (
                      <div className="absolute top-4 left-4 z-10">
                        {selectedEvent.status === "registration-open" && (
                          <span className="px-3 py-1 text-sm font-medium bg-purple-600 text-white rounded-full border border-purple-400/30 shadow-md">
                            Registration Open
                          </span>
                        )}
                        {selectedEvent.status === "coming-soon" && (
                          <span className="px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full border border-blue-400/30 shadow-md">
                            Coming Soon
                          </span>
                        )}
                        {selectedEvent.status === "completed" && (
                          <span className="px-3 py-1 text-sm font-medium bg-green-600 text-white rounded-full border border-green-400/30 shadow-md">
                            Completed
                          </span>
                        )}
                      </div>
                    )}

                    {/* Mobile title overlay - only shows on mobile */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 md:hidden bg-gradient-to-t from-purple-950 to-transparent">
                      <h3 className="text-3xl font-bold text-white">{selectedEvent.title}</h3>
                    </div>
                  </div>

                  {/* Right side with event details - Decreased width */}
                  <div className="relative z-10 p-6 flex-1 bg-purple-950">
                    {/* Desktop title - only shows on desktop */}
                    <h3 className="text-3xl font-bold text-white mb-6 hidden md:block">{selectedEvent.title}</h3>

                    {/* Basic info shown for all event types */}
                    <div className="flex flex-wrap gap-6 mb-6 text-purple-100">
                      {selectedEvent.date && (
                        <div className="flex items-center gap-2">
                          <Calendar className="text-purple-400" size={18} />
                          <span>{selectedEvent.date}</span>
                        </div>
                      )}
                      {selectedEvent.time && (
                        <div className="flex items-center gap-2">
                          <Clock className="text-purple-400" size={18} />
                          <span>{selectedEvent.time}</span>
                        </div>
                      )}
                      {selectedEvent.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="text-purple-400" size={18} />
                          <span>{selectedEvent.location}</span>
                        </div>
                      )}
                      {selectedEvent.participants && (
                        <div className="flex items-center gap-2">
                          <Users className="text-purple-400" size={18} />
                          <span>{selectedEvent.participants} participants</span>
                        </div>
                      )}
                    </div>

                    <div className="w-16 h-1 bg-purple-500 mb-6" />

                    <p className="text-purple-100 text-lg mb-6">
                      {selectedEvent.description}
                    </p>

                    {/* Registration fee and prize pool - ENHANCED CTA STYLE - Only shown for upcoming events */}
                    {(selectedEvent.status === "registration-open" || selectedEvent.status === "coming-soon") && (
                      <div className="mb-6 flex flex-col sm:flex-row gap-4">
                        {selectedEvent.registrationFee && (
                          <div className="flex-1 flex flex-col items-center bg-purple-800/70 p-4 rounded-lg border-l-4 border-purple-500 shadow-lg">
                            <DollarSign className="text-purple-300 mb-2" size={28} />
                            <h4 className="text-purple-300 text-lg font-medium mb-1">Registration Fee</h4>
                            <p className="text-white text-xl font-bold">{selectedEvent.registrationFee}</p>
                          </div>
                        )}

                        {selectedEvent.prizePool && (
                          <div className="flex-1 flex flex-col items-center bg-purple-800/70 p-4 rounded-lg border-l-4 border-yellow-500 shadow-lg">
                            <Trophy className="text-yellow-400 mb-2" size={28} />
                            <h4 className="text-yellow-300 text-lg font-medium mb-1">Prize Pool</h4>
                            <p className="text-white text-xl font-bold">{selectedEvent.prizePool}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Event coordinators - shown for both upcoming and past events */}
                    {selectedEvent.coordinators && selectedEvent.coordinators.length > 0 && (
                      <div className="mb-6 bg-purple-900/50 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-white mb-3">Event Coordinators</h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedEvent.coordinators.map((coordinator, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Phone className="text-purple-400" size={16} />
                              <div>
                                <p className="text-white">{coordinator.name}</p>
                                <p className="text-purple-300 text-sm">{coordinator.number}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-4">
                      {selectedEvent.status === "registration-open" && selectedEvent.registrationLink && (
                        <motion.a
                          href={selectedEvent.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-md font-medium text-lg"
                        >
                          <span>Register Now</span>
                          <ArrowRight size={18} />
                        </motion.a>
                      )}

                      {selectedEvent.images && selectedEvent.images.length > 0 && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowGallery(true);
                            setCurrentImageIndex(0);
                          }}
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-purple-500 rounded-full hover:bg-purple-500/20 transition-colors duration-300 shadow-md"
                        >
                          <ImageIcon size={18} />
                          <span>View Gallery ({selectedEvent.images?.length} photos)</span>
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Gallery Modal */}
        <AnimatePresence>
          {showGallery && selectedEvent && selectedEvent.images && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-hidden"
              onClick={() => setShowGallery(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative bg-purple-950 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative z-10 p-4 border-b border-purple-800 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{selectedEvent.title} - Photo Gallery</h3>
                  <button
                    onClick={() => setShowGallery(false)}
                    className="text-purple-300 hover:text-white transition-colors p-2 bg-purple-900/80 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="relative z-10 overflow-y-auto p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedEvent.images.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="group relative overflow-hidden rounded-lg shadow-lg bg-purple-900/80 aspect-[16/9]" // Changed from aspect-square to aspect-[16/9]
                      >
                        <img
                          src={img}
                          alt={`${selectedEvent.title} event photo ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-1 bg-purple-500" />
          <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
            Special Showcases
          </h2>
          <div className="w-16 h-1 bg-purple-500" />
        </div>

        <motion.section
          className="relative w-full py-16 md:py-20 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side - Game Image */}
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-1">
                      <Image
                        src="https://gradient-content-server.vercel.app/content/utsav25/gallery/unc/ulvfs.png"
                        alt="Uncharted Lost Voyage Game"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Game Info & CTA */}
                <motion.div
                  className="w-full lg:w-1/2 text-center lg:text-left"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {/* Description */}
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 space-y-4">
                    Dive into <span className="text-yellow-300 font-medium">Gradient's immersive game</span>, where interconnected websites hide cryptic clues and thrilling puzzles.
                    <br /><br />
                    Solve challenges, uncover secrets, and piece together the ultimate mystery.
                    <br />
                    <span className="text-blue-300 font-semibold block mt-4">Are you ready to discover the lost treasures?</span>
                  </p>


                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <Link
                      href="https://uncharted3.gradientaiml.tech"
                      className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      <Play size={20} className="mr-2" />
                      <span className="relative text-lg">Start Your Quest</span>
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <Link
                      href="https://uncharted3.gradientaiml.tech"
                      className="group inline-flex items-center justify-center px-8 py-4 border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-lg w-full sm:w-auto"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}