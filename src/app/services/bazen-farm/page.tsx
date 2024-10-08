import Section from '@/components/section-layout';
import VideoPlayer from '@/components/video-player';
import React from 'react';

const BazenFarmPage = () => {
  return (
    <>
      <VideoPlayer src="/stock-images-videos/coffeebeansLargeScreen.mp4">
        <Section
          title="Bazen Agricultural and Industrial Development"
          content="
          Established in 1997, Bazen Agricultural and Industrial Development was
          founded with the broader mission of advancing Ethiopia&rsquo;s
          agricultural sector. Today, Bazen operates two thriving farms: one
          dedicated to producing organic coffee and bee honey, and the other
          cultivating cotton, hybrid maize, and maintaining a small-scale mango
          orchard.
        "
          contentClassName="w-full leading-snug lg:text-2xl lg:mt-8 mb-8 mt-4"
        />
        <Section
          title=""
          content="
          About Bazen Agricultural and Industrial Development PLC Established in
          1997, Bazen Agricultural and Industrial Development PLC was founded
          with the overarching mission of advancing Ethiopia&rsquo;s
          agricultural sector. Today, Bazen operates two thriving farms: one
          dedicated to producing organic coffee and bee honey, and the other
          cultivating cotton, hybrid maize, and maintaining a small-scale mango
          orchard. Our coffee farm, Olme, is situated in the Oromiya regional
          state, Djimma zone, spanning 550 hectares of fertile land. We
          specialize in producing Djimma variety coffee, fully shaded and
          classified as specialty coffee, certified with a Q2 grade by the
          Ethiopian Commodity Exchange (ECX), UTZ, and Rainforest Alliance
          (RFA). With the capacity to export up to 60 containers of green coffee
          annually, Bazen is a significant contributor to Ethiopia&rsquo;s
          coffee export market."
        />
      </VideoPlayer>
    </>
  );
};

export default BazenFarmPage;
