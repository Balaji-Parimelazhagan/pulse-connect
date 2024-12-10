import { ReactNode } from 'react';

const Card = ({
  onClick,
  children,
}: {
  onClick?: VoidFunction;
  children: ReactNode;
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg shadow p-5 h-32 w-1/4"
    >
      <div className="flex flex-col space-y-3 justify-center items-start">
        {children}
      </div>
    </div>
  );
};

export default Card;
