import {Table, TableBody, TableCell, TableRow} from '@/components/ui/table';
import {Input} from '@/components/ui/input';
import {useInquiry, useUpdateInquiry} from '@/stores/InquiriesStore';
import {Button} from '@/components/ui/button';
import {Delete} from '@/components/icons/Delete';
import {useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const inquirySchema = z.object({
  title: z.string().min(1, 'Title is required'),
  language: z.string().min(1, 'Language is required'),
  text: z.string().optional(),
  person: z.object({
    name: z.string().min(1, 'Person name is required'),
    email: z.string().email('Invalid email address').optional(),
    phoneNumber: z.string().optional(),
  }),
  status: z.string().optional(),
  createdAt: z.date().optional(),
});

function InquiryDetailEdit({handleToggleEdit}) {
  const updatedInquiry = useUpdateInquiry();
  const {inquiryId} = useParams();
  const {data, isLoading, error} = useInquiry(inquiryId);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = (formData) => {
    console.log('test', formData);
    updatedInquiry.mutate(
      {...formData, id: inquiryId},
      {
        onSuccess: (result) => {
          handleToggleEdit();
          console.log('Inquiry updated:', result);
        },
        onError: (error) => {
          console.error('Error updating inquiry:', error);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='text-uiColorSecondary'>Contact Information </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Title</TableCell>
            <TableCell>
              <Input
                {...register('title')}
                defaultValue={data.title}
                key={data.title}
                placeholder='Enter title here'
              />
              {errors.title && <p>{errors.title.message}</p>}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Language</TableCell>
            <TableCell>
              <Input
                {...register('language')}
                defaultValue={data.language}
                key={data.language}
                placeholder='Select language'
              />
              {errors.language && <p>{errors.language.message}</p>}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Text</TableCell>
            <TableCell>
              <Input
                {...register('text')}
                defaultValue={data.text}
                key={data.text}
                placeholder='Enter text here'
              />
              {errors.text && <p>{errors.text.message}</p>}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Person Name</TableCell>
            <TableCell>
              <Input
                {...register('person.name')}
                defaultValue={data.person?.name}
                key={data.person?.name}
                placeholder='Enter person name'
              />
              {errors.person?.name && <p>{errors.person.name.message}</p>}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>
              Email Address
            </TableCell>
            <TableCell>
              <Input
                {...register('person.email')}
                defaultValue={data.person?.email}
                key={data.person?.email}
                placeholder='Enter email address'
              />
              {errors.person?.email && <p>{errors.person.email.message}</p>}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>
              Phone Number
            </TableCell>
            <TableCell>
              <Input
                {...register('person.phoneNumber')}
                defaultValue={data.person?.phoneNumber}
                key={data.person?.phoneNumber}
                placeholder='Enter phone number'
              />
              {errors.person?.phoneNumber && (
                <p>{errors.person.phoneNumber.message}</p>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Status</TableCell>
            <TableCell>
              <Input
                {...register('status')}
                defaultValue={data.status}
                key={data.status}
                placeholder='Set status'
              />
              {errors.status && <p>{errors.status.message}</p>}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Created At</TableCell>
            <TableCell>
              <Input
                placeholder='Set creation date'
                defaultValue={
                  data.createdAt
                    ? new Date(data.createdAt).toLocaleString()
                    : ''
                }
                key={data.createdAt}
                disabled
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className='gap-2 flex'>
        <Button
          className='bg-uiColorSecondary20 hover:bg-uiColorSecondary40'
          type='submit'>
          <Delete color='black' />
          <div className='text-black'>{'Save'}</div>
        </Button>
        <Button
          className='bg-uiColorSecondary20 hover:bg-uiColorSecondary40'
          type='button'
          onClick={handleToggleEdit}>
          <Delete color='black' />
          <div className='text-black'>{'Cancel'}</div>
        </Button>
      </div>
    </form>
  );
}

export default InquiryDetailEdit;
