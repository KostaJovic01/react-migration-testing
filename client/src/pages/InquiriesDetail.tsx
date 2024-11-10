import {useNavigate, useParams} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {motion, AnimatePresence} from 'framer-motion';
import {useInquiry} from '@/stores/InquiriesStore';
import StatusButton from '@/components/ui/statusButton';
import ContentViews from '@/components/ui/contentViews';
import {Close} from '@/components/icons/Close';
import {Delete} from '@/components/icons/Delete';

export default function InquiryDetails() {
  const {inquiryId} = useParams();
  const navigate = useNavigate();
  const {data: inquiry, isLoading, error} = useInquiry(inquiryId);

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
          <div className='flex'>
            <Button> Inquiry </Button>
            <Button> Status </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <ContentViews Content={mainContent} NavBar={navbarContent}></ContentViews>
  );
}
