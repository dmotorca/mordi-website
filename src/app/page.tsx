'use client';

import NewsForm from '@/components/news-form';

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
      <div className="relative w-full min-h-screen">
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

          <div className="grid grid-cols-1 grid-rows-6 gap-0 w-full auto-rows-min lg:grid-cols-3 lg:grid-rows-2">
            <div className="">
              <NewsForm
                src="https://via.placeholder.com/800x400"
                date="Semptember 17, 2024"
                title="Exciting News: New Features Coming Soon!"
                description="We are excited to announce that new features will soon be available to all users"
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>
            <div className="">
              <NewsForm
                src="https://via.placeholder.com/800x400"
                date="Semptember 17, 2024"
                title="Exciting News: New Features Coming Soon!"
                description="We are excited to announce that new features will soon be available to all users"
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>
            <div className="">
              <NewsForm
                src="https://via.placeholder.com/800x400"
                date="Semptember 17, 2024"
                title="Exciting News: New Features Coming Soon!"
                description="We are excited to announce that new features will soon be available to all users"
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>

            <div className="">
              <NewsForm
                src="https://via.placeholder.com/800x400"
                date="Semptember 17, 2024"
                title="Exciting News: New Features Coming Soon!"
                description="We are excited to announce that new features will soon be available to all users"
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>

            <div className="">
              <NewsForm
                src="https://via.placeholder.com/800x400"
                date="Semptember 17, 2024"
                title="Exciting News: New Features Coming Soon!"
                description="We are excited to announce that new features will soon be available to all users"
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>

            <div className="">
              <NewsForm
                src="https://via.placeholder.com/800x400"
                date="Semptember 17, 2024"
                title="Exciting News: New Features Coming Soon!"
                description="We are excited to announce that new features will soon be available to all users"
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
