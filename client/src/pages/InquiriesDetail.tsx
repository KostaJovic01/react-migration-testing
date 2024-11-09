import {useNavigate, useParams} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {motion, AnimatePresence} from 'framer-motion';
import {useInquiry} from '@/stores/InquiriesStore';
import StatusButton from '@/components/ui/statusButton';
import ContentViews from '@/components/ui/contentViews';

export default function InquiryDetails() {
  const {inquiryId} = useParams();
  const navigate = useNavigate();
  const {data: inquiry, isLoading, error} = useInquiry(inquiryId);

  if (!inquiry) return <></>;

  const mainContent = (
    <AnimatePresence>
      <motion.div
        layout
        initial={{opacity: 0, x: 50}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 50}}
        transition={{duration: 0.3, ease: 'easeInOut'}}
        className='flex mx-auto p-4 h-svh'>
        <div>
          <Button className="bg-uiColorSecondary20" onClick={() => navigate(`/`)}>Close</Button>
        </div>
        <div>
          <StatusButton progress={inquiry.status} size='large' />
          <div> {inquiry?.person?.name}</div>
          <div> {inquiry?.person?.email}</div>
          <div className='flex'>
            <Button> Inquiry </Button>
            <Button> Status </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <ContentViews Content={mainContent}></ContentViews>
    </>
  );
}
