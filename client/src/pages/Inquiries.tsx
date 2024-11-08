import {ReactNode} from 'react';
import InquiriesNavigation from './InquiriesNavigation';
import {useInquiries} from '@/stores/InquiriesStore';
import useWindowSize from '@/hooks/useWindowSize';

export default function Inquiries({children}: {children: ReactNode}) {
  const {data: inquiries, isLoading, error} = useInquiries();
  const windowSize = useWindowSize();
  return (
    <>
      <div className='container max-w-lg lg:max-w-5xl md:max-w-md mx-auto'>
        <div className='flex justify-center'>
          {(!children || windowSize?.width >= 1024) && (
            <InquiriesNavigation inquiries={inquiries} />
          )}
          {children}
        </div>
      </div>
    </>
  );
}
