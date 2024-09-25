import React from 'react';

const AbebaTradingPage = () => {
  return (
    <>
      {/* Intro Paragraph */}
      <div className="w-[80%] mx-auto mt-8">
        <p className="text-2xl text-gray-700 leading-relaxed pb-5">
          <strong className="text-3xl">Abeba Giday Trading House PLC </strong>is
          an indigenous company dedicated to importing and distributing tires,
          trucks, spare parts, and automobile batteries. In addition to
          assembling automobiles, the company is also involved in the
          manufacturing of corrugated products, positioning itself as a
          versatile and integral player in Ethiopia’s automotive and
          manufacturing sectors.
        </p>
      </div>

      {/* Section Heading */}
      <h2 className="font-semibold text-4xl text-green-800 pl-2 pb-5 w-[80%] mx-auto border-b-2 border-green-800 mb-8">
        About Abeba Giday Trading House PLC
      </h2>

      {/* Company Overview */}
      <div className="w-[80%] mx-auto mb-12">
        <p className="text-2xl text-gray-700 leading-relaxed pb-5">
          Founded in 1993, Abeba Giday Trading House PLC is a proudly indigenous
          company dedicated to driving progress in Ethiopia’s import and
          distribution sectors. Our expertise spans a wide range of industries,
          making us a trusted name in the market.
          <br></br>
          <strong>What We Do</strong>
        </p>
        <ul className="list-disc pl-6 text-2xl text-gray-700 leading-relaxed space-y-3">
          <li>
            <strong>Tyres</strong> for various vehicles
          </li>
          <li>
            <strong>Trucks and Dump Trucks</strong> for heavy-duty transport
            needs
          </li>
          <li>
            <strong>Automobiles</strong> and <strong>Motorcycles</strong>
          </li>
          <li>
            <strong>Spare Parts</strong> for trucks and automobiles
          </li>
          <li>
            <strong>Automobile Batteries</strong>
          </li>
          <li>
            <strong>Agricultural Equipment</strong> for farming solutions
          </li>
          <li>
            <strong>Iron Sheets and Steel</strong> for construction
          </li>
          <li>
            <strong>Corrugated Sheets</strong> for building materials
          </li>
          <li>
            <strong>Agrochemicals</strong> for agricultural productivity
          </li>
        </ul>
      </div>

      {/* Video Section */}
      <div className="w-[80%] mx-auto mb-12">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          Watch our introduction video:
        </h3>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/WpW5g0n7qy4"
            title="The Ethiopian Food Truck"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid mx-auto w-[80%] gap-10 lg:grid-rows-2 lg:grid-cols-3">
        {[
          { src: '/stock-images-videos/1.png', label: 'Tyre' },
          { src: '/stock-images-videos/2.png', label: 'Dumptruck' },
          { src: '/stock-images-videos/3.png', label: 'Motorcycle' },
          { src: '/stock-images-videos/4.png', label: 'Spare Parts' },
          { src: '/stock-images-videos/5.png', label: 'Automobile' },
          { src: '/stock-images-videos/6.png', label: 'Truck' },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <img
              src={item.src}
              alt={item.label}
              className="rounded-lg shadow-lg mb-4"
            />
            <div className="text-4xl font-semibold text-green-800">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AbebaTradingPage;
