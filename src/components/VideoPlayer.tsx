import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  ArrowLeft,
  Maximize,
  Minimize,
  Film,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { VIDEO_URL, YOUTUBE_VIDEO_ID, MOVIE_DATA } from '../config/movieConfig';

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
}

function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (match) return match[1];
  if (/^[\w-]{11}$/.test(url.trim())) return url.trim();
  return null;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>(VIDEO_URL);

  useEffect(() => {
    if (isOpen) {
      setVideoUrl(VIDEO_URL);
    }
  }, [isOpen]);

  const youtubeId = extractYouTubeId(videoUrl) || YOUTUBE_VIDEO_ID;

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation: Escape closes or exits fullscreen
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          onClose();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        // Toggle fullscreen
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#060608] flex flex-col items-center justify-center select-none overflow-hidden animate-fadeIn"
    >
      {/* Top Header Bar Overlay */}
      <div className="w-full z-30 px-4 sm:px-6 py-3.5 bg-gradient-to-b from-black via-black/90 to-transparent border-b border-zinc-800/80 flex items-center justify-between">
        {/* Back Button and Branding */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-zinc-300 hover:text-white group px-3 py-1.5 rounded-sm bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Voltar para a plataforma"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">Voltar</span>
          </button>

          <div className="hidden sm:block h-4 w-px bg-zinc-800 mx-1" />

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-xs bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-xs">
              <span className="font-cinzel font-bold text-black text-xs">C</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold font-cinzel">
                  CINEWORLD+
                </span>
                <span className="text-[10px] text-zinc-400 hidden md:inline">· Exibição Oficial</span>
              </div>
              <span className="text-xs font-semibold text-white tracking-wide truncate max-w-[200px] sm:max-w-md">
                {MOVIE_DATA.title}
              </span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Watch directly on YouTube button */}
          <a
            href={`https://youtu.be/${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-xs text-zinc-300 hover:text-amber-300 transition-colors"
            title="Abrir no YouTube"
          >
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            <span>Abrir no YouTube</span>
          </a>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="w-9 h-9 rounded-sm bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
            title={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia (F)'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-sm bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar reprodutor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Video Viewport */}
      <div className="relative flex-1 w-full flex items-center justify-center p-0 sm:p-2 md:p-4 bg-black">
        {/* Subtle Ambient Golden Glow Behind the Video */}
        <div className="absolute inset-0 bg-radial from-amber-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative w-full h-full max-w-[1400px] flex items-center justify-center">
          <div className="w-full aspect-video max-h-[calc(100vh-80px)] rounded-sm overflow-hidden bg-black shadow-2xl shadow-black border border-zinc-800/80">
            {youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="Curta-metragem Memórias de Marta | CINEWORLD"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <Film className="w-12 h-12 text-amber-400" />
                <h3 className="font-cinzel text-xl text-white">Carregando filme...</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar Info Strip */}
      <div className="w-full py-2.5 px-6 bg-[#08080a] border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-medium text-zinc-300">Produção CINEWORLD</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span>{MOVIE_DATA.institution}</span>
        </div>
        <div className="text-zinc-500 text-[11px] mt-1 sm:mt-0">
          Pressione <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-[10px]">ESC</kbd> para fechar ou <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-[10px]">F</kbd> para tela cheia
        </div>
      </div>
    </div>
  );
};
