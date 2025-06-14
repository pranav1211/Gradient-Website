'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import Footer from '@/components/Footer'
import { teamData } from './teamData'
import Head from 'next/head'
// Types
interface TeamMember {
  name: string
  role: string
  year: string
  image: string
  github?: string
  twitter?: string
  linkedin?: string
}

const TeamMember = ({ name, role, year, image, github, linkedin }: TeamMember) => {
  return (
    <>
      <Head>
        <title>Core Team | Gradient AIML</title>
        <meta name="description" content="Meet the dedicated minds behind Gradient AIML, the AI and ML team at BMSCE." />
        <meta name="keywords" content="Core Team, Gradient AIML, AI, Machine Learning, BMSCE, AI Club BMSCE" />
        <meta property="og:title" content="Core Team | Gradient AIML" />
        <meta property="og:description" content="Discover the passionate team that drives Gradient AIML's mission to innovate in AI and Machine Learning." />
        <meta property="og:image" content="https://gradient-content-server.vercel.app/content/Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="group relative h-full">
        {/* Diagonal card with darker purple background */}
        <div className="relative bg-purple-950/90 h-full overflow-hidden shadow-lg"
          style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0% 100%)' }}>
          <div className="flex flex-col h-full">
            {/* Diagonal overlay */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent 
                         -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />

            {/* Content container */}
            <div className="flex flex-col h-full">
              {/* Image section */}
              <div className="relative w-full">
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)' }}>
                  <Image
                    src={image}
                    alt={name}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover object-center transition-transform duration-700 
                           scale-105 group-hover:scale-110"
                    style={{ objectPosition: '50% 20%' }} // Focus more on faces
                    priority
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-purple-950/5" />
                </div>
              </div>

              {/* Text content section below image */}
              <div className="w-full p-5 flex flex-col items-center relative z-10">
                {/* Purple accent line */}
                <div className="w-16 h-1 bg-purple-500 mb-4 transform origin-center transition-all duration-300 
                            group-hover:w-24 group-hover:bg-fuchsia-500" />

                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-500 transition-colors text-center">{name}</h3>
                <p className="text-purple-200/90 font-medium text-base mt-2 text-center">{role}</p>
                {year && <p className="text-zinc-400 text-sm mt-1 text-center">{year}</p>}

                {/* Social links */}
                <div className="flex space-x-4 mt-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-purple-800/60 hover:bg-purple-600 
                             text-white p-2 rounded-md transition-colors transform hover:scale-105"
                      aria-label={`${name}'s GitHub`}
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-purple-800/60 hover:bg-purple-600 
                             text-white p-2 rounded-md transition-colors transform hover:scale-105"
                      aria-label={`${name}'s LinkedIn`}
                    >
                      <Linkedin size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Domain Section with simplified responsive layout
const DomainSection = ({ title, members, isReversed }: { title: string, members: any[], isReversed: boolean }) => {
  return (
    <div className="mb-16 md:mb-24">
      {/* For smaller screens (1024px and below): always show title on top */}
      <div className="block xl:hidden mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl righteous-regular leading-tight text-center px-4">
          {title}
        </h2>
      </div>

      {/* For larger screens (above 1024px): show side-by-side layout */}
      <div className="hidden xl:flex xl:flex-row items-center">
        {/* Side title, only visible on large screens */}
        <div className={`${isReversed ? 'order-1 pr-8' : 'order-2 pl-8'} w-1/3`}>
          <h2 className={`text-7xl righteous-regular leading-tight ${isReversed ? 'text-right' : 'text-left'}`}>
            {title}
          </h2>
        </div>

        {/* Team members, order changes based on isReversed */}
        <div className={`${isReversed ? 'order-2' : 'order-1'} w-2/3`}>
          <div className="grid grid-cols-2 gap-8">
            {members.map((member, index) => (
              <div key={member.name} className={members.length === 3 && index === 2 ? 'col-span-2 max-w-md mx-auto' : ''}>
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* For smaller screens: always show members below title in a grid */}
      <div className="xl:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {members.map((member, index) => (
            <div key={member.name} className={members.length === 3 && index === 2 ? 'sm:col-span-2 max-w-md mx-auto' : ''}>
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#180336' }}>
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

.bree-serif-regular {
  font-family: "Bree Serif", serif;
  font-weight: 400;
  font-style: normal;
}
        .righteous-regular {
          font-family: "Righteous", sans-serif;
          font-weight: 400;                    
        }
      `}</style>

      {/* Background pattern */}
      <div className="fixed inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right,rgb(127, 111, 168) 1px, transparent 1px), linear-gradient(to bottom, rgb(127, 111, 168) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundColor: '#180336'
        }} />

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20 text-center">
        <div className="mb-4 md:mb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl lg:max-w-3xl"
          >
            <h1 className="text-6xl sm:text-7xl md:text-7xl font-bold mt-6 md:mt-10 bree-serif-regular">
              <span className="text-white">The Minds</span> <br />
              <span style={{ color: '#C4B5FD' }}>Behind Gradient</span>
            </h1>
            {/* Tagline */}
            <p className="text-purple-200 text-xl md:text-3xl mt-4 md:mt-6 font-light px-2">
              The team that brings you innovation at the speed of thought
            </p>
          </motion.div>
        </div>

        {/* Team Sections */}
        <div className="space-y-12">
          {teamData.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DomainSection
                title={section.title}
                members={section.members}
                isReversed={index % 2 !== 0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}