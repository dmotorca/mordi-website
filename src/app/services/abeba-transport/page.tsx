import React from 'react';

import Section from '@/components/section-layout';

const AbebaTransportPage = () => {
  return (
    <>
      <div className="px-4  lg:px-20 py-4">
        <Section
          title="Abeba Transport"
          content=" Abeba Transport stands as a pioneering leader in Ethiopia&rsquo;s
          transport sector and a key importer of heavy-duty trucks. With a
          robust fleet of over 100 freight trucks and 50 fuel transport
          vehicles, we are committed to delivering reliable and efficient
          transportation services across the nation."
        />

        <img
          className="lg:block lg:mx-auto mb-4"
          src="/stock-images-videos/abebaTruck.png"
          alt="Image of a Truck in Ethiopia"
        ></img>

        <Section
          title="More about Abeba Transport"
          content=" Abeba Transport is a trailblazing leader in Ethiopia&rsquo;s transport
          sector and a prominent importer of heavy trucks. With a fleet of over
          100 freight trucks and 50 fuel transport vehicles, we proudly serve
          major organizations such as TOTAL Ethiopia and the World Food
          Programme (WFP), ensuring reliable and efficient transport solutions
          across the country. Fuel Transport Services Our fleet of over 50 fuel
          transport trucks is fully equipped and ready to meet your needs. We
          currently partner with leading organizations like TOTAL Ethiopia and
          others, delivering reliable and efficient fuel transport solutions.
          Dry Transport Services With a fleet of over 100 dry transport trucks,
          we specialize in reliable transportation along the Ethio-Djibouti
          corridor. For more information on how we can support your logistics
          needs, contact us today. Heavy Truck Import Looking to purchase heavy
          trucks? Contact us today. With extensive experience in importing top
          brands like MAZ, MAN, Sino, and more, we’re your trusted partner for
          quality trucks."
        />
      </div>
    </>
  );
};

export default AbebaTransportPage;
