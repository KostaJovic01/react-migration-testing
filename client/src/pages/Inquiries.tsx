import StatusButton from '@/components/ui/statusButton';
import {useEffect, useState} from 'react';
import {Enquiry} from '@/types/allTypes';

export default function Inquiries() {
  const [inquiries, setInquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const response = await fetch('/api/inquiries'); // Adjust the URL if needed
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Data', data);
        setInquiries(data.inquiries);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    }

    fetchInquiries();
  }, []);

  return (
    <div className='container max-w-lg lg:max-w-5xl md:max-w-md mx-auto bg-gray-500'>
      <div className='flex flex-col h-screen mt-10'>
        <h1 className='text-3xl font-bold text-center mb-6 mr-auto p-4'>
          Inquiries
        </h1>
        <div>
          {inquiries?.map((inquiry) => (
            <div
              key={inquiry.id}
              className='rounded-sm bg-white p-4 mb-4 shadow'>
              <div className='flex items-center justify-between mb-2'>
                <StatusButton progress={inquiry.status} size='small' />
                <div>
                  <p className='font-semibold'>
                    {inquiry.person.name} - {inquiry.person.email}
                  </p>
                  <p className='text-gray-500 text-sm'>
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className='text-gray-800 font-medium'>{inquiry.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
