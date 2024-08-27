import VideoPlayer from '@/components/video-player';
import React from 'react';

const BazenFarmPage = () => {
  return (
    <>
      <VideoPlayer src="/stock-images-videos/coffeebeans.mp4">
        <h1 className="text-3xl font-bold pl-6 pr-5">
          Bazen Agricultural and Industrial Development
        </h1>
        <p className="mt-4 text-left pt-5 pl-6 pr-6">
          Established in 1997, Bazen Agricultural and Industrial Development was
          founded with the broader mission of advancing Ethiopia&rsquo;s
          agricultural sector. Today, Bazen operates two thriving farms: one
          dedicated to producing organic coffee and bee honey, and the other
          cultivating cotton, hybrid maize, and maintaining a small-scale mango
          orchard.
        </p>
        <p className="mt-4  text-left pl-6 pr-6">
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
          coffee export market.
        </p>
      </VideoPlayer>
    </>
  );
};

export default BazenFarmPage;
