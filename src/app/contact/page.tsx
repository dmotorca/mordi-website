import React from 'react';
import { ContactForm } from '@/components/contact-form';

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="border border-gray-500 h-[60vh] w-[80vw] lg:h-[80vh] lg:w-[40vw]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
