import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Hair Styling'
    },
    {
      url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Hair Coloring'
    },
    {
      url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Manicure'
    },
    {
      url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Spa Treatment'
    },
    {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Hair Washing'
    },
    {
      url: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Makeup'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-salon-dark mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse into our world of beauty and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80"
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-salon-gold bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

