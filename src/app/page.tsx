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

          <div className="text-6xl  lg:text-8xl underline font-bold text-green-800 lg:p-10">
            <h2>NEWS</h2>
          </div>
          <div className="grid grid-cols-1 grid-rows-6 gap-0 w-full auto-rows-min lg:grid-cols-3 lg:grid-rows-2">
            <div className="">
              <NewsForm
                src="/stock-images-videos/1.png"
                date="Semptember 17, 2024"
                title="ERP & Structure Bid"
                description="Our Business Group annances a bid for ERP & Organizational Structure for both bids here attached need of our company... "
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>
            <div className="">
              <NewsForm
                src="/stock-images-videos/2.png"
                date="Semptember 17, 2024"
                title="Bid Invitation"
                description="Abeba Giday Business Group is ready to implement the 5 year strategic plan to expand and competitive its business in... "
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>
            <div className="">
              <NewsForm
                src="/stock-images-videos/3.png"
                date="Semptember 17, 2024"
                title="Training on Strategic Planning"
                description="Regarding the completion of the company's 5-year strategic plan, two rounds of strategic plan training were given to employees at... "
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>

            <div className="">
              <NewsForm
                src="/stock-images-videos/4.png"
                date="Semptember 17, 2024"
                title="Steel Production Begins"
                description="Our Business Group steel factory began production of steel, after raw material coil arrives. As the expert for the factory... "
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>

            <div className="">
              <NewsForm
                src="/stock-images-videos/5.png"
                date="Semptember 17, 2024"
                title="Coil Has Arrived"
                description="Our steel factory raw material for steel has arrived here in our company. Our steel factory is now ready to..."
                buttonHref="/"
                buttonText="Read More"
              ></NewsForm>
            </div>

            <div className="">
              <NewsForm
                src="/stock-images-videos/6.png"
                date="Semptember 17, 2024"
                title="Exciting News: New Features Coming Soon!"
                description="Various models of tires that we imported from Djibouti have arrived. The tires are Westlake and range in size from... "
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
