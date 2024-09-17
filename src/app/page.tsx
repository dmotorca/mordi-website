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
          <span className="font-bold text-4xl pt-5">
            Abeba Giday Business Group
          </span>
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

          <div className="grid grid-cols-1 grid-rows-6 gap-0 w-full h-full lg:grid-cols-3 lg:grid-rows-2">
            <div className="bg-red-500"></div>
            <div className="bg-blue-500">2</div>
            <div className="bg-green-500">3</div>
            <div className="bg-yellow-500">4</div>
            <div className="bg-purple-500">5</div>
            <div className="bg-pink-500">6</div>
          </div>
        </div>
      </div>
    </>
  );
}
