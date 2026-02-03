'use client';

import { Title } from '@radix-ui/react-dialog';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { CiMenuFries } from 'react-icons/ci';

const MobileNav = () => {
  return (
    <nav className="md:hidden block">
      <Sheet>
        <SheetTrigger>
           <Title></Title>
              <CiMenuFries className="cursor-pointer text-2xl" />
        </SheetTrigger>

        <SheetContent>dd</SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
