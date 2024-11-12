import {ReactNode} from 'react';
import InquiriesNavigation from './Navigation/Navigation';
import {useInquiries} from '@/stores/InquiriesStore';
import useWindowSize from '@/hooks/useWindowSize';
import NewInquiry from '../NewInquiriy';

export default function Inquiries({children}: {children: ReactNode}) {
  const {data: inquiries, isLoading, error} = useInquiries();
  const windowSize = useWindowSize();

  return (
    <>
      <NewInquiry />
      {(!children || windowSize?.width >= 1024) && (
        <div className='w-full border-r-2 border-gray-300'>
          <div className='flex justify-center'>
            <InquiriesNavigation inquiries={inquiries} />
          </div>
        </div>
      )}
      {children}
    </>
  );
}
