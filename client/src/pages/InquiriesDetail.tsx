import {useNavigate, useParams} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {motion, AnimatePresence} from 'framer-motion';
import {useInquiry} from '@/stores/InquiriesStore';

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
          <Button onClick={() => navigate(`/`)}>Close</Button>
          <h1 className='text-2xl font-bold mb-4'>{inquiry.title}</h1>
          <p>
            <strong>Status:</strong> {inquiry.status}
          </p>
          <p>
            <strong>Person:</strong> {inquiry.person.name} (
            {inquiry.person.email})
          </p>
          <p>
            <strong>Created At:</strong>{' '}
            {new Date(inquiry.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Description:</strong> {inquiry.description}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
