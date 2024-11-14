export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: string;
  //   image?: StaticImageData;
};

// type for Inquiry status
export type Status = 'approved' | 'pending' | 'error';

// Main type for an Inquiry object
export type Inquiry = {
  id: string;
  title: string;
  language: string;
  text?: string; // Optional
  person: Person;
  status: Status;
  createdAt: string; // ISO date format with timezone info.
};

export type updateInquiry = {
  id: string;
  title: string;
  language: string;
  text: string;
  person: Person;
  status: Status;
};

export type newInquiry = {
  firstName: string;
  lastName: string;
  email: string;
  language: string;
};

export type Person = {
  name: string;
  email: string;
  phoneNumber: string; // Optional
};

// Root type that contains all enquiries.
export type EnquiriesData = {
  enquiries: Inquiry[];
};

export type Language = 'de' | 'en';

export type LocalUserInfo = {
  id: string;
  language: Language;
};

export type LocalUserInfoState = {
  localUserInfo: LocalUserInfo;
  setUserLanguage: (language: Language) => void;
  setUser: (newUser: LocalUserInfo) => void;
  clearUser: () => void;
};
