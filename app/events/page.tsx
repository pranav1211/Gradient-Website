"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Trophy, Phone, ExternalLink } from "lucide-react";
import Navbar from '../../components/Navbar'
import Link from "next/link";

const events = [
  {
    title: "Fortune 404",
    description: "Get ready for an adrenaline-charged Treasure Hunt that takes you across campus to crack clever riddles, race the clock, and unlock your starting stash. Then dive into the Investment Arena, where every twist in the storyline challenges your wits: decode clues, outsmart puzzles, and choose between bold, high-stakes moves or steady, calculated plays.",
    date: "19th September 2025",
    time: "10:00 AM",
    location: "MEL Lab 03, PJ Block, 2nd Floor",
    category: "Phaseshift 2025",
    status: "registration-open",
    registrationFee: "₹100 per team",
    prizePool: "₹5000",
    coordinators: [
      { name: "Shriyans Naik", number: "+91 79825 31455" },
      { name: "Divyam Jain", number: "+91 60099 13709" }
    ],
    registrationLink: "https://events.phaseshift.in/events/GRDFFO",
    poster: "https://gradient-content-server.vercel.app/content/ps25/f404poster.png"
  },
  {
    title: "AI Unplugged",
    description: "Get set for an immersive Hands-On Workshop that unpacks the secrets of RAG (Retrieval-Augmented Generation) and Prompt Engineering. Guided by Tulsi Patro, Prompt Engineer at Amazon, you’ll learn how to craft precise prompts, and see how RAG supercharges LLMs. Whether you’re new or sharpening your skills, It will be an innovative experience.",
    date: "20th September 2025",
    time: "2:00 PM",
    location: "MEL-Seminar Hall, 7th floor",
    category: "Phaseshift 2025",
    status: "registration-open",
    registrationFee: "₹50 Per Person",
    prizePool: "N/A",
    coordinators: [
      { name: "Channabasavanna MB", number: "+91 76769 75495" },
      { name: "Riya Kumari", number: "+91 82521 89462" }
    ],
    registrationLink: "https://events.phaseshift.in/events/GRDAUD",
    poster: "https://gradient-content-server.vercel.app/content/ps25/aiunplugposter.png"
  }
];

export default function EventsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Navbar */}
      <Navbar />

      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/psbg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Side by side with dynamic center */}
        <div className="hidden lg:flex items-start justify-center pt-20 pb-8 min-h-screen">
          <div className="flex items-start justify-between w-full max-w-[1800px] mx-auto gap-4 xl:gap-6">
            {/* Left Event Card */}
            <motion.div
              className="w-[460px] xl:w-[500px] flex-shrink-0 mt-10"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
              <EventCard event={events[0]} />
            </motion.div>

            {/* Dynamic Center Title */}
            <motion.div
              className="text-center mt-25 mx-4 xl:mx-6 flex-shrink-0 pt-32"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 120 }}
            >
              <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-extrabold drop-shadow-2xl mb-4 xl:mb-6">
                <span className="text-amber-300 drop-shadow-lg">Gradient&nbsp;</span>
                <span className="text-amber-300 drop-shadow-lg">X</span>
                <br />
                <span className="text-white drop-shadow-lg">PhaseShift&nbsp;Meridian</span>
              </h1>
              <p className="text-lg xl:text-xl 2xl:text-2xl font-bold text-amber-200 tracking-wide drop-shadow-lg">
                Events & Workshops
              </p>
            </motion.div>

            {/* Right Event Card */}
            <motion.div
              className="w-[460px] xl:w-[500px] flex-shrink-0 mt-10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
              <EventCard event={events[1]} />
            </motion.div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked */}
        <div className="lg:hidden pt-32 pb-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold drop-shadow-lg mb-4">
              <span className="text-amber-300">Gradient&nbsp;</span>
              <span className="text-amber-300">X</span>
              <br />
              <span className="text-white">PhaseShift&nbsp;Meridian</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-amber-200 tracking-wide">
              Events & Workshops
            </p>
          </motion.div>

          {/* Events Grid for Mobile */}
          <div className="space-y-8 pb-12 max-w-lg mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Event Card Component
type Coordinator = {
  name: string;
  number: string;
};

type EventType = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  status: string;
  registrationFee: string;
  prizePool: string;
  coordinators: Coordinator[];
  registrationLink: string;
  poster: string;
};

function EventCard({ event }: { event: EventType }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl min-h-[800px] flex flex-col">
      {/* Event Poster - Square */}
      <div className="w-full aspect-square bg-gradient-to-r from-purple-600/30 to-blue-600/30 relative overflow-hidden flex-shrink-0">
        <img
          src={event.poster}
          alt={event.title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <span className="bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
            Registration Open
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-amber-500/20 backdrop-blur-sm text-amber-200 px-2 py-1 rounded-full text-xs font-medium border border-amber-500/40">
            {event.category}
          </span>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-5 lg:p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">{event.title}</h3>
        </div>

        <p className="text-gray-200 text-sm leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 gap-2 mb-4">
          <div className="flex items-center text-sm text-gray-200 bg-white/5 rounded-lg p-2 border border-white/10">
            <Calendar className="w-4 h-4 mr-2 text-amber-300 flex-shrink-0" />
            <span className="font-medium">{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-200 bg-white/5 rounded-lg p-2 border border-white/10">
            <Clock className="w-4 h-4 mr-2 text-amber-300 flex-shrink-0" />
            <span className="font-medium">{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-200 bg-white/5 rounded-lg p-2 border border-white/10">
            <MapPin className="w-4 h-4 mr-2 text-amber-300 flex-shrink-0" />
            <span className="font-medium text-xs">{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-200 bg-white/5 rounded-lg p-2 border border-white/10">
            <Users className="w-4 h-4 mr-2 text-amber-300 flex-shrink-0" />
            <span className="font-medium">{event.registrationFee}</span>
          </div>
          {event.prizePool !== "N/A" && (
            <div className="flex items-center text-sm text-gray-200 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg p-2 border border-amber-500/30">
              <Trophy className="w-4 h-4 mr-2 text-amber-300 flex-shrink-0" />
              <span className="font-semibold text-amber-200">Prize Pool: {event.prizePool}</span>
            </div>
          )}
        </div>

        {/* Coordinators */}
        <div className="mb-4 flex-1">
          <h4 className="text-sm font-semibold text-white mb-2">Event Coordinators:</h4>
          <div className="space-y-2">
            {event.coordinators.map((coordinator, idx) => (
              <div key={idx} className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/10 transition-colors">
                <span className="text-xs text-gray-200 font-medium">{coordinator.name}</span>
                <a
                  href={`tel:${coordinator.number}`}
                  className="flex items-center text-xs text-amber-300 hover:text-amber-200 transition-colors group"
                >
                  <Phone className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline font-medium">{coordinator.number}</span>
                  <span className="sm:hidden font-medium">Call</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Button - Pinned to bottom */}
        <div className="mt-auto">
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-amber-500/90 to-orange-500/90 hover:from-amber-600/90 hover:to-orange-600/90 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group text-sm border border-amber-500/40 shadow-lg"
          >
            Register Now
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}