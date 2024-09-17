import VideoPlayer from '@/components/video-player';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <VideoPlayer src="/stock-images-videos/ethiopia_stock.mp4">
        <h2 className="text-3xl font-bold lg:text-6xl">Mission</h2>
        <p className="w-full h-44 lg:text-2xl leading-snug lg:h-28">
          Help bridge the gap between a vision and a finished goal by providing
          products and services that deliver significant value, driving us to
          become one of the top 10 business organizations in Ethiopia by 2032.
        </p>

        <h2 className="text-3xl font-bold lg:text-6xl">Vision</h2>
        <p className="w-full h-44 leading-snug lg:text-2xl lg:h-24">
          To fulfill the national purpose of increasing wealth by providing
          quality and competitive products and services in the agricultural,
          transportation, manufacturing and commercial sectors.
        </p>

        <h2 className="text-3xl font-bold lg:text-6xl">Values</h2>
        <p className="w-full h-44 leading-snug lg:text-2xl lg:h-56">
          Commitment to Quality
          <br></br>
          Integrity and Transparency
          <br></br>
          Collaborative Teamwork
          <br></br>
          Driven by Excellence
          <br></br>
          Customer-Centric Focus
          <br></br>
          Social Responsibility
        </p>

        <h2 className="text-3xl font-bold lg:text-6xl">
          Products and Distribution
        </h2>
        <p className="w-full h-44 leading-snug lg:text-2xl lg:h-60">
          West Lake Tyres
          <br></br>
          Maz Trucks and Dump trucks
          <br></br>
          LADA Automobiles
          <br></br>
          Tractors
          <br></br>
          Agricultural Equipment
          <br></br>
          Motor Cycles
          <br></br>
          Batteries
          <br></br>
          Spare Parts
        </p>
      </VideoPlayer>
    </>
  );
};

export default AboutPage;
