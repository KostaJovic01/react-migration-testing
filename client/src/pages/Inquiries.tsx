import StatusButton from '@/components/ui/statusButton';
import { useEffect } from 'react';

export default function Inquiries() {
  useEffect(() => {
    async function fetchInquiries() {
      try {
        const response = await fetch('/api/inquiries'); // Adjust the URL if needed
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Inquiries:', data);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    }

    fetchInquiries();
  }, []);
  return (
    <div className='container max-w-lg lg:max-w-5xl md:max-w-md mx-auto bg-gray-500 '>
      <div className='flex flex-col h-screen mt-10'>
        <h1 className='text-3xl font-bold text-center mb-6 mr-auto p-4'>
          Inquiries
        </h1>
        <div className=''>
          <div className='rounded-sm w-5'>
            <div className='flex'>
              <StatusButton progress='approved' size='medium' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
