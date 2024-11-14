import StatusButton from '@/components/ui/statusButton';
import {Input} from '@/components/ui/input';
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import ContentViews from '@/components/ui/contentViews';
import {Inquiry} from '@/types/allTypes';

export default function InquiriesNavigation({inquiries = []}) {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredInquiries =
    inquiries?.filter((inquiry: Inquiry) =>
      inquiry.title.toLowerCase().includes(searchQuery.toLowerCase()),
    ) ?? [];

  return (
    <ContentViews>
      <AnimatePresence>
        <div className='mx-auto flex flex-col h-screen min-w-[424px] w-2/5 max-w-[560px]'>
          <h1 className='text-3xl font-bold text-center mb-6 mr-auto p-4'>
            {t('Inquiries')}
          </h1>
          <div>
            <motion.div layout transition={{duration: 0.2}}>
              <Input
                className='mb-2'
                placeholder='Search Inquiry'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
          <div>
            {filteredInquiries.map((inquiry: Inquiry) => (
              <motion.div
                key={inquiry.id}
                layout
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
                className='rounded-sm bg-uiColorSecondary10 p-4 mb-4 flex hover:bg-uiColorSecondary20 cursor-pointer'
                onClick={() => navigate(`/inquiries/${inquiry.id}`)}>
                <div>
                  <StatusButton progress={inquiry.status} size='small' />
                </div>
                <div className='flex flex-col mb-2 flex-grow'>
                  <div className='font-semibold flex flex-shrink-0'>
                    {inquiry?.person?.name} - {inquiry?.person?.email}
                  </div>
                  <div className=''>
                    {new Date(inquiry.createdAt).toLocaleDateString()} -
                    {new Date(inquiry.createdAt).toLocaleTimeString()} -
                    {inquiry.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatePresence>
    </ContentViews>
  );
}
