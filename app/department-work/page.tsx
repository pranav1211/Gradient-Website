'use client'
import { useCallback } from 'react'
import React from 'react';
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import {
  Trophy,
  Users,
  Building2,
  Microscope,
  Microchip,
  Server,
  Cpu,
  HardDrive,
  Monitor,
  Network,
  LineChart,
  Award,
  Brain,
  ArrowLeft
} from 'lucide-react';
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

const stats = [
  { label: 'Research Papers', value: '10+', icon: Microscope },
  { label: 'Faculty Members', value: '25+', icon: Users },
  { label: 'Students Placed', value: '200+', icon: Building2 },
  { label: 'Student Achievements', value: '100+', icon: Trophy }
]

const researchAreas = [
  {
    title: 'Machine Learning',
    description: 'Deep learning, reinforcement learning, and neural networks research with state-of-the-art facilities.',
    icon: Brain,
    projects: ['Neural Architecture Search', 'Automated Machine Learning', 'Deep Reinforcement Learning']
  },
  {
    title: 'Computer Vision',
    description: 'Advanced image processing and visual recognition systems development using cutting-edge algorithms.',
    icon: Network,
    projects: ['Object Detection', 'Image Segmentation', 'Visual SLAM']
  },
  {
    title: 'Natural Language Processing',
    description: 'Research in text analysis, language understanding, and generation using transformer models.',
    icon: LineChart,
    projects: ['Sentiment Analysis', 'Machine Translation', 'Text Generation']
  }
]

const facilities = [
  {
    name: 'Classrooms',
    description: 'State-of-the-art classrooms with advanced technology to enhance the student learning experience.',
    image: 'https://gradient-content-server.vercel.app/content/department/coe.jpeg'
  },
  {
    name: 'Computer Labs',
    description: 'High-performance computing clusters with the high end NVIDIA GPUs.',
    image: 'https://gradient-content-server.vercel.app/content/department/lab.webp'
  },
  {
    name: 'Seminar Hall',
    description: 'A spacious seminar hall designed for engaging lectures and discussions, featuring modern seating, clear acoustics, and a professional ambiance.',
    image: 'https://gradient-content-server.vercel.app/content/department/semh.jpeg'
  }
]

const centerOfExcellence = {
  infrastructure: [
    { icon: Server, title: 'Nvidia DGX A100 Server', description: 'State-of-the-art supercomputing server with 320GB GPU memory, 2 AMD 128-core CPUs, 1TB RAM, and NVSwitch with 600 GB/s GPU-GPU Bandwidth for large-scale AI computation.' },
    { icon: Microchip, title: 'HP ELITE 800 G9', description: 'Windows 11 Pro, Intel Core i7-12700, 32GB memory for high-performance computing tasks.' },
    { icon: Cpu, title: 'HP ELITE 600 G9', description: 'Intel Core i7-10700 CPU @ 2.90 GHz, 16GB RAM for AI model development and testing.' },
    { icon: Cpu, title: 'HP PRODESK 400 G7', description: 'Intel Core i7-10700 CPU @ 2.90 GHz, 16GB RAM supporting research projects and AI simulations.' },
    { icon: HardDrive, title: 'HP ELITE TOWER 600 G9', description: 'Intel Core i7-10700 CPU @ 2.90 GHz, 16GB RAM optimized for AI research workloads.' },
    { icon: Microchip, title: 'LENOVO P520 Workstation', description: 'Intel Xeon W-2295 CPU 18 Core, 128GB RAM, Lenovo Curved 1500R Monitor 27" FHD, Nvidia Graphics Card RTX A5000 for intensive AI and ML applications.' },
    { icon: Monitor, title: 'Sense Interactive Intelligent Panel 86"', description: 'Intel i5 Processor, 8500 CPU @ 3.00GHz, 8GB DDR4 RAM for interactive AI and ML learning sessions.' }
  ],
  services: [
    'Access to cutting-edge AI technology and infrastructure',
    'Project-based collaboration and support',
    'AI model Development and Deployment services',
    'Performance Optimization and Scalability support',
    'Large-scale Data processing and Analysis'
  ]
}

const PARTICLE_OPTIONS = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    color: { value: ['#7c3aed', '#a855f7', '#c4b5fd', '#e9d5ff', '#ffffff'] },
    links: {
      color: '#a855f7',
      distance: 160,
      enable: true,
      opacity: 0.3,
      width: 1,
      triangles: { enable: true, opacity: 0.05 }
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: 'none' as const,
      random: true,
      straight: false,
      outModes: { default: 'bounce' as const },
    },
    number: { density: { enable: true, area: 900 }, value: 100 },
    opacity: {
      value: { min: 0.2, max: 1 },
      animation: { enable: true, speed: 0.8, minimumValue: 0.1, sync: false }
    },
    shape: { type: 'circle' },
    size: {
      value: { min: 1, max: 5 },
      animation: { enable: true, speed: 1.5, minimumValue: 0.5, sync: false }
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: true, mode: 'push' },
    },
    modes: {
      grab: { distance: 220, links: { opacity: 0.8 } },
      push: { quantity: 4 },
    },
  },
  detectRetina: true,
}

export default function DepartmentWork() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <>
      <Head>
        <title>Department of AI & ML | BMSCE</title>
        <meta name="description" content="Department of Artificial Intelligence and Machine Learning at BMS College of Engineering." />
        <meta property="og:title" content="Department of AI & ML | BMSCE" />
        <meta property="og:image" content="https://gradient-content-server.vercel.app/content/Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Bree+Serif&display=swap');

        html, body {
          background-color: #080014;
        }

        .righteous-regular {
          font-family: 'Righteous', sans-serif;
          font-weight: 400;
          font-style: normal;
        }

        .bree-serif-regular {
          font-family: 'Bree Serif', serif;
          font-weight: 400;
          font-style: normal;
        }

        @keyframes pulse-glow {
          0%, 100% {
            text-shadow:
              0 0 100px rgba(168, 85, 247, 0.85),
              0 0 50px rgba(124, 58, 237, 0.65),
              0 0 25px rgba(196, 181, 253, 0.45);
          }
          50% {
            text-shadow:
              0 0 160px rgba(168, 85, 247, 1),
              0 0 80px rgba(124, 58, 237, 0.9),
              0 0 40px rgba(196, 181, 253, 0.7),
              0 0 15px rgba(255, 255, 255, 0.3);
          }
        }

        .ml-glow-pulse {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .dept-of-text {
          text-shadow: 0 0 40px rgba(196, 181, 253, 0.5);
        }
      `}</style>

      {/* Particles — fixed, sits behind everything */}
      <Particles
        id="tsparticles"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        init={particlesInit}
        options={PARTICLE_OPTIONS}
      />

      {/* Main content — transparent so particles show through */}
      <div className="relative min-h-screen text-white" style={{ zIndex: 1 }}>

        {/* Home link */}
        <Link
          href="/"
          className="fixed top-6 left-6 z-50 flex items-center gap-2 text-purple-400 hover:text-purple-200 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          <span>Home</span>
        </Link>

        {/* ── HERO — 100vh ── */}
        <section className="flex flex-col justify-center items-center h-screen px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.6em' }}
              animate={{ opacity: 1, letterSpacing: '0.35em' }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="dept-of-text text-purple-300 uppercase tracking-[0.35em] text-base sm:text-xl md:text-2xl mb-3 bree-serif-regular"
            >
              Department of
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="ml-glow-pulse bree-serif-regular text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 8.5vw, 15rem)' }}
            >
              Artificial Intelligence
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.55, ease: 'easeOut' }}
              className="ml-glow-pulse bree-serif-regular leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 8.5vw, 15rem)', color: '#C4B5FD' }}
            >
              & Machine Learning
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-purple-300/70 text-sm sm:text-lg md:text-xl mt-5 font-light max-w-2xl"
            >
              Pioneering research and innovation at the frontier of intelligence
            </motion.p>
          </motion.div>
        </section>

        {/* ── ACHIEVEMENTS — full screen frosted glass ── */}
        <section
          style={{
            minHeight: '100vh',
            background: 'rgba(88, 28, 135, 0.18)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            borderTop: '1px solid rgba(168, 85, 247, 0.25)',
            borderBottom: '1px solid rgba(168, 85, 247, 0.15)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col justify-center px-6 py-20 max-w-6xl mx-auto min-h-screen"
          >
            <div className="flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
              <h2 className="text-3xl md:text-5xl righteous-regular px-6 text-center text-white">
                Our Achievements
              </h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
                  className="group transform hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon
                    className="text-purple-400 mx-auto mb-5 group-hover:text-purple-200 transition-colors"
                    size={52}
                    style={{ filter: 'drop-shadow(0 0 12px rgba(168,85,247,0.7))' }}
                  />
                  <h3
                    className="text-5xl md:text-6xl font-bold text-white group-hover:text-purple-200 transition-colors"
                    style={{ textShadow: '0 0 30px rgba(168,85,247,0.6)' }}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-purple-300 text-base md:text-lg mt-3">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── BELOW THE FOLD ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div className="space-y-24">

            {/* PhaseShift 2025 */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent -skew-x-12" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-purple-500" />
                    <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                      PhaseShift 2025 Champions
                    </h2>
                    <div className="w-16 h-1 bg-purple-500" />
                  </div>

                  <motion.div
                    className="relative rounded-xl overflow-hidden w-full aspect-video shadow-lg mb-8 max-w-5xl mx-auto"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 99% 100%, 1% 100%)' }}
                  >
                    <Image src="/mlps25.jpeg" alt="PhaseShift 2025 Victory" loading="lazy" className="object-cover" fill />
                  </motion.div>

                  <div className="space-y-8 text-purple-100">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <Trophy className="text-yellow-400" size={56} />
                      <span className="text-4xl md:text-5xl font-bold text-yellow-400">1st Place</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white righteous-regular text-center">
                      Project Stalls Category Winner
                    </h3>
                    <div className="max-w-5xl mx-auto space-y-6">
                      <p className="text-xl md:text-2xl leading-relaxed text-center">
                        In a remarkable display of innovation and excellence, the <span className="text-purple-300 font-semibold">Department of AI & ML</span> clinched <span className="text-yellow-400 font-bold">first place</span> in the Project Stalls category at <span className="text-purple-300 font-semibold">PhaseShift 2025</span>.
                      </p>
                      <p className="text-xl md:text-2xl leading-relaxed text-center">
                        What makes this victory even more impressive? <span className="text-purple-300 font-bold">We outperformed departments with years—even decades more experience than us.</span> As one of the newest departments at BMSCE, we proved that innovation, dedication, and cutting-edge expertise trump legacy every time.
                      </p>
                    </div>
                    <div className="max-w-4xl mx-auto mt-12 text-center space-y-8">
                      <p className="text-xl md:text-2xl leading-relaxed text-purple-200">We thank our faculty coordinators</p>
                      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <span className="text-2xl font-bold text-gray-300">Dr. Monika Puttaramaiah</span>
                        <span className="text-2xl font-bold text-gray-300">Soniya L</span>
                      </div>
                      <p className="text-xl md:text-2xl leading-relaxed text-purple-200 pt-6">We also thank our dedicated students</p>
                      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {['Pranav Veeraghanta', 'Likith Chowdary', 'Rishi', 'S Sanjana', 'Sowmi', 'Vikhyat', 'Abhinav'].map((name, index) => (
                          <span key={index} className="text-lg md:text-xl font-semibold text-yellow-400">{name}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-purple-300 text-xl md:text-2xl italic font-semibold mt-8">
                      <Award size={28} />
                      <span>This is just the beginning</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Research Areas */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-900/20 to-transparent skew-x-12" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-purple-500" />
                    <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">Research Areas</h2>
                    <div className="w-16 h-1 bg-purple-500" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    {researchAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative"
                      >
                        <div className="flex flex-col h-full p-6 rounded-xl bg-purple-900/40 shadow-md border border-purple-500/20 group-hover:bg-purple-800/40 group-hover:shadow-lg transition-all duration-300"
                          style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                          <div className="flex flex-col items-center text-center">
                            <area.icon className="text-purple-400 group-hover:text-purple-300 transition-colors mb-4" size={48} />
                            <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                            <div className="w-12 h-1 bg-purple-500 mb-4 transform origin-center transition-all duration-300 group-hover:w-16 group-hover:bg-fuchsia-500" />
                            <p className="text-purple-100 text-base mb-4">{area.description}</p>
                            <ul className="space-y-2 w-full">
                              {area.projects.map((project, idx) => (
                                <li key={idx} className="text-purple-200 text-sm flex items-center">
                                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Center of Excellence */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-purple-900/20 to-transparent -skew-x-12" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-purple-500" />
                    <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">B.S. Narayan Center of Excellence</h2>
                    <div className="w-16 h-1 bg-purple-500" />
                  </div>
                  <p className="text-purple-100 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-8">
                    A state-of-the-art facility fostering dynamic industry-academic synergy for AI adoption, powered by cutting-edge infrastructure and expertise.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-purple-900/40 rounded-xl p-8 shadow-md border border-purple-500/20 backdrop-blur-sm"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                      <h3 className="text-2xl font-semibold mb-6 text-purple-400 righteous-regular">Infrastructure</h3>
                      <div className="grid gap-6">
                        {centerOfExcellence.infrastructure.map((item, index) => (
                          <div key={index} className="flex items-start group">
                            <item.icon className="w-6 h-6 text-purple-400 mr-4 mt-1 group-hover:text-purple-300 transition-colors" />
                            <div>
                              <h4 className="font-semibold mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                              <p className="text-purple-200 text-sm">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-purple-900/40 rounded-xl p-8 shadow-md border border-purple-500/20 backdrop-blur-sm"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                      <h3 className="text-2xl font-semibold mb-6 text-purple-400 righteous-regular">Services Offered</h3>
                      <ul className="space-y-4">
                        {centerOfExcellence.services.map((service, index) => (
                          <li key={index} className="flex items-start group">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 group-hover:bg-purple-300 transition-colors" />
                            <span className="text-purple-200 group-hover:text-white transition-colors">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <motion.div
                    className="relative rounded-xl overflow-hidden h-[400px] shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                  >
                    <Image src="https://gradient-content-server.vercel.app/content/department/class.jpeg" alt="B.S. Narayan Center of Excellence" loading="lazy" className="object-cover" fill />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <p className="text-lg text-purple-100">Experience the future of AI research and development at our cutting-edge facility</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Facilities */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-900/20 to-transparent skew-x-12" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-purple-500" />
                    <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">Our Facilities</h2>
                    <div className="w-16 h-1 bg-purple-500" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative rounded-xl shadow-lg bg-purple-900/40 border border-purple-500/20"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                      >
                        <div className="overflow-hidden">
                          <Image
                            src={facility.image}
                            alt={facility.name}
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-white">{facility.name}</h3>
                          <p className="text-purple-100 text-sm">{facility.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </>
  )
}
