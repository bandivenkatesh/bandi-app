import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import FeatureCard from '@/components/ui/FeatureCard';
import { ScrollableTestimonials } from '@/components/ui/ScrollableTestimonials';
import { ContactForm } from '@/components/forms/ContactForm';
import { Instagram, Youtube, Facebook, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AboutSection } from '@/components/sections/AboutSection';
import Image from 'next/image';
import Link from 'next/link';
import { CustomCursor } from '@/components/CustomCursor';
import { ClientOnly } from '@/components/providers/ClientOnly';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bandi - New Superbike Generation',
  description: 'Experience the future of superbike booking with Bandi',
  metadataBase: new URL('https://bandibikes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bandi - New Superbike Generation',
    description: 'Experience the future of superbike booking with Bandi',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Example static data for features and testimonials
  const features = [
    { title: 'Advanced Technology', description: 'State-of-the-art engineering.' },
    { title: 'Seamless Booking', description: 'Effortless scheduling for test rides.' },
    { title: 'Unmatched Performance', description: 'Experience speed and control.' },
  ];

  const testimonials = [
    { name: 'John Doe', feedback: 'This is the best superbike experience I’ve ever had!' },
    { name: 'Jane Smith', feedback: 'The bikes are amazing and customer service is top-notch.' },
    { name: 'Mike Johnson', feedback: 'Incredible performance and handling. Worth every penny!' },
    { name: 'Sarah Williams', feedback: 'The booking process was seamless, and the bike exceeded my expectations.' },
    { name: 'David Chen', feedback: 'Outstanding quality and exceptional service from the Bandi team.' },
    { name: 'Emma Davis', feedback: 'The test ride experience was phenomenal. Highly recommended!' },
    { name: 'Alex Thompson', feedback: 'Best superbike rental service I\'ve ever used. Will definitely return!' },
    { name: 'Maria Garcia', feedback: 'The attention to detail and customer care is unmatched.' },
    { name: 'James Wilson', feedback: 'Fantastic selection of bikes and professional staff.' },
    { name: 'Lisa Anderson', feedback: 'An unforgettable riding experience. Can\'t wait to book again!' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Follow us on Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Subscribe on YouTube' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Like us on Facebook' },
    { icon: Send, href: 'https://telegram.org', label: 'Join us on Telegram' },
    { icon: MessageCircle, href: 'https://whatsapp.com', label: 'Chat on WhatsApp' },
  ];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} cursor-none`}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Page-specific content */}
          {children}

          {/* Features Section - keeping original size */}
          <section className="relative py-16 text-white">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1519083994092-4b1d44b3d2c3?auto=format&fit=crop&q=80"
                alt="Performance Bike Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gray-900/75" /> {/* Reduced from 85 to 75 */}
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-12 text-[#FF7300]">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section - keeping original size */}
          <section className="relative py-16 text-white">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80"
                alt="Testimonials Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/65" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Riders Say</h2>
              <div className="max-w-7xl mx-auto px-4">
                <ScrollableTestimonials testimonials={testimonials} />
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <AboutSection />

          {/* Get in Touch Section */}
          <section className="relative min-h-[800px] py-24 text-white">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80"
                alt="Contact Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/75" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-12 text-[#FF7300]">Get in Touch With Us</h2>
              <ContactForm />
              
              {/* Social Media Links */}
              <div className="mt-12 max-w-md mx-auto">
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      aria-label={social.label}
                    >
                      <div className="absolute -inset-2 bg-[#FF7300] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur" />
                      <div className="relative transform transition-transform hover:scale-110">
                        <social.icon 
                          className="h-8 w-8 text-white hover:text-[#FF7300] transition-colors" 
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative z-10 text-center mt-12">
                <Link href="/book-test-ride">
                  <Button className="bg-[#FF7300] hover:bg-[#FF7300]/90 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FF7300]/20">
                    Book a Test Ride
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
      </body>
    </html>
  );
}
