import {Info} from 'lucide-react';
import {toast} from 'react-hot-toast';

const ToastService = {
  success: (title: string, description: string, duration: number = 500) => {
    toast.custom(
      () => (
        <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5'>
          <div className='flex-1 w-0 p-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 pt-0.5'>
                <Info color='green' />
              </div>
              <div className='ml-3 flex-1'>
                <p className='text-sm font-medium text-green-700'>{title}</p>
                <p className='mt-1 text-sm text-gray-500'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        position: 'bottom-left',
        duration,
      },
    );
  },
  error: (title: string, description: string, duration: number = 500) => {
    toast.custom(
      () => (
        <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5'>
          <div className='flex-1 w-0 p-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 pt-0.5'>
                <Info color='red' />
              </div>
              <div className='ml-3 flex-1'>
                <p className='text-sm font-medium text-red-700'>{title}</p>
                <p className='mt-1 text-sm text-gray-500'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        position: 'bottom-left',
        duration,
      },
    );
  },
  info: (title: string, description: string, duration: number = 500) => {
    toast.custom(
      () => (
        <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5'>
          <div className='flex-1 w-0 p-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 pt-0.5'>
                <Info color='blue' />
              </div>
              <div className='ml-3 flex-1'>
                <p className='text-sm font-medium text-blue-700'>{title}</p>
                <p className='mt-1 text-sm text-gray-500'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        position: 'bottom-left',
        duration,
      },
    );
  },
};

export default ToastService;
