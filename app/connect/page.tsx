'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Instagram, Linkedin, ArrowRight, ExternalLink } from 'lucide-react'
import Head from 'next/head'


export default function Connect() {
  const [showPopup, setShowPopup] = useState(false);

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/gradient.aiml', label: '' },
    { icon: Linkedin, href: 'https://linkedin.com/company/gradient-club', label: '' },
  ];

  // Close popup automatically after 5 seconds when it's shown
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [showPopup]);

  // Shared function to handle email actions  
  const handleEmailAction = (emailUrl) => { 
    try {
      const newWindow = window.open(emailUrl, '_blank');

      // Check if window was successfully opened
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Show popup if opening the window failed
        setShowPopup(true);
        return;
      }

      // Try to detect about:blank pages
      // Use setTimeout to give the window time to navigate
      setTimeout(() => {
        try {
          // This will throw an error if cross-origin
          // But if it's about:blank, we can check the URL
          if (newWindow.location.href === 'about:blank') {
            setShowPopup(true);
            newWindow.close(); // Close the blank page as it's not useful
          }
        } catch (error) {
          // If we can't access the location due to cross-origin,
          // it means a valid page was probably loaded (not about:blank)
          // No need to show the popup
        }
      }, 500);
    } catch (error) {
      // Show popup if there was an error
      setShowPopup(true);
    }
  };

  const handleMailTo = () => {
    handleEmailAction('mailto:gradient.mel@bmsce.ac.in');
  };

  const handleSponsorshipMailTo = () => {
    handleEmailAction('mailto:gradient.mel@bmsce.ac.in?subject=Sponsorship%20Inquiry%20-%20We%20Want%20to%20Partner%20with%20Gradient&body=Hello%20Gradient%20Team%2C%0A%0AWe%20are%20interested%20in%20exploring%20sponsorship%20opportunities%20with%20your%20organization.%0A%0APlease%20share%20more%20details%20about%20partnership%20options%20and%20how%20we%20can%20collaborate.%0A%0AThank%20you%2C');
  };

  return (

    <>
    <Head>
      <title>Let's Connect | Gradient AIML</title>
      <meta name="description" content="Collaborate with Gradient AIML on AI and Machine Learning projects. Get in touch with us to explore opportunities." />
      <meta name="keywords" content="Collaborate, Gradient AIML, AI collaboration, Machine Learning partnership, BMSCE" />
      <meta property="og:title" content="Let's Connect | Gradient AIML" />
      <meta property="og:description" content="Reach out to us and collaborate with Gradient AIML on innovative AI and ML projects." />
      <meta property="og:image" content="https://gradient-content-server.vercel.app/content/Logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <div className="min-h-screen text-white" style={{ backgroundColor: '#180336' }}>
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Bree+Serif&display=swap');

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
      `}</style>
      
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right,rgb(127, 111, 168) 1px, transparent 1px), linear-gradient(to bottom, rgb(127, 111, 168) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundColor: '#180336',
        }} />

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20">
        <div className="mb-4 md:mb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 md:mb-10"
          >
            <h1 className="text-8xl sm:text-8xl md:text-8xl font-bold mt-6 md:mt-10 bree-serif-regular">
              <span className="text-white">Connect</span> <br />
              <span style={{ color: '#C4B5FD' }}>With Us</span>
            </h1>
            {/* Tagline */}
            <p className="text-purple-200 text-xl md:text-3xl mt-4 md:mt-6 font-light px-2">
              Build partnerships and foster innovation
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {/* Partner With Us Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>

              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent -skew-x-12" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-purple-500" />
                  <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                    Partner With Us
                  </h2>
                  <div className="w-16 h-1 bg-purple-500" />
                </div>

                <p className="text-purple-100 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-8">
                  Elevate your brand through strategic partnerships with Gradient
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="p-1 rounded-full bg-purple-900/40 text-purple-400 mr-3 mt-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="text-white-300 text-lg">Access to top AI & ML talent</span>
                    </div>
                    <div className="flex items-start">
                      <div className="p-1 rounded-full bg-purple-900/40 text-purple-400 mr-3 mt-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="text-white-300 text-lg">Mentorship opportunities</span>
                    </div>                  
                    <div className="flex items-start">
                      <div className="p-1 rounded-full bg-purple-900/40 text-purple-400 mr-3 mt-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="text-white-300 text-lg">Event sponsorships and visibility</span>
                    </div>
                    <div className="flex items-start">
                      <div className="p-1 rounded-full bg-purple-900/40 text-purple-400 mr-3 mt-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="text-white-300 text-lg">Showcase your technology and company</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <motion.button
                    onClick={handleSponsorshipMailTo}
                    className="py-4 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl flex items-center justify-center group transition-all duration-300 shadow-lg shadow-purple-900/20 mx-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium text-lg">Become a Sponsor</span>
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Get in Touch Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>

              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-900/20 to-transparent skew-x-12" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-purple-500" />
                  <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                    Get in Touch
                  </h2>
                  <div className="w-16 h-1 bg-purple-500" />
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  <motion.button
                    onClick={handleMailTo}
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-lg bg-purple-900/40 text-purple-400 mr-5 mt-1">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-2xl font-semibold text-purple-300 mb-1 group-hover:text-purple-400 transition-colors">
                        Email Us
                      </h3>
                      <p className="text-white-300 text-xl group-hover:text-white transition-colors">
                        gradient.mel@bmsce.ac.in
                      </p>
                    </div>
                  </motion.button>

                  <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                    <div className="p-3 rounded-lg bg-purple-900/40 text-purple-400 mr-5 mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-purple-300 mb-1">Visit Us</h3>
                      <p className="text-white-300 text-xl mb-4">
                        Department of Machine Learning<br />
                        7th Floor, PJA Block<br />
                        B.M.S. College of Engineering<br />
                        Bengaluru - 560 019
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-8 w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-purple-500/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4980576658236!2d77.5632131!3d12.9410422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1616537773339!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="BMS College of Engineering Location"
                    className="rounded-xl"
                  />
                </div>
                
                <div className="mt-3 text-center">
                  <a
                    href="https://maps.app.goo.gl/LWvaG3K55votuPv39"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Follow Us Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>

              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-purple-900/20 to-transparent -skew-x-12" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-purple-500" />
                  <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                    Follow Us
                  </h2>
                  <div className="w-16 h-1 bg-purple-500" />
                </div>

                <p className="text-purple-100 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-8">
                  Stay connected with us on social media for updates and announcements
                </p>

                <div className="flex justify-center space-x-6">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-6 rounded-xl bg-white-800/80 hover:bg-purple-900/30 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-8 h-8 text-purple-400" />
                      <p className="mt-2 text-center text-purple-300">{label}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Updated Popup - only shows when email action fails */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white-800 rounded-xl p-6 max-w-md mx-auto text-white space-y-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold">Not Working</h3>
              <p>
                Unable to open your email client automatically. Please manually email us at{' '}
                <span className="text-purple-400">gradient.mel@bmsce.ac.in</span>
              </p>
              <button
                className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>

  );
}