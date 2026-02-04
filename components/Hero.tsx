'use client';

import imagesData from '@/state/images/imagesData';

const Hero = () => {
  const { hero } = imagesData;

  return (
    <section
      className="h-150 p-6 md:h-screen relative before:content-[''] before:block before:absolute before:inset-0 before:bg-linear-to-t before:from-black before:-z-1 z-2"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex justify-start items-center h-screen sm:justify-center md:justify-start">
        <h3 className="text-8xlshadow-lg md:w-150 text-white font-extrabold">
          Specialized <span className="text-primary">Legal</span> Services for
          All Things corporate.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
