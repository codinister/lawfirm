'use client';
import imagesData from '@/state/images/imagesData';
import Image from 'next/image';
import navData from './navData';
import Link from 'next/link';
import { Button } from '../ui/button';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

const DesktopNav = () => {
  const [getScrollAmnt, setScrollAmnt] = useState(0);
  const { logo } = imagesData;

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollAmnt(latest);
  });

  return (
    <motion.nav 

    className={` ${getScrollAmnt > 0.08 ? 'bg-white transition-all duration-1000 text-black shadow-lg' : 'text-white'}  hidden md:block py-3 fixed top-0 left-0 w-full z-20`}>
      <div className="container mx-auto flex">
        <div className="flex-1">
          <Image src={logo} alt="" height="70" width="70" />
        </div>
        <div className="flex-8 flex gap-8 justify-center items-center">
          {navData.map((v, k) => (
            <Link href={v.path} key={k}>
              {v.name}
            </Link>
          ))}
        </div>
        <div className="flex-1 flex items-center">
          <Link href="/contact">
            <Button size="lg">Connect</Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default DesktopNav;
