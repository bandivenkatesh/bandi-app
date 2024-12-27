"use client";

import { motion } from 'framer-motion';
import { Award, Wrench, Users, Clock } from 'lucide-react';

interface AboutFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function AboutSection() {
  const aboutFeatures: AboutFeature[] = [
    { 
      icon: Award, 
      title: "Excellence", 
      description: "10+ years of excellence in superbike services" 
    },
    { 
      icon: Wrench, 
      title: "Expert Service", 
      description: "State-of-the-art maintenance facilities" 
    },
    { 
      icon: Users, 
      title: "Community", 
      description: "Strong rider community of 5000+ members" 
    },
    { 
      icon: Clock, 
      title: "24/7 Support", 
      description: "Round-the-clock customer assistance" 
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[800px] py-24 text-white"
    >
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          style={{ y: "-10%" }}
          initial={{ y: "0%" }}
          whileInView={{ y: "-5%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80"
          alt="About Section Background"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FF7300]">About Bandi</h2>
          <p className="mt-4 text-lg text-gray-300">
            Leading the revolution in superbike experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-gray-800/50"
            >
              <div className="inline-flex p-3 rounded-full bg-[#FF7300]/20 mb-4">
                <feature.icon className="h-6 w-6 text-[#FF7300]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
