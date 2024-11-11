import { ReactNode } from 'react';
import InquiriesNavigation from './InquiriesNavigation';
import { useInquiries } from '@/stores/InquiriesStore';
import useWindowSize from '@/hooks/useWindowSize';

export default function Inquiries({ children }: { children: ReactNode }) {
  const { data: inquiries, isLoading, error } = useInquiries();
  const windowSize = useWindowSize();

  return (
    <>
      {(!children || windowSize?.width >= 1024) && (
        <div className="w-full border-r-2 border-gray-300">
          <div className="flex justify-center">
            <InquiriesNavigation inquiries={inquiries} />
          </div>
        </div>
      )}
      {children}
    </>
  );
}
