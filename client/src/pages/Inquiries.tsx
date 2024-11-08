import {useEffect, useState} from 'react';
import {Enquiry} from '@/types/allTypes';

import {ReactNode} from 'react';
import InquiriesNavigation from './InquiriesNavigation';

export default function Inquiries({children}: {children: ReactNode}) {
  const [inquiries, setInquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const response = await fetch('/api/inquiries'); // Adjust the URL if needed
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setInquiries(data.inquiries);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    }

    fetchInquiries();
  }, []);

  return (
    <>
      <div className='container max-w-lg lg:max-w-5xl md:max-w-md mx-auto'>
        <div className='flex'>
          <InquiriesNavigation inquiries={inquiries} />
          {children}
        </div>
      </div>
    </>
  );
}
