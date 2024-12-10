import { Button } from "primereact/button";
import { GrDocumentText } from "react-icons/gr";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { SiGooglemeet } from "react-icons/si";

const Circle: React.FC<{ status: string; isCurrentStatus?: boolean }> = ({
  status,
  isCurrentStatus,
}) => {
  return (
    <div
      className={`w-[160px] h-[160px] rounded-full flex items-center justify-center border-4 ${
        isCurrentStatus ? "border-green-600" : ""
      } text-xl font-bold`}
    >
      {status}
    </div>
  );
};

export const TrackDispute = () => {
  const status = [];
  return (
    <div>
      <div className="relative">
        <div className="mt-64 flex flex-col items-center justify-center w-full h-full overflow-hidden p-4 space-y-10">
          <div className="text-5xl my-24 font-bold">
            {" "}
            Your dispute matter us
          </div>
          {/* <div className="text-4xl font-bold w-2/4 text-center">
            We assure you that your identity will not be stored in our system if
            you choose to keep it confidential.
          </div> */}

          <div className="flex gap-10 items-center justify-center w-3/4">
            <Circle status="REGISTERED" isCurrentStatus />
            <div className="h-0.5 border w-1 flex-grow"></div>
            <Circle status="NOTICIED" />
            <div className="h-0.5 border w-1 flex-grow"></div>
            <Circle status="RESOLVED" />
          </div>

          <p className="text-xl">Engages with us Via ...</p>
          <div className="flex gap-10 mt-20">
            <Button
              label={"Try anonymous chat"}
              className="border h-12 border-blue-500 text-blue-500 p-1 px-3 rounded-r-full rounded-l-full"
            >
              <IoChatboxEllipsesOutline size={28} className="ml-2" />
            </Button>

            <Button
              label={"Schedule a meet"}
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
