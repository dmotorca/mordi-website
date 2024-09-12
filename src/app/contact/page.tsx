import React from 'react';
import { ContactForm } from '@/components/contact-form';

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-gray-500 h-[50vh] w-[80vw] lg:h-[80vh] lg:w-[50vw]">
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
