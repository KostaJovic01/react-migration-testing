import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {Status} from '@/types/allTypes';
import '@testing-library/jest-dom';
import StatusButton from '@/components/ui/statusButton';

describe('StatusButton', () => {
  const renderComponent = (
    progress: Status,
    size: 'small' | 'large',
    className?: string,
  ) => {
    render(
      <StatusButton progress={progress} size={size} className={className} />,
    );
  };

  it('should render with correct classes for pending status', () => {
    renderComponent('pending', 'large');
    const parentDiv = screen.getByText('Pending').parentElement;
    expect(parentDiv).toHaveClass('bg-uiColorYellow10');
  });

  it('should render with correct classes for approved status', () => {
    renderComponent('approved', 'large');
    const parentDiv = screen.getByText('Approved').parentElement;
    expect(parentDiv).toHaveClass('bg-uiColorGreen10');
  });

  it('should render with correct classes for rejected status', () => {
    renderComponent('error', 'large');
    const parentDiv = screen.getByRole('status');
    expect(parentDiv).toHaveClass('bg-uiColorRed10');
  });

  it('should render small size without parent background and no text', () => {
    renderComponent('pending', 'small');
    const parentDiv = screen.getByRole('status'); // Assuming the component has an appropriate role
    expect(parentDiv).not.toHaveClass('bg-uiColorYellow10');
    expect(parentDiv).toHaveTextContent(/^$/); // Checks that there's no text content
  });

  it('should apply additional className', () => {
    renderComponent('pending', 'large', 'additional-class');
    const parentDiv = screen.getByRole('status');
    expect(parentDiv).toHaveClass('additional-class');
  });
});
