'use client';

import imagesData from '@/state/images/imagesData';
import lawyerData from '@/state/lawyerData';
import { Button } from './ui/button';

const Lawyer = () => {
  const { lawyer } = imagesData;
  const { title, para1, para2 } = lawyerData;

  return (
    <section className=" flex md:flex-row flex-col">
      <div
        className="flex-1 md:h-150 md:py-0 py-80"
        style={{
          backgroundImage: `url(${lawyer})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
      </div>

      <div className="p-15 flex-1">
        <h5 className="mb-6">{title}</h5>
        <p className="pb-8">{para2}</p>
        <Button size="sm">Read more</Button>
      </div>
    </section>
  );
};

export default Lawyer;
