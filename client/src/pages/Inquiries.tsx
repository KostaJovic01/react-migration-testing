import {ReactNode} from 'react';
import InquiriesNavigation from './InquiriesNavigation';
import {useInquiries} from '@/stores/InquiriesStore';

export default function Inquiries({children}: {children: ReactNode}) {
  const {data: inquiries, isLoading, error} = useInquiries();

  return (
    <>
      <div className='container max-w-lg lg:max-w-5xl md:max-w-md mx-auto'>
        <div className='flex justify-center'>
          <InquiriesNavigation inquiries={inquiries} />
          {children}
        </div>
      </div>
    </>
  );
}
