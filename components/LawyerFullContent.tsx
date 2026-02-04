'use client';

import imagesData from '@/state/images/imagesData';
import lawyerData from '@/state/lawyerData';
import { Button } from './ui/button';
import Conversation from './Conversation';

const LawyerFullContent = () => {
  const { lawyer } = imagesData;
  const { title, para1, para2, para3 } = lawyerData;

  return (
    <>
      <section className="container py-10 mx-auto flex-col md:flex-row sm:flex-row flex">
        <div
          className="flex-1 py-80 md:h-150 sm:h-170 "
          style={{
            backgroundImage: `url(${lawyer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div className="p-15 flex-1 flex  items-center">
          <div>
            <h5 className="mb-6">{title}</h5>
            <p className="pb-8">{para2}</p>
          </div>
        </div>
      </section>

      <div className="container  mx-auto flex flex-col sm:flex-row md:flex-row gap-10 md:pb-10 p-6">
        <div className="flex-1 rounded-2xl shadow-2xl p-6">{para1}</div>
        <div className="flex-1 rounded-2xl shadow-2xl p-6">{para3}</div>
      </div>

     <Conversation />
    </>
  );
};

export default LawyerFullContent;
