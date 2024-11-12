import AddButton from '@/components/ui/buttons/addButton';
import { Dialog, DialogTrigger,DialogContent,DialogHeader,DialogTitle,DialogDescription } from '@/components/ui/dialog';

const NewInquiry = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <AddButton className='fixed bottom-6 right-6' />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewInquiry;
