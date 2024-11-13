import {toast} from 'react-hot-toast';

const ToastService = {
  success: (message: string) => {
    toast.success(message);
  },
  error: (message: string) => {
    toast.error(message);
  },
  custom: (message: string, options: any) => {
    toast(message, options);
  },
  info: (message: string) => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? 'opacity-100' : 'opacity-0'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 fixed bottom-4 left-4`}
          style={{zIndex: 50}}>
          <div className='flex-1 w-0 p-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 pt-0.5'></div>
              <div className='ml-3 flex-1'>
                <p className='mt-1 text-sm text-gray-500'>{message}</p>
              </div>
            </div>
          </div>
          <div className='flex border-l border-gray-200'>
            <button
              onClick={() => toast.dismiss(t.id)}
              className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
              Close
            </button>
          </div>
        </div>
      ),
      {position: 'bottom-left'},
    );
  },
};

export default ToastService;
