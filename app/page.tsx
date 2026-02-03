'use client';

import Hero from '@/components/Hero';
import Lawyer from '@/components/Lawyer';
import Practice from '@/components/Practice';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Lawyer />
      <Practice />
    </>
  );
}
