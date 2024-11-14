import {Delete} from '@/components/icons/Delete';
import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {useRemoveInquiry} from '@/stores/InquiriesStore';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

type DeleteInquiryProps = {
  inquiryId: string;
}

const DeleteInquiry = ({inquiryId}: DeleteInquiryProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const removeInquiry = useRemoveInquiry();
  const onRemove = () => {
    removeInquiry.mutate(inquiryId, {
      onSuccess: () => {
        setIsDialogOpen(false); // Close dialog on success
        navigate(`/`);
      },
      onError: (error) => {
        console.error('Error adding inquiry:', error);
      },
    });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className='bg-uiColorSecondary20 hover:bg-uiColorSecondary40 ml-auto'>
          <Delete color='black' /> <div className='text-black'>Remove</div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this inquiry? This action cannot be
          undone.
        </DialogDescription>
        <DialogFooter>
          <Button variant='secondary' onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant='destructive' onClick={() => onRemove()}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteInquiry;
