'use clicent';

import Methodology from '@/components/Methodology';
import PageHeader from '@/components/PageHeader';
import Practice from '@/components/Practice';
import PracticeCaption from '@/components/PracticeCaption';

const PracticeArea = () => {
  return (
    <>
      <PageHeader title="Practice Area" />
      <PracticeCaption />
      <Practice />
      <Methodology />
    </>
  );
};

export default PracticeArea;
