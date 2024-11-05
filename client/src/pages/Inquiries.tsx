import StatusButton from '@/components/ui/statusButton';

export default function Inquiries() {
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
