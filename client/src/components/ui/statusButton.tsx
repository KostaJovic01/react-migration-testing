export interface IStatusButtonProps {
  progress: 'pending' | 'approved' | 'rejected';
  size: 'small' | 'medium' | 'large';
}

export default function StatusButton({progress, size}: IStatusButtonProps) {
  return (
    <div>
      <div
        className={`bg-${
          progress === 'pending'
            ? 'yellow'
            : progress === 'approved'
            ? 'green'
            : 'red'
        }-500 text-white font-bold py-2 px-4 rounded ${
          size === 'small'
            ? 'text-sm'
            : size === 'medium'
            ? 'text-md'
            : 'text-lg'
        }`}>
        {size !== 'small' && progress}
      </div>
    </div>
  );
}
