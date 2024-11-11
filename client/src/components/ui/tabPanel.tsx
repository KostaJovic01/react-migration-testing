import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './button';

interface ContentItem {
  buttonText: string;
  content: JSX.Element;
  route: string;
}

interface TabPanelProps {
  Content: ContentItem[];
  initialActiveIndex?: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ Content, initialActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const navigate = useNavigate();

  const handleButtonClick = (index: number, route: string) => {
    setActiveIndex(index);
    navigate(route);
  };

  return (
    <div>
      <div className="flex space-x-4">
        {Content.map((item, index) => (
          <Button
            key={index}
            variant={activeIndex === index ? 'uiTabButtonActive' : 'uiTabButtonInActive'}
            onClick={() => handleButtonClick(index, item.route)}
          >
            {item.buttonText}
          </Button>
        ))}
      </div>
      <div>{Content[activeIndex].content}</div>
    </div>
  );
};

export default TabPanel;
