import React, { useEffect } from 'react';
import { Play, X, Award, Clock, Calendar, Globe, Sparkles } from 'lucide-react';
import { movieImages } from '../assets/images';
import { MOVIE_DATA } from '../config/movieConfig';

interface MovieDetailsViewProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayClick: () => void;
}

export const MovieDetailsView: React.FC<MovieDetailsViewProps> = ({
  isOpen,
  onClose,
  onPlayClick,
}) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Background click to dismiss */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-5xl my-auto bg-[#0d0d11] border border-zinc-800/80 sm:rounded-sm overflow-hidden shadow-2xl shadow-black z-10 text-zinc-100 max-h-screen sm:max-h-[92vh] flex flex-col">
        {/* Sticky Header with Close Button */}
        <div className="absolute top-4 right-4 z-30">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/70 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Fechar detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto overscroll-contain">
          {/* Header Banner */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-black">
            <img
              src={movieImages.hero}
              alt="Cena de Memórias de Marta"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center grayscale contrast-115 brightness-75"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-[#0d0d11]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d11] via-transparent to-transparent" />

            {/* Over banner prominent info */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                  <Award className="w-3.5 h-3.5" />
                  <span>Uma Produção Exclusiva CINEWORLD</span>
                </div>
                <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-wider text-white">
                  {MOVIE_DATA.title}
                </h2>
                <p className="text-sm sm:text-base text-amber-200/90 italic">
                  {MOVIE_DATA.subtitle}
                </p>
              </div>

              {/* Big Play Button on Banner */}
              <button
                onClick={onPlayClick}
                className="self-start sm:self-auto flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <Play className="w-5 h-5 fill-black" />
                <span>REPRODUZIR FILME</span>
              </button>
            </div>
          </div>

          {/* Main Body Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Official Poster + Meta */}
            <div className="md:col-span-4 space-y-4">
              <div className="aspect-[2/3] w-full rounded-sm overflow-hidden bg-black border border-amber-500/20 shadow-2xl group">
                <img
                  src={movieImages.poster}
                  alt="Pôster oficial do curta Memórias de Marta"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Studio highlight tag */}
              <div className="p-3 bg-zinc-900/70 border border-amber-500/20 rounded-sm space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-amber-400/90 font-medium">
                  Produtora Oficial
                </div>
                <div className="font-cinzel text-base font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {MOVIE_DATA.studio}
                </div>
                <p className="text-xs text-zinc-400">
                  Distribuição exclusiva pela plataforma CINEWORLD+
                </p>
              </div>

              {/* Quick Specs */}
              <div className="space-y-2 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> Duração
                  </span>
                  <span className="text-zinc-200 font-medium">{MOVIE_DATA.duration}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> Ano
                  </span>
                  <span className="text-zinc-200 font-medium">{MOVIE_DATA.releaseYear}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <Globe className="w-3.5 h-3.5 text-amber-400" /> Instituição
                  </span>
                  <span className="text-zinc-200 font-medium text-right text-[11px]">{MOVIE_DATA.institution}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <Globe className="w-3.5 h-3.5 text-amber-400" /> País
                  </span>
                  <span className="text-zinc-200 font-medium">{MOVIE_DATA.country}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-zinc-400">Classificação</span>
                  <span className="px-1.5 py-0.5 rounded border border-zinc-700 text-[10px] text-zinc-300 font-mono">
                    {MOVIE_DATA.ageRating}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Synopsis, Production & Still */}
            <div className="md:col-span-8 space-y-6">
              {/* Synopsis Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-lg font-semibold text-amber-400 uppercase tracking-wider">
                    Sinopse
                  </h3>
                  <span className="text-xs text-amber-300/80 font-medium italic">
                    {MOVIE_DATA.sourceMaterial}
                  </span>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                  {MOVIE_DATA.synopsisParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Big CTA Bar in content flow for mobile and desktop */}
              <div className="p-4 rounded-sm bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-900/60 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-amber-300 uppercase tracking-widest font-semibold">
                    Pronto para assistir?
                  </span>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    Assista à obra completa em alta definição
                  </h4>
                </div>
                <button
                  onClick={onPlayClick}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>▶ REPRODUZIR FILME</span>
                </button>
              </div>

              {/* Production Information */}
              <div className="space-y-3 pt-2">
                <h3 className="font-cinzel text-lg font-semibold text-amber-400 uppercase tracking-wider">
                  Ficha Técnica & Produção
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-zinc-950/60 p-4 rounded-sm border border-zinc-800/80">
                  {MOVIE_DATA.credits.map((credit, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-zinc-500 uppercase tracking-wider font-medium text-[10px]">
                        {credit.role}
                      </span>
                      <p className={`font-medium ${credit.role === 'Produtora' ? 'text-amber-300 font-bold' : 'text-zinc-200'}`}>
                        {credit.name}
                      </p>
                    </div>
                  ))}
                  <div className="space-y-0.5">
                    <span className="text-zinc-500 uppercase tracking-wider font-medium text-[10px]">
                      Gênero
                    </span>
                    <p className="text-zinc-200">
                      {MOVIE_DATA.genre.join(', ')}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-zinc-500 uppercase tracking-wider font-medium text-[10px]">
                      Formato de Exibição
                    </span>
                    <p className="text-zinc-200">
                      {MOVIE_DATA.aspectRatio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cinematic Still Gallery */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Registro de Cena
                  </h3>
                  <span className="text-[11px] text-zinc-500">Fotografia 35mm P&B</span>
                </div>
                <div className="aspect-[16/9] w-full rounded-sm overflow-hidden bg-black border border-zinc-800">
                  <img
                    src={movieImages.still}
                    alt="Registro de cena do curta Memórias de Marta"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
