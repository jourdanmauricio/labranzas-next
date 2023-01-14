import { FC } from 'react';

interface MyProps {
  text: string;
}

const Divider: FC<MyProps> = ({ text }) => {
  return (
    <div className="divider-container">
      <div className="divider-line"></div>
      <span className="divider-content">{text}</span>
      <div className="divider-line"></div>
    </div>
  );
};

export default Divider;
