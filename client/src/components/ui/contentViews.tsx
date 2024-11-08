const ContentViews = ({NavBar, Content}) => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-shrink-0'>{NavBar}</div>
      <div className='container max-w-lg mx-auto py-32'>{Content}</div>
    </div>
  );
};

export default ContentViews;
