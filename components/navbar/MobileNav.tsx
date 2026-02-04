'use client';

import { Title } from '@radix-ui/react-dialog';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { CiLocationOn, CiMenuFries } from 'react-icons/ci';
import imagesData from '@/state/images/imagesData';
import navData from './navData';
import Image from 'next/image';
import Link from 'next/link';
import footerData from '@/state/footer/footerData';
import { PiPhoneOutgoingLight } from 'react-icons/pi';
import { useState } from 'react';
import { Button } from '../ui/button';

const MobileNav = () => {
  const { logo } = imagesData;
  const { city, street, address,  note, email } = footerData;
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden sm:hidden block bg-white w-full p-4 fixed top-0 left-0 z-19 shadow-lg">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Title></Title>
          <div className="container flex items-center gap-48">
            <CiMenuFries className="cursor-pointer text-3xl" />
            <Link href="/contact" className=" w-max py-2 px-6 rounded-full bg-primary text-white text-center border-2 border-primary flex items-center justify-center hover:text-primary hover:bg-white">
              Connect
            </Link>
          </div>
        </SheetTrigger>

        <SheetContent side="left" className="p-6 w-[85%]">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src={logo}
              alt="logo"
              className="mb-10"
              width="100"
              height="100"
            />
          </Link>
          <ul>
            {navData.map((v, k) => (
              <li key={k} className="mb-7">
                <Link onClick={() => setOpen(false)} href={v.path}>
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
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
        
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
