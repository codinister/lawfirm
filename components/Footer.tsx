'use client';

import imagesData from '@/state/images/imagesData';
import footerData from '@/state/footer/footerData';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { PiPhoneOutgoingLight } from 'react-icons/pi';

const Footer = () => {
  const { logo } = imagesData;
  const { services, city, street, address, phone, note, copyright } =
    footerData;
  return (
    <footer className="py-10 bg-secondary ">
      <div className="container mx-auto flex gap-10">
        <div className="flex-1">
          <Image src={logo} width="200" height="200" alt="" />
        </div>
        <div className="flex-1">
          <h5 className="mb-6 text-primary">Services</h5>
          <ul>
            {services.map((v, k) => (
              <li key={k} className="mb-4">
                {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h5 className="mb-6 text-primary">Contact</h5>
          <ul>
            <li className="flex gap-6 mb-6">
              <div>
                <CiLocationOn className="text-5xl text-primary" />
              </div>
              <div>
                <h6 className="text-primary">{city}</h6>
                <div>{street}</div>
                <div>{address}</div>
              </div>
            </li>
            <li className="flex gap-6">
              <div>
                <PiPhoneOutgoingLight className="text-5xl text-primary" />
              </div>
              <div>
                <div>{phone}</div>
                <div>{note}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-6">{copyright}</div>
    </footer>
  );
};

export default Footer;
