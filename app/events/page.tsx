"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Users,
  Heart,
  Star,
  ChevronRight,
  ArrowUp,
  Sparkles,
  Award,
  Clock,
  MapPin,
  Image as ImageIcon
} from 'lucide-react';

import { eventsData, gradientTeam, galleryData } from './data.js';
import Navbar from "../../components/Navbar";

export default function EventsRecapPage() {
  const [showGallery, setShowGallery] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMainGallery, setShowMainGallery] = useState(false);

  const containerRef = useRef(null);

  // Font import
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Righteous&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Track scroll position for scroll-to-top button only
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openGallery = (event) => {
    setCurrentEvent(event);
    setShowGallery(true);
  };

  const colorVariants = {
    purple: {
      gradient: "from-purple-900/20 via-purple-600/10 to-purple-900/20",
      accent: "purple-400",
      glow: "shadow-purple-500/20"
    },
    cyan: {
      gradient: "from-cyan-900/20 via-cyan-600/10 to-cyan-900/20",
      accent: "cyan-400",
      glow: "shadow-cyan-500/20"
    },
    orange: {
      gradient: "from-orange-900/20 via-orange-600/10 to-orange-900/20",
      accent: "orange-400",
      glow: "shadow-orange-500/20"
    }
  };

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      <style jsx>{`
        .righteous-regular {
          font-family: "Righteous", sans-serif;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>

      <Navbar />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ filter: "brightness(0.4)" }}
          >
            <source
              src="https://gradient-content-server.vercel.app/content/utsav25/bg.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-950/30 to-black/50 z-10" />

        {/* Mesh grid overlay for depth */}
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 z-30">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="text-center z-40 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
          <motion.h1
            className="text-7xl md:text-9xl font-bold righteous-regular mb-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-yellow-200 to-pink-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="block md:inline">Gradient</span>
            <span className="block md:inline"> X</span>
            <span className="block md:inline"> Utsav</span>
            <span className="block md:inline"> Ananta</span>
          </motion.h1>
            <h2 className="righteous-regular text-4xl md:text-6xl font-semibold mb-8 text-white/90">
            </h2>
            <p className="text-2xl md:text-5xl text-white max-w-4xl mx-auto">
              Relive the magic, memories, and moments that made our collaboration unforgettable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Sections */}
      {eventsData.map((event, index) => (
        <section
          key={event.id}
          className="h-screen relative overflow-hidden flex items-center justify-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${event.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(0.5) blur(1px)'
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colorVariants[event.color].gradient}`} />

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Event Title */}
              <h2 className="righteous-regular text-6xl md:text-8xl font-bold mb-6 text-white leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {event.title}
              </h2>

              {/* Description */}
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                {event.shortDescription}
              </p>

              {/* Gallery Button */}
              <motion.button
                onClick={() => openGallery(event)}
                className={`group bg-gradient-to-r from-${colorVariants[event.color].accent}/20 to-${colorVariants[event.color].accent}/10 border border-${colorVariants[event.color].accent}/30 px-8 py-4 rounded-full text-white text-lg font-semibold hover:bg-${colorVariants[event.color].accent}/20 transition-all duration-300 ${colorVariants[event.color].glow}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3">
                  <Camera size={24} />
                  <span>View Gallery</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>

              {/* Volunteers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users size={20} className={`text-${colorVariants[event.color].accent}`} />
                  <span className={`text-${colorVariants[event.color].accent} font-semibold`}>
                    Event Volunteers
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {event.volunteers.map((volunteer, vIndex) => (
                    <motion.span
                      key={vIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: vIndex * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xl text-white/80"
                    >
                      {volunteer}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Thank You & Team Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative overflow-hidden">
        {/* Video Section */}
        <div className="h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
              style={{ filter: "brightness(0.4)" }}
            >
              <source
                src="https://gradient-content-server.vercel.app/content/utsav25/bg.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40 z-10" />

          {/* Main Content Container */}
          <div className="text-center z-20 px-4 max-w-6xl mx-auto">
            {/* Thank You Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart size={32} className="text-red-400" fill="currentColor" />
                <h2 className="righteous-regular text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Thank You
                </h2>
                <Heart size={32} className="text-red-400" fill="currentColor" />
              </div>

              <p className="text-2xl md:text-3xl text-white mb-12">
                To the incredible team who made this possible
              </p>
            </motion.div>

            {/* Team Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-16"
            >
              {gradientTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <div className="font-semibold text-lg">{member.name}</div>
                  <div className="text-white/70 text-sm">{member.role}</div>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center z-20 px-4 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
               >
                {/* Gallery Button */}
                <motion.button
                  onClick={() => setShowMainGallery(true)}
                  className="group bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 px-12 py-6 rounded-full text-white text-xl font-semibold hover:bg-cyan-400/30 transition-all duration-300 shadow-cyan-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  >
                  <div className="flex items-center gap-4">
                    <Camera size={28} />
                    <span>View Gallery</span>
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              </motion.div>
            </div>

            <div className="text-center z-20 px-4 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="righteous-regular text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Until We Meet Again
                </h2>
                <p className="text-2xl md:text-3xl text-white max-w-3xl mx-auto">
                  Here's to the memories we've created and memories yet to come. Thank you for being a part of this journey with us.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Event Gallery Modal */}
      <AnimatePresence>
        {showGallery && currentEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-7xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="righteous-regular text-3xl font-bold text-white">{currentEvent.title} Gallery</h3>
                <button
                  onClick={() => setShowGallery(false)}
                  className="text-white/70 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentEvent.galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group overflow-hidden rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <img
                      src={image}
                      alt={`${currentEvent.title} ${index + 1}`}
                      className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Gallery Modal */}
      <AnimatePresence>
        {showMainGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowMainGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-7xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="righteous-regular text-3xl font-bold text-white">Complete Gallery</h3>
                <button
                  onClick={() => setShowMainGallery(false)}
                  className="text-white/70 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {galleryData.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group overflow-hidden rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <img
                      src={image.url}
                      alt={image.caption || `Gallery image ${index + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white text-sm">{image.caption}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}