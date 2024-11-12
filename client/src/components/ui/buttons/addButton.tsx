import * as React from 'react';
import {Button} from '../button';
import {Add} from '@/components/icons/Add';

export interface IAddButtonProps {
  className?: string; // Add an optional className prop
}

export default class AddButton extends React.Component<IAddButtonProps> {
  public render() {
    const {className} = this.props;
    return (
      <Button
        className={`z-20 min-w-0 w-14 h-14 hover:w-12 hover:h-12 hover:m-1 p-0 rounded-full bg-clip-padding overflow-hidden bg-uiColorPrimary ${className}`}>
        <Add color='white' />
      </Button>
    );
  }
}
