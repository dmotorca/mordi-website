import React, { ReactNode } from 'react';

interface VideoPlayerProps {
  children: ReactNode;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full lg:max-h-screen-lg lg:max-w-screen-lg">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/stock-images-videos/coffeebeans.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-white text-lg p-8 w-full lg:w-1/2 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default VideoPlayer;
