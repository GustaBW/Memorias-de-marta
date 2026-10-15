import React from 'react';
import { Play, Info, Award } from 'lucide-react';
import { movieImages } from '../assets/images';
import { MOVIE_DATA } from '../config/movieConfig';

interface HeroSectionProps {
  onWatchClick: () => void;
  onInfoClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onWatchClick, onInfoClick }) => {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-end pb-16 sm:pb-24 pt-28 overflow-hidden group">
      {/* Background Image Container with Smooth Zoom on Hover */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <img
          src={movieImages.hero}
          alt="Cena cinematográfica de Memórias de Marta"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center grayscale contrast-110 brightness-90 transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Cinematic Multi-layered Vignette and Gradient Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/65 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/80 to-transparent pointer-events-none" />
        
        {/* Subtle Warm Gold Rim Light Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-5">
          {/* Production Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <span className="w-5 h-[1.5px] bg-amber-400"></span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Produção Original CINEWORLD
            </span>
            <span aria-hidden="true" className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-zinc-400 font-normal lowercase first-letter:uppercase hidden sm:inline">
              {MOVIE_DATA.sourceMaterial}
            </span>
          </div>

          {/* Title in Cinematic Typography */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wider leading-[1.1] drop-shadow-md text-balance">
            {MOVIE_DATA.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-light text-amber-200/90 italic tracking-wide">
            {MOVIE_DATA.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-light drop-shadow-sm">
            {MOVIE_DATA.synopsisParagraphs[0]}
          </p>

          {/* Unboxed Metadata Line with Subtle Separators */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-400 pt-1">
            <span className="text-amber-400/90 font-medium">Curta-metragem</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{MOVIE_DATA.duration}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{MOVIE_DATA.releaseYear}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="px-1.5 py-0.5 rounded border border-zinc-700 text-[10px] text-zinc-300 font-mono">
              {MOVIE_DATA.ageRating}
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{MOVIE_DATA.country}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <button
              onClick={onWatchClick}
              className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 rounded-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>ASSISTIR AGORA</span>
            </button>

            <button
              onClick={onInfoClick}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-sm bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-amber-400/40 font-medium text-sm tracking-wide transition-all duration-200 backdrop-blur-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <Info className="w-4 h-4 text-amber-400" />
              <span>MAIS INFORMAÇÕES</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
