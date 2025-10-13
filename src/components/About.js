import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-salon-beige">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-salon-dark mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Paradise Saloon, where beauty meets artistry. Since our establishment, 
              we've been dedicated to providing exceptional beauty services in a warm, welcoming environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of experienced professionals is passionate about helping you look and feel 
              your absolute best. From cutting-edge hair styling to luxurious spa treatments, 
              we combine traditional techniques with modern innovations to deliver results that exceed expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Paradise Saloon, we believe that everyone deserves to feel beautiful. 
              That's why we use only premium products and maintain the highest standards of cleanliness and professionalism.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Salon Interior"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-salon-gold opacity-20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

