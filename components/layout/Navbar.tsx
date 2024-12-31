"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Bike } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const UserMenu = dynamic(
  () => import('@/components/auth/UserMenu').then(mod => mod.UserMenu),
  { ssr: false }
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/models', label: 'Models' },
    { href: '/about', label: 'About' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            BANDI
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/models" className="text-white hover:text-[#FF7300] transition-colors">
              Models
            </Link>
            <Link href="/about" className="text-white hover:text-[#FF7300] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-[#FF7300] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}