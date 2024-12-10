import { BsIncognito } from 'react-icons/bs';
import { disputeMessages } from '../mocks/mock';
import Chat from '../components/Chat';

const AnonymousChat = () => {
  return (
    <div className="overflow-hidden bg-white rounded-lg space-y-2 border h-[90%] w-2/4 m-5 mx-auto shadow p-5">
      <div className="w-full flex justify-center">
        <div className="bg-white rounded-full border-2 border-gray-500">
          <BsIncognito className="text-gray-600 m-1" size={50} />
        </div>
      </div>
      <Chat messagesData={disputeMessages} />
    </div>
  );
};

export default AnonymousChat;
