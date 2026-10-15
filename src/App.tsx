import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CatalogSection } from './components/CatalogSection';
import { MovieDetailsView } from './components/MovieDetailsView';
import { VideoPlayer } from './components/VideoPlayer';
import { Footer } from './components/Footer';

export default function App() {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(false);

  // Trigger dedicated movie details modal
  const handleOpenDetails = () => {
    setIsDetailsOpen(true);
  };

  // Trigger video player directly to play the movie immediately
  const handlePlayMovie = () => {
    setIsDetailsOpen(false);
    setIsPlayerOpen(true);
  };

  const handleHomeClick = () => {
    setIsDetailsOpen(false);
    setIsPlayerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* Navigation Header */}
      <Navbar
        onWatchClick={handlePlayMovie}
        onHomeClick={handleHomeClick}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Spotlight */}
        <HeroSection
          onWatchClick={handlePlayMovie}
          onInfoClick={handleOpenDetails}
        />

        {/* Exclusive Catalog: Only Memórias de Marta */}
        <CatalogSection
          onMovieClick={handlePlayMovie}
        />
      </main>

      {/* Dedicated Movie View / Modal with info & details */}
      <MovieDetailsView
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onPlayClick={handlePlayMovie}
      />

      {/* Integrated Cinematic Video Player */}
      <VideoPlayer
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
      />

      {/* Footer */}
      <Footer
        onMovieClick={handleOpenDetails}
      />
    </div>
  );
}
