import React from 'react';
import { ContactForm } from '@/components/contact-form';

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[70vh] w-[30vw] border border-gray-500">
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
