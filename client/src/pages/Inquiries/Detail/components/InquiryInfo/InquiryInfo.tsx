import {useState} from 'react';
import {Button} from '@/components/ui/button';
import InquiryDetail from './InquiryDetail';
import InquiryDetailEdit from './InquiryDetailEdit';
import {Delete} from '@/components/icons/Delete';

function InquiryInfo() {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    if (isEditing) {
      // Save action
      saveInquiryData();
    }
    setIsEditing((prev) => !prev);
  };

  const saveInquiryData = () => {
    // Logic to save inquiryData
    // This could involve an API call or updating the state
  };

  const modifySubmitButton = (
    <Button
      className='bg-uiColorSecondary20 hover:bg-uiColorSecondary40 ml-auto'
      onClick={handleToggleEdit}>
      <Delete color='black' />
      <div className='text-black'>{isEditing ? 'Save' : 'Modify'}</div>
    </Button>
  );

  return (
    <>
      <InquiryDetailEdit/>
    </>
  );

  return (
    <>
      {isEditing ? (
        <InquiryDetailEdit data={data} submitButton={modifySubmitButton} />
      ) : (
        <InquiryDetail data={data} submitButton={modifySubmitButton} />
      )}
    </>
  );
}

export default InquiryInfo;
