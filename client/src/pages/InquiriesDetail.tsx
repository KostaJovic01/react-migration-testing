import {useNavigate, useParams} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {motion, AnimatePresence} from 'framer-motion';
import {useInquiry} from '@/stores/InquiriesStore';
import StatusButton from '@/components/ui/statusButton';

export default function InquiryDetails() {
  const {inquiryId} = useParams();
  const navigate = useNavigate();
  const {data: inquiry, isLoading, error} = useInquiry(inquiryId);

  if (!inquiry) return <></>;

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{opacity: 0, x: 50}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 50}}
        transition={{duration: 0.3, ease: 'easeInOut'}}>
        <div className='container max-w-lg mx-auto p-4'>
          <div>
            <Button onClick={() => navigate(`/`)}>Close</Button>
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
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
