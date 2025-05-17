"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Trophy,
  DollarSign,
  Users,
  Star
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Head from 'next/head'


export default function EventsPage() {
  // Event data from the provided content
  const events = [
    {
      id: 1,
      title: "Jokes on You Again",
      description: "A thrilling comedy show by Bangalore's very own Niroop Mohan, Join us for an show of laughter and entertainment as Niroop takes the stage to share his unique perspective on life, love, and everything in between.",
      category: "Utsav 2025",
      status: "over",      
      poster: "https://gradient-content-server.vercel.app/content/utsav25/JOY.png"
    },
    {
      id: 2,
      title: "Uncharted 3 : Lost Voyage",
      description: "A thrilling high stakes online treasure hunt where participants embark on a quest to uncover hidden treasures and solve intricate puzzles. With a mix of technology and adventure, this event promises excitement and challenges.",
      category: "Utsav 2025",
      status: "over",      
      poster: "https://gradient-content-server.vercel.app/content/utsav25/UNC.png"
    },
    {
      id: 3,
      title: "Sync or Sink",
      description: "A test of teamwork and strategy, where participants must work together to solve puzzles and challenges. You either Sync up with your teammates or Sink into the depths of despair.",
      category: "Utsav 2025",
      status: "over",  
      poster: "https://gradient-content-server.vercel.app/content/utsav25/SOS.png"
    }
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (

    <>
      <Head>
        <title>Events | Gradient AIML</title>
        <meta name="description" content="Explore upcoming events hosted by Gradient AIML, from workshops to conferences in AI and Machine Learning." />
        <meta name="keywords" content="Events, Gradient AIML, AI events, Machine Learning events, BMSCE, AI workshops" />
        <meta property="og:title" content="Events | Gradient AIML" />
        <meta property="og:description" content="Join us for exciting events in AI and Machine Learning, hosted by Gradient AIML at BMSCE." />
        <meta property="og:image" content="https://gradient-content-server.vercel.app/content/Logo.png" />        <meta name="twitter:card" content="summary_large_image" />
      </Head>


      <div className="min-h-screen overflow-hidden text-white relative">
        {/* Background Video - Reduced opacity to see more of the background */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ filter: "brightness(0.5)", mixBlendMode: "normal" }}
          >
            <source
              src="https://gradient-content-server.vercel.app/content/utsav25/bg.mp4"
              type="video/mp4"
            />
          </video>

          {/* Mesh grid overlay for depth - reduced opacity further */}
          <div className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />

          {/* Dark gradient overlay - significantly reduced opacity */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-purple-950/25 to-black/25" />
        </div>

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
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Event poster container */
        .event-poster-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 1/1; /* Creates a perfect square */
        }

        .event-poster-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* Larger card sizing */
        .event-card {
          width: 450px;
          height: auto;
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .event-card-content {
          flex: 1;
          overflow-y: visible;
          display: flex;
          flex-direction: column;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .event-card {
            width: 90%;
            max-width: 450px;
          }
        }
        
        /* Enhancing text readability */
        .event-description {
          font-size: 1.05rem;
          line-height: 1.6;
        }
        
        .event-detail {
          font-size: 1.05rem;
        }
      `}</style>

        <Navbar />

        {/* Main content - Added more padding top to show more background */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
          {/* Header - Increased title sizes */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 mt-8"
          >
            <motion.h1
              className="text-7xl md:text-9xl font-extrabold righteous-regular mb-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-yellow-200 to-pink-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="block md:inline">Gradient</span>
              <span className="block md:inline"> X</span>
              <span className="block md:inline"> Utsav</span>
            </motion.h1>



            <motion.p
              className="text-5xl md:text-5xl text-gray-300 max-w-4xl mx-auto righteous-regular"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              The events have concluded. Stay tuned for an exciting Recap
            </motion.p>
          </motion.div>

          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 relative px-2"
          >
            {/* Events List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-12 pb-12"
            >
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className="bg-purple-950/70 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-700/30 transition-all duration-300 transform hover:-translate-y-2 event-card snap-center"
                >
                  <div className="h-full flex flex-col">
                    {/* Top - Image (perfect square aspect ratio) */}
                    <div className="w-full">
                      <div className="relative event-poster-container">
                        <img
                          src={event.poster}
                          alt={event.title}
                          className="event-poster-image transition-transform duration-700 hover:scale-110"
                        />

                        {/* Event status badge */}
                        <div className="absolute top-6 left-6 z-10">
                          {event.status === "registration-open" && (
                            <span className="px-4 py-2 text-base font-medium bg-purple-600 text-white rounded-full border border-purple-400/30 shadow-md">
                              Registration Open
                            </span>
                          )}
                          {event.status === "over" && (
                            <span className="px-4 py-2 text-base font-medium bg-blue-600 text-white rounded-full border border-blue-400/30 shadow-md">
                              Event Completed
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom - Content */}
                    <div className="p-8 flex flex-col flex-1 event-card-content">
                      <div className="flex items-center gap-3 mb-4">
                        <Star size={24} className="text-yellow-400" fill="#FBBF24" />
                        <span className="text-yellow-200 text-xl font-medium">{event.category}</span>
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-4 hover:text-purple-300 transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="text-purple-100 mb-6 text-base event-description">
                        {event.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      </>
      );
}