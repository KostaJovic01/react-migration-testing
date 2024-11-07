import {Status} from '@/types/allTypes';

export interface IStatusButtonProps {
  progress: Status;
  size: 'small' | 'large';
}

function getStatusBallBackground(progress: Status) {
  switch (progress) {
    case 'pending':
      return 'bg-uiColorYellow';
    case 'approved':
      return 'bg-uiColorGreen';
    default:
      return 'bg-uiColorRed';
  }
}

function getParentBackground(progress: Status) {
  switch (progress) {
    case 'pending':
      return 'bg-uiColorYellow40';
    case 'approved':
      return 'bg-uiColorGreen40';
    default:
      return 'bg-uiColorRed40';
  }
}

function getHoverColor(progress: Status) {
  switch (progress) {
    case 'pending':
      return 'hover:bg-uiColorYellow40';
    case 'approved':
      return 'hover:bg-uiColorGreen40';
    default:
      return 'hover:bg-uiColorRed40';
  }
}

function getTextColor(progress: Status) {
  switch (progress) {
    case 'pending':
      return 'text-uiColorYellow';
    case 'approved':
      return 'text-uiColorGreen';
    default:
      return 'text-uiColorRed';
  }
}

//ParentBackground

export default function StatusButton({progress, size}: IStatusButtonProps) {
  const statusBallBackground = getStatusBallBackground(progress);
  const hoverColor = getHoverColor(progress);
  const textColor = getTextColor(progress);
  const parentBackground =
    size === 'small' ? '' : `${getParentBackground(progress)} rounded-sm px-1`;

  return (
    <div className={`flex items-center ${parentBackground} rounded-sm px-1`}>
      <div
        className={`rounded-full flex items-center justify-center h-20px w-20px ${hoverColor}`}>
        <div
          className={`rounded-full h-8px w-8px ${statusBallBackground}`}></div>
      </div>
      <div className={textColor}>{size !== 'small' && progress}</div>
    </div>
  );
}
