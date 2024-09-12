'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay'; // Import the Autoplay plugin

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
          <span className="font-bold text-4xl pt-5">Home</span>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent className="w-full h-[20vh] lg:h-[50vh]">
              <CarouselItem className="w-full">
                <img
                  src="/stock-images-videos/westLakeTires.png"
                  alt="West Lake Tires"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="w-full">
                <img
                  src="/stock-images-videos/coffeebeansTable.png"
                  alt="Coffee Beans Table"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="w-full">
                <img
                  src="/stock-images-videos/water.png"
                  alt="Water"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg bg-white bg-opacity-10"></div>
        </div>
      </div>
    </>
  );
}
