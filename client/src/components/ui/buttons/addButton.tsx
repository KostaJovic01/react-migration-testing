import {Button} from '../button';
import {Add} from '@/components/icons/Add';

export type AddButtonProps = {
  className?: string;
  onClick?: () => void;
};

const AddButton = ({className, onClick}: AddButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`z-20 min-w-0 w-14 h-14 hover:w-12 hover:h-12 hover:m-1 p-0 rounded-full bg-clip-padding overflow-hidden bg-uiColorPrimary ${className}`}>
      <Add color='white' />
    </Button>
  );
};

export default AddButton;
