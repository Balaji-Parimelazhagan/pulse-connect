import { Button } from 'primereact/button';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { SiGooglemeet } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const Circle: React.FC<{ status: string; isCurrentStatus?: boolean }> = ({
  status,
  isCurrentStatus,
}) => {
  return (
    <div
      className={` w-32 h-32 rounded-full flex items-center justify-center border-4 ${
        isCurrentStatus ? 'border-green-600 bg-green-100' : ''
      } text-xl font-bold`}
    >
      {status}
    </div>
  );
};

export const TrackDispute = () => {
  const status = [];

  const navigate = useNavigate();
  return (
    <div>
      <div className="relative">
        <div className="mt-64 flex flex-col items-center justify-center w-full h-full overflow-hidden p-4 space-y-10">
          <div className="text-4xl text-center my-14 font-bold">
            Thanks your manifesting your concern, <br />
            Your concern is getting noticed
          </div>

          <div className="flex items-center text-center justify-center w-2/4">
            <Circle status="Concern registered" isCurrentStatus />
            <div className="h-0.5 border-2 w-1 border-green-500 flex-grow"></div>
            <Circle status="NOTICIED" />
            <div className="h-0.5 border w-1 flex-grow"></div>
            <Circle status="RESOLVED" />
          </div>

          <p className="font-semibold text-2xl">Engage us through</p>
          <div className="flex gap-10 mt-20">
            <Button
              label={'Try anonymous chat'}
              className="border h-12 border-blue-500 text-blue-500 p-1 px-3 rounded-r-full rounded-l-full"
              onClick={() =>
                navigate('/dispute/1413008-I109015/chat', { replace: true })
              }
            >
              <IoChatboxEllipsesOutline size={28} className="ml-2" />
            </Button>

            <Button
              label={'Schedule a meet'}
              className="border border-blue-500 text-blue-500 p-1 px-3 rounded-r-full rounded-l-full"
            >
              <SiGooglemeet size={20} className="ml-2" />
            </Button>
          </div>
        </div>

        <img
          title="manifest image"
          src="/src/assets/3.jpg"
          className="h-72 absolute -top-64 left-[35%] -z-10"
        />
      </div>
    </div>
  );
};
