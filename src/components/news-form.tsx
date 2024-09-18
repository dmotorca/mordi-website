import React from 'react';

interface NewsFormProps {
  src: string; // Image source
  date: string; // Date of the article
  title: string; // Title of the article
  description: string; // Description of the article
  buttonHref: string; // Link to the full article
  buttonText: string; // Text for the button
}

const NewsForm: React.FC<NewsFormProps> = ({
  src,
  date,
  title,
  description,
  buttonHref,
  buttonText,
}) => {
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      {/* Image */}
      <div className="mb-4">
        <img
          src={src}
          alt="News thumbnail"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Date */}
      <div className="text-left text-gray-500 text-sm">{date}</div>

      {/* Title */}
      <div className="text-left text-2xl font-bold mt-2">{title}</div>

      {/* Description */}
      <div className="text-left text-gray-700 mt-4">{description}</div>

      {/* Button */}
      <div className="mt-6">
        <a
          href={buttonHref}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default NewsForm;
