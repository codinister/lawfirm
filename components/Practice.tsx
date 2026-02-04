'use client';

import practiceData from '@/state/practiceData';

const Practice = () => {
  const data = practiceData;

  return (
    <section className="py-20 bg-secondary">

      <div className="container mx-auto mb-20">
      <h4 className='text-center'>
        Our <span className="text-primary">Practice</span> Areas
      </h4>
      </div>


      <div className="container mx-auto flex flex-col md:flex-row justify-center flex-wrap gap-10 p-6">
        {data.map((v, k) => (
          <div
            key={k}
            className="w-full md:w-[45%] rounded-2xl bg-white shadow-lg text-left p-6"
          >
            <div className="bg-primary text-white not-even:w-10 h-10 rounded-full flex justify-center text-shadow-lg items-center  mb-6 ">
              <h6>{k + 1}</h6>
            </div>

            <h5 className="mb-6">{v.title}</h5>

            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Practice;
