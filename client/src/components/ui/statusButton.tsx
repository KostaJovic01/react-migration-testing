export interface IStatusButtonProps {
  progress: 'pending' | 'approved' | 'rejected';
  size: 'small' | 'medium' | 'large';
}

export default function StatusButton({progress, size}: IStatusButtonProps) {
  return (
    <>
      <div
        className={`h-20px w-20px bg-${
          progress === 'pending'
            ? 'uiColorYellow'
            : progress === 'approved'
            ? 'uiColorGreen'
            : 'uiColorRed'
        } text-white font-bold py-2 px-4 rounded`}></div>
      <div>{size !== 'small' && progress}</div>
    </>
  );
}
