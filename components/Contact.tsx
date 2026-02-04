'use client';
import Map from './Map';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import ContactForm from './ContactForm';
import footerData from '@/state/footer/footerData';

const Contact = () => {
  const { city, email, street, address } = footerData;

  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row gap-10 py-20 px-6">
        <div className="flex-1 p-6 md:p-0 sm:p-0">
          <h5 className="mb-4">REACHOUT FOR SUPPORT</h5>

          <div className="flex mt=10 mb-6 border-2 border-accent-foreground p-4 gap-4">
            <div>
              <MdOutlineMail className="text-5xl text-primary" />
            </div>
            <div>
              <p>Send Us A Message</p>
              <h6 className='break-words max-w-[250px]'>{email}</h6>
            </div>
          </div>

          <div className="flex border-2 border-accent-foreground p-4 gap-4 mb-6">
            <div>
              <IoLocationOutline className="text-5xl text-primary" />
            </div>
            <div>
              <p>Visit Our Location</p>
              <h6>{city} {street}</h6> 
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
      <div>
        <Map src={street} width="100%" height="350pz" />
      </div>
    </div>
  );
};

export default Contact;
