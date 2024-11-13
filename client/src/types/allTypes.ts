export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: string;
  //   image?: StaticImageData;
};

// type for enquiry status
export type Status = 'approved' | 'pending' | 'error';

// Main type for an enquiry object
export type Enquiry = {
  id: string;
  title: string;
  language: string;
  text?: string; // Optional
  person: Person;
  status: Status;
  createdAt: string; // ISO date format with timezone info.
};

export type Person = {
  name: string;
  email: string;
  phoneNumber: string; // Optional
};

// Root type that contains all enquiries.
export type EnquiriesData = {
  enquiries: Enquiry[];
};
