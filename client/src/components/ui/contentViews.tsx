import {ReactNode} from 'react';

type ContentViewsProps = {
  children: [ReactNode, ReactNode] | ReactNode;
};

const ContentViews = ({children}: ContentViewsProps) => {
  const [NavBar, Content] = Array.isArray(children) ? children : [null, children];
  return (
    <div className='completeContainer h-full w-full overflow-hidden max-h-lvh flex-col relative flex'>
      <div className='navContainer absolute top-0 right-0 left-0 h-20 w-full flex flex-row items-center px-6'>
        {NavBar}
      </div>
      <div
        className={`mainContainer w-full m-auto overflow-auto flex py-3 pt-32 flex-col flex-grow px-6`}>
        {Content}
      </div>
    </div>
  );
};

export default ContentViews;
