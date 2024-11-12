import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {useLocalUserInfo} from '@/stores/LocalUserInfo';
import {useTranslation} from 'react-i18next';

export default function LanguageSelection() {
  const {localUserInfo, setUserLanguage} = useLocalUserInfo();
  const {i18n} = useTranslation();

  return (
    <div>
      <Select
        value={localUserInfo?.language}
        onValueChange={(value) => {
          setUserLanguage(value);
          i18n.changeLanguage(value);
        }}>
        <SelectTrigger className='w-32'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='en'>English</SelectItem>
          <SelectItem value='de'>German</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
