const ContentViews = ({NavBar, Content}) => {
  return (
      <div className="h-full w-full overflow-hidden max-h-lvh flex-col relative flex">
        <div className='absolute top-0 right-0 left-0 h-20 w-full flex flex-ro items-center'>
          {NavBar}
        </div>
        <div className='w-full m-auto overflow-auto flex py-3 flex flex-col flex-grow'>{Content}</div>
      </div>
  );
};

export default ContentViews;
