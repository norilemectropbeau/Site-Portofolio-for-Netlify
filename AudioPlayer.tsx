import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // YouTube URLs need to be embedded differently
  const isYouTube = audioUrl.includes('youtu');
  const youtubeEmbedId = isYouTube ? extractYouTubeID(audioUrl) : '';
  
  // For native audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // For tracking progress with YouTube iframe
  const progressInterval = useRef<number | null>(null);
  
  useEffect(() => {
    // Only set up interval for native audio player
    if (!isYouTube && audioRef.current) {
      const updateProgress = () => {
        if (audioRef.current) {
          const { currentTime, duration } = audioRef.current;
          setProgress((currentTime / duration) * 100 || 0);
        }
      };
      
      audioRef.current.addEventListener('timeupdate', updateProgress);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', updateProgress);
        }
      };
    }
  }, [isYouTube]);
  
  // Extract YouTube ID from URL
  function extractYouTubeID(url: string): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : '';
  }
  
  const togglePlay = () => {
    if (!isYouTube && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // For YouTube, we would need to use the YouTube iframe API
      // This is a simplified version that just toggles the state
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (!isYouTube && audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };
  
  return (
    <div 
      className={`rounded-full magic-card flex items-center transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-12 h-12'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0 cursor-pointer" onClick={togglePlay}>
        {isPlaying ? (
          <Pause className="w-4 h-4 text-white" />
        ) : (
          <Play className="w-4 h-4 text-white" />
        )}
      </div>
      
      {isExpanded && (
        <>
          <div className="ml-3 flex-grow">
            <p className="text-xs text-gray-300 truncate">{title}</p>
            <div className="w-full bg-gray-700/30 rounded-full h-1.5 mt-1">
              <div 
                className="bg-gradient-to-r from-primary-600 to-accent-500 h-1.5 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="ml-2 cursor-pointer" onClick={toggleMute}>
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-gray-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-gray-300" />
            )}
          </div>
        </>
      )}
      
      {/* Hidden audio element for native audio */}
      {!isYouTube && (
        <audio 
          ref={audioRef} 
          src={audioUrl}
          className="hidden"
        />
      )}
      
      {/* If using YouTube, we'd need an iframe or other method to control the video */}
      {isYouTube && youtubeEmbedId && isPlaying && (
        <iframe 
          className="hidden"
          src={`https://www.youtube.com/embed/${youtubeEmbedId}?autoplay=1&mute=${isMuted ? 1 : 0}`}
          allow="autoplay"
          title={title}
        />
      )}
    </div>
  );
};

export default AudioPlayer;