import {ReactNode} from 'react';
import InquiriesNavigation from './Navigation/Navigation';
import {useInquiries} from '@/stores/InquiriesStore';
import useWindowSize from '@/hooks/useWindowSize';
import AddButton from '@/components/ui/buttons/addButton';

export default function Inquiries({children}: {children: ReactNode}) {
  const {data: inquiries, isLoading, error} = useInquiries();
  const windowSize = useWindowSize();

  return (
    <>
      <AddButton className='fixed bottom-6 right-6' />
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
