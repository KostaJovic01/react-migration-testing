import StatusButton from '@/components/ui/statusButton';
import {useEffect, useState} from 'react';
import {Enquiry} from '@/types/allTypes';
import {Input} from '@/components/ui/input';
import {motion, AnimatePresence} from 'framer-motion';

export default function Inquiries() {
  const [inquiries, setInquiries] = useState<Enquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredInquiries = inquiries.filter((inquiry) =>
    inquiry.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className='container max-w-lg lg:max-w-5xl md:max-w-md mx-auto'>
      <div className='flex flex-col h-screen mt-10'>
        <h1 className='text-3xl font-bold text-center mb-6 mr-auto p-4'>
          Inquiries
        </h1>
        <div>
          <Input
            className='mb-2'
            placeholder='Search Inquiry'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <AnimatePresence>
            {filteredInquiries.map((inquiry) => (
              <motion.div
                key={inquiry.id}
                layout
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
                className='rounded-sm bg-uiColorSecondary10 p-4 mb-4 flex hover:bg-uiColorSecondary20 cursor-pointer'>
                <div>
                  <StatusButton progress={inquiry.status} size='small' />
                </div>
                <div className='flex flex-col mb-2 flex-grow'>
                  <div className='font-semibold flex flex-shrink-0'>
                    {inquiry?.person?.name} - {inquiry?.person?.email}
                  </div>
                  <div className=''>
                    {new Date(inquiry.createdAt).toLocaleDateString()} -
                    {new Date(inquiry.createdAt).toLocaleTimeString()} -
                    {inquiry.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
