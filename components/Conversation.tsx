'use client';

import { Button } from './ui/button';

const Conversation = () => {
  return (
    <section className="py-20 bg-primary flex justify-center items-center *:">
      <div className="text-center text-white">
        <h4>Ready to discuss your matter?</h4>
        <p className="mb-6">
          Our team is available for a confidential consultation about your
          litigation needs.
        </p>
        <Button variant="secondary">Start a conversation</Button>
      </div>
    </section>
  );
};

export default Conversation;
