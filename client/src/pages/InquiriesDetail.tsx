import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Enquiry} from '@/types/allTypes';
import {Button} from '@/components/ui/button';
import {motion, AnimatePresence} from 'framer-motion';

export default function InquiryDetails() {
  const {inquiryId} = useParams();
  const [inquiry, setInquiry] = useState<Enquiry | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchInquiry() {
      try {
        const response = await fetch(`/api/inquiries/${inquiryId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setInquiry(data.inquiry);
      } catch (error) {
        console.error('Error fetching inquiry details:', error);
      }
    }

    fetchInquiry();
  }, [inquiryId]);

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
