import {useState} from 'react';
import InquiryDetail from './InquiryDetail';
import InquiryDetailEdit from './InquiryDetailEdit';

function InquiryInfo() {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      {isEditing ? (
        <InquiryDetailEdit handleToggleEdit={handleToggleEdit} />
      ) : (
        <InquiryDetail handleToggleEdit={handleToggleEdit} />
      )}
    </>
  );
}

export default InquiryInfo;
