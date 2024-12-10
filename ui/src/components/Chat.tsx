import { useState } from 'react';
import { IMessage } from '../constants/appContants';
import { InputText } from 'primereact/inputtext';
import { TbSend } from 'react-icons/tb';

const Chat = ({ messagesData }: { messagesData: IMessage[] }) => {
  const [messages, setMessages] = useState<IMessage[] | []>(messagesData);
  return (
    <div className=" relative pb-5 h-[92%] flex flex-col w-full ">
      {messages.map((message) => (
        <div
          className={`flex flex-col max-w-[50%] ${
            message.sender == 'me' && 'ml-auto'
          }`}
        >
          <div className="bg-blue-100 p-3 py-1 rounded-r-full rounded-l-full">
            <p>{message.content}</p>
          </div>
          <p
            className={`text-xs pt-1 font-light ${
              message.sender == 'me' ? 'pr-2 ml-auto' : 'pl-2'
            }`}
          >
            {message.createdAt}
          </p>
        </div>
      ))}
      <div className=" w-full absolute bottom-3 flex border rounded-r-full rounded-l-full justify-between py-2 items-center">
        <InputText
          placeholder="Message goes here ..."
          className="boredr-none shadow-none w-[95%]"
        />
        <TbSend size={28} className="text-blue-400 mt-1 mr-3" />
      </div>
    </div>
  );
};

export default Chat;
