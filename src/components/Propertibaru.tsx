import React from 'react';

export interface PropertiProps {
  title: string;
  image: string;
  slug: string;
  description: string;
  link1: string;
}

const Propertibaru: React.FC<PropertiProps> = ({
  title,
  image,
  slug,
  description,
  link1,
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-gray-700 text-sm mb-3">{description}</p>
        <div className="flex gap-4 text-blue-600 text-sm">
          <a href={link1} className="hover:underline">{link1}</a>
        </div>
      </div>
    </div>
  );
};

export default Propertibaru;
