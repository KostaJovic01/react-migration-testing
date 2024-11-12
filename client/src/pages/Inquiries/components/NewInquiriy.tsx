import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import AddButton from '@/components/ui/buttons/addButton';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {useAddInquiry} from '@/stores/InquiriesStore';
import {useNavigate} from 'react-router-dom';

// Define validation schema
const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  language: z.string().min(1, 'Language is required'),
});

const NewInquiry = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const addInquiry = useAddInquiry();
  const onSubmit = (data) => {
    addInquiry.mutate(data, {
      onSuccess: (result) => {
        setIsDialogOpen(false); // Close dialog on success
        navigate(`/inquiries/${result.inquiry.id}`);
      },
      onError: (error) => {
        console.error('Error adding inquiry:', error);
      },
    });
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <AddButton
            onClick={() => setIsDialogOpen(true)}
            className='fixed bottom-6 right-6'
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Inquiry</DialogTitle>
            <DialogDescription>
              Please fill out the form below.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
              <Label htmlFor='firstName'>First Name</Label>
              <Input id='firstName' {...register('firstName')} />
              {errors.firstName && (
                <p className='text-red-600'>{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor='lastName'>Last Name</Label>
              <Input id='lastName' {...register('lastName')} />
              {errors.lastName && (
                <p className='text-red-600'>{errors.lastName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' {...register('email')} />
              {errors.email && (
                <p className='text-red-600'>{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor='language'>Language</Label>
              <Input id='language' {...register('language')} />
              {errors.language && (
                <p className='text-red-600'>{errors.language.message}</p>
              )}
            </div>
            <Button type='submit'>Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewInquiry;
