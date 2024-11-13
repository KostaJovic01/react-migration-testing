import {Table, TableBody, TableCell, TableRow} from '@/components/ui/table';
import {Input} from '@/components/ui/input';
import {useInquiry, useUpdateInquiry} from '@/stores/InquiriesStore';
import {Button} from '@/components/ui/button';
import {Delete} from '@/components/icons/Delete';
import {useParams} from 'react-router-dom';

function InquiryDetailEdit() {
  const updatedInquiry = useUpdateInquiry();
  const {inquiryId} = useParams();
  const {data, isLoading, error} = useInquiry(inquiryId);
  const handleUpdateInquiry = () => {
    updatedInquiry.mutate(data, {
      onSuccess: (result) => {
        console.log('Inquiry updated:', result);
        data.user = result.user;
      },
      onError: (error) => {
        console.error('Error updating inquiry:', error);
      },
    });
  };

  return (
    <>
      <div className='text-uiColorSecondary'>Contact Information </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Title</TableCell>
            <TableCell>
              <Input placeholder='Enter title here' value={data.title} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Language</TableCell>
            <TableCell>
              <Input
                placeholder='Select language'
                value={data.language}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Text</TableCell>
            <TableCell>
              <Input placeholder='Enter text here' value={data.text} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Person Name</TableCell>
            <TableCell>
              <Input
                placeholder='Enter person name'
                value={data.person?.name}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>
              Email Address
            </TableCell>
            <TableCell>
              <Input
                placeholder='Enter email address'
                value={data.person?.email}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>
              Phone Number
            </TableCell>
            <TableCell>
              <Input
                placeholder='Enter phone number'
                value={data.person?.phoneNumber}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Status</TableCell>
            <TableCell>
              <Input placeholder='Set status' value={data.status} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Created At</TableCell>
            <TableCell>
              <Input
                placeholder='Set creation date'
                value={
                  data.createdAt
                    ? new Date(data.createdAt).toLocaleString()
                    : ''
                }
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button
        className='bg-uiColorSecondary20 hover:bg-uiColorSecondary40 ml-auto'
        onClick={handleUpdateInquiry}>
        <Delete color='black' />
        <div className='text-black'>{'Save'}</div>
      </Button>
    </>
  );
}

export default InquiryDetailEdit;
