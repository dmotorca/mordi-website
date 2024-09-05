import React from 'react';

interface SectionProps {
  title: string;
  content: string;
  titleClassName?: string;
  contentClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  content,
  titleClassName = 'text-3xl font-bold lg:text-6xl',
  contentClassName = 'w-full leading-snug lg:text-2xl',
}) => {
  return (
    <div className="mb-4">
      <h2 className={titleClassName}>{title}</h2>
      <p className={contentClassName}>{content}</p>
    </div>
  );
};

export default Section;
