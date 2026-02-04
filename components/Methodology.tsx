'use client';
import methodologyData from '@/state/methodologyData';

const Methodology = () => {
  return (
    <section className="py-20 px-6 md:px-0">
      <h4 className='text-center mb-8'>Our <span className="text-primary">Methodology</span></h4>

      <div className="container mx-auto flex flex-col md:flex-row sm:flex-row gap-10 ">
        {methodologyData.map((v, k) => (
          <div key={k} className="shadow-lg rounded-2xl p-6 ">
            <h6>{v.title}</h6>
            <p className="text-black/70 mt-4">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;
