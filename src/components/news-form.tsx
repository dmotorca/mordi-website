import React from 'react';

const NewsForm = () => {
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      {/* Image */}
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/800x400"
          alt="News thumbnail"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Date */}
      <div className="text-left text-gray-500 text-sm">October 1, 2024</div>

      {/* Title */}
      <div className="text-left text-2xl font-bold mt-2">
        Exciting News: New Features Coming Soon!
      </div>

      {/* Description */}
      <div className="text-left text-gray-700 mt-4">
        We are excited to announce that new features will soon be available in
        our platform. These features include advanced customization, enhanced
        security, and much more. Stay tuned for more updates!
      </div>

      {/* Button */}
      <div className="mt-6">
        <a
          href="/full-article"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsForm;
