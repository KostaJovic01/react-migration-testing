import {useNavigate, useParams} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {motion, AnimatePresence} from 'framer-motion';
import {useInquiry} from '@/stores/InquiriesStore';
import StatusButton from '@/components/ui/statusButton';
import {Close} from '@/components/icons/Close';
import TabPanel from '@/components/ui/tabPanel';
import InquiryInfo from './components/InquiryInfo/InquiryInfo';
import {Skeleton} from '@/components/ui/skeleton';
import DeleteInquiry from './components/DeleteInquiry';
import ContentViews from '@/components/ui/contentViews';

export default function InquiryDetails({tabIndex = 0}) {
  const {inquiryId} = useParams();
  const navigate = useNavigate();
  const {data: inquiry, isLoading} = useInquiry(inquiryId || '');

  if (isLoading) {
    return (
      <ContentViews>
        <div className='flex w-full'></div>
        <div className='flex h-svh flex-col '>
          <div>
            <div className='pb-6'>
              <div className='flex flex-col space-y-3'>
                <Skeleton className='h-[125px] w-[250px] rounded-xl' />
              </div>
            </div>
            <div className='pb-8'>
              <div className='flex flex-col space-y-3'>
                <Skeleton className='h-[55px] w-[250px] rounded-xl' />
              </div>
            </div>
          </div>
          <div className='flex flex-col space-y-3'>
            <Skeleton className='h-[565px] w-[400px] rounded-xl' />
          </div>
        </div>
      </ContentViews>
    );
  }

  if (!inquiry) return <></>;

  const tabsContent = (
    <TabPanel
      initialActiveIndex={tabIndex}
      Content={[
        {
          buttonText: 'Inquiry',
          content: <InquiryInfo></InquiryInfo>,
          route: `/inquiries/${inquiry.id}`,
        },
        {
          buttonText: 'Status',
          content: <div>Status Content</div>,
          route: `/inquiries/${inquiry.id}/status`,
        },
      ]}
    />
  );

  return (
    <ContentViews>
      <div className='flex w-full'>
        <Button
          size='icon'
          className='bg-uiColorSecondary20 hover:bg-uiColorSecondary40'
          onClick={() => navigate(`/`)}>
          <Close color='black' />
        </Button>
        <DeleteInquiry inquiryId={inquiryId} />
      </div>
      <AnimatePresence>
        <motion.div
          layout
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 50}}
          transition={{duration: 0.3, ease: 'easeInOut'}}
          className='flex h-svh '>
          <div>
            <div className='pb-6'>
              <StatusButton progress={inquiry.status} size='large' />
            </div>
            <div className='pb-8'>
              <div className='text-xl font-bold'> {inquiry?.person?.name}</div>
              <div className='pt-2 text-xl'> {inquiry?.person?.email}</div>
            </div>
            <div className='flex gap-2'>{tabsContent}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </ContentViews>
  );
}
