'use client';

import imagesData from '@/state/images/imagesData';
import servicesData from '@/state/servicesData';
import CountUp from 'react-countup';

const Services = () => {
  const { bg } = imagesData;

  return (
    <section
      className="py-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
    >
      <div className="container mx-auto flex gap-10">
        {servicesData.map((v, k) => (
          <div
            key={k}
            className="flex-1 text-center p-6 border-2 border-primary rounded-2xl text-white 
            before:block 
            before:absolute
            before:content-['']
            before:inset-0 
            before:bg-linear-to-t 
            before:from-black
            before:rounded-2xl
            before:-z-1
            relative
            z-2
            "
          >
            <div
              className="w-10 h-10 rounded-full bg-primary text-white shadow-lg text-2xl flex 
            mx-auto
            justify-center items-center"
            >
              {k + 1}
            </div>

            <h5 className="my-6">
              <CountUp end={v.title} duration={4} delay={2} />
            </h5>

            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
