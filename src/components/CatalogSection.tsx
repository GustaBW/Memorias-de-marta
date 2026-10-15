import React from 'react';
import { Play, Film } from 'lucide-react';
import { movieImages } from '../assets/images';
import { MOVIE_DATA } from '../config/movieConfig';

interface CatalogSectionProps {
  onMovieClick: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onMovieClick }) => {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-[#08080a] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-zinc-900/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-1.5">
              <Film className="w-3.5 h-3.5 text-amber-400" />
              <span>Estreia Exclusiva</span>
            </div>
            <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-wide">
              Produção original CINEWORLD
            </h2>
          </div>
          <p className="text-xs text-zinc-400 font-light">
            Seleção única cinematográfica da produtora
          </p>
        </div>

        {/* Single Film Showcase Card */}
        <div className="max-w-md sm:max-w-lg lg:max-w-xl">
          <div
            onClick={onMovieClick}
            className="group relative cursor-pointer rounded-sm overflow-hidden bg-zinc-900/90 border border-zinc-800/80 hover:border-amber-400/50 shadow-xl shadow-black/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onMovieClick();
              }
            }}
            aria-label={`Ver detalhes e assistir ${MOVIE_DATA.title}`}
          >
            {/* Poster / Thumbnail Aspect Ratio Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src={movieImages.poster}
                alt="Pôster oficial do curta-metragem Memórias de Marta"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Scrim Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Top Studio Watermark Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/70 backdrop-blur-sm border border-amber-500/20 rounded-xs text-[11px] font-cinzel font-semibold text-amber-300">
                <span>CINEWORLD</span>
                <span className="text-white text-[9px]">ORIGINAL</span>
              </div>

              {/* Hover Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <div className="w-14 h-14 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl shadow-amber-400/50">
                  <Play className="w-6 h-6 fill-black ml-0.5" />
                </div>
              </div>

              {/* Bottom Card Overlay Content */}
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-amber-400 font-medium text-xs tracking-wider uppercase">
                    Curta-metragem
                  </span>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide">
                    {MOVIE_DATA.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                    {MOVIE_DATA.subtitle}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs rounded-sm shadow-md group-hover:from-amber-300 group-hover:to-amber-400 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Assistir</span>
                </div>
              </div>
            </div>

            {/* Bottom Details Footer */}
            <div className="p-4 bg-zinc-950/80 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span>{MOVIE_DATA.duration}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>{MOVIE_DATA.releaseYear}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>{MOVIE_DATA.studio}</span>
              </div>
              <span className="text-amber-400/90 font-medium group-hover:translate-x-0.5 transition-transform">
                Clique para abrir →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
