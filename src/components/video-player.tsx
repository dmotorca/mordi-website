import React, { ReactNode } from 'react';

interface VideoPlayerProps {
  children: ReactNode;
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ children, src }) => {
  return (
    <div className="relative w-full h-full lg:h-auto lg:w-auto">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover lg:object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="relative z-10 text-white text-lg p-6 w-full lg:w-2/3 lg:text-left">
        {children}
      </div>
    </div>
  );
};

export default VideoPlayer;
