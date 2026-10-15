import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface NavbarProps {
  onWatchClick: () => void;
  onHomeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onWatchClick, onHomeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-amber-500/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <div className="flex items-center gap-8 shrink-0">
          <button
            onClick={onHomeClick}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
            aria-label="CINEWORLD+ Início"
          >
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <span className="font-cinzel font-bold text-black text-base tracking-tighter">C</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-zinc-100 group-hover:text-amber-200 transition-colors">
                CINEWORLD
              </span>
              <span className="text-amber-400 font-bold text-lg sm:text-xl tracking-tight leading-none">
                +
              </span>
            </div>
          </button>

          {/* Simple Navigation */}
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <button
              onClick={onHomeClick}
              className="text-zinc-100 font-medium hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-400 after:rounded-full"
            >
              Início
            </button>
            <span className="text-xs text-zinc-500 uppercase tracking-widest hidden md:inline">
              Exibição Exclusiva
            </span>
          </nav>
        </div>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onWatchClick}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <Play className="w-4 h-4 fill-black" />
            <span className="whitespace-nowrap">Assistir agora</span>
          </button>
        </div>
      </div>
    </header>
  );
};
