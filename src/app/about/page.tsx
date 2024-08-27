import VideoPlayer from '@/components/video-player';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <VideoPlayer src="/stock-images-videos/ethiopia_stock.mp4">
        <h2 className="text-4xl font-bold lg:text-6xl">Mission</h2>
        <p className="w-full h-64 lg:text-2xl">
          Help bridge the gap between a vision and a finished goal by providing
          products and services that deliver significant value, driving us to
          become one of the top 10 business organizations in Ethiopia by 2032.
        </p>

        <h2 className="text-4xl font-bold">Vision</h2>
        <p className="w-full h-64">
          To fulfill the national purpose of increasing wealth by providing
          quality and competitive products and services in the agricultural,
          transportation, manufacturing and commercial sectors.
        </p>

        <h2 className="text-4xl font-bold">Values</h2>
        <p className="w-full h-64">
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

        <h2 className="text-4xl font-bold">Products and Distribution</h2>
        <p className="w-full text-sm h-64">
          <br></br>
          West Lake Tyres (Exclusive Dealer for Ethiopia and Djibouti)
          <br></br>
          Maz Trucks and Dump trucks
          <br></br>
          LADA Automobiles (Exclusive Dealer for Ethiopia and Djibouti)
          <br></br>
          Tractors
          <br></br>
          Agricultural Equipment
          <br></br>
          Motor Cycles
          <br></br>
          Batteries
          <br></br>
          Batteries
          <br></br>
          Spare parts
        </p>
      </VideoPlayer>
    </>
  );
};

export default AboutPage;
