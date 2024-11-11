import {useNavigate, useParams} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {motion, AnimatePresence} from 'framer-motion';
import {useInquiry} from '@/stores/InquiriesStore';
import StatusButton from '@/components/ui/statusButton';
import ContentViews from '@/components/ui/contentViews';
import {Close} from '@/components/icons/Close';
import {Delete} from '@/components/icons/Delete';
import TabPanel from '@/components/ui/tabPanel';
import InquiryInfo from './components/InquiryInfo';
import {Skeleton} from '@/components/ui/skeleton';

export default function InquiryDetails({tabIndex = 0}) {
  const {inquiryId} = useParams();
  const navigate = useNavigate();
  const {data: inquiry, isLoading, error} = useInquiry(inquiryId);

  if (isLoading) {
    return (
      <ContentViews
        Content={
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
        }
        NavBar={
          <div className='flex w-full'>
          </div>
        }></ContentViews>
    );
  }

  if (!inquiry) return <></>;

  const navbarContent = (
    <div className='flex w-full'>
      <Button
        size='icon'
        className='bg-uiColorSecondary20 hover:bg-uiColorSecondary40'
        onClick={() => navigate(`/`)}>
        <Close color='black' />
      </Button>
      <Button className='bg-uiColorSecondary20 hover:bg-uiColorSecondary40 ml-auto'>
        <Delete color='black' /> <div className='text-black'>Remove</div>
      </Button>
    </div>
  );

  const tabsContent = (
    <TabPanel
      initialActiveIndex={tabIndex}
      Content={[
        {
          buttonText: 'Inquiry',
          content: <InquiryInfo data={inquiry}></InquiryInfo>,
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

  const mainContent = (
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
  );

  return (
    <ContentViews Content={mainContent} NavBar={navbarContent}></ContentViews>
  );
}
