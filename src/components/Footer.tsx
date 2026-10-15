import React from 'react';
import { Film } from 'lucide-react';

interface FooterProps {
  onMovieClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onMovieClick }) => {
  return (
    <footer className="w-full bg-[#060608] border-t border-zinc-900 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-900/80">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20">
              <span className="font-cinzel font-bold text-black text-sm tracking-tighter">C</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-cinzel text-lg font-bold tracking-widest text-zinc-100">
                CINEWORLD
              </span>
              <span className="text-amber-400 font-bold text-base leading-none">+</span>
            </div>
          </div>

          {/* Tagline / Curta */}
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Film className="w-3.5 h-3.5 text-amber-500/70" />
            <button
              onClick={onMovieClick}
              className="hover:text-amber-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Memórias de Marta — Curta-metragem Oficial
            </button>
          </div>
        </div>

        {/* Required Texts */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p className="font-medium text-zinc-400 tracking-wide">
            Uma produção CINEWORLD
          </p>
          <p className="text-zinc-500 font-light">
            © 2026 CINEWORLD. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
