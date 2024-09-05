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
          <span className="font-bold text-4xl">Home</span>
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
            <CarouselContent>
              <CarouselItem>
                <img src="/stock-images-videos/westLakeTires.png"></img>
              </CarouselItem>
              <CarouselItem>
                <img src="/stock-images-videos/coffeebeansTable.png"></img>
              </CarouselItem>
              <CarouselItem>
                <img src="/stock-images-videos/water.png "></img>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg bg-white bg-opacity-10"></div>
        </div>
      </div>
    </>
  );
}
