import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Rating } from 'primereact/rating';
import { questionTypes } from '../constants/appContants';

const Question = ({
  type,
  title,
  index,
  answer,
  isRequired,
}: {
  type: string;
  title: string;
  index: number;
  answer: any;
  isRequired: boolean;
}) => {
  return (
    <div className="p-2 m-2 text-xl">
      <div className="">
        <span className="pr-2">{index}.</span>
        {title}
        {isRequired && <span className="text-red-500"> *</span>}
      </div>
      <div> {getQuestion(type, answer)}</div>
    </div>
  );
};

const getQuestion = (type: string, answer: any) => {
  switch (type) {
    case questionTypes.shortText:
      return (
        <InputText
          className="border-b"
          // value={answer}
          onChange={(e) => (answer = e.target.value)}
        />
      );
    case questionTypes.LongText:
      return (
        <InputTextarea
          className="border-b"
          // value={answer}
          onChange={(e) => (answer = e.target.value)}
        />
      );
    case questionTypes.number:
      return (
        <InputNumber
          className="border-b"
          onChange={(e) => (answer = e.value)}
        />
      );
    case questionTypes.radio:
      return (
        <RadioButton
          className="mt-4"
          // value={answer}
          onChange={(e) => (answer = e.target.value)}
        />
      );

    case questionTypes.emoji:
      return (
        <div className="flex mt-6 text-4xl justify-evenly emoji-wrapper">
          <p>{`🤮`}</p>
          <p>{`😏`}</p>
          <p>{`🙂`}</p>
          <p>{`😍`}</p>
        </div>
      );
    case questionTypes.checkbox:
      return (
        <Checkbox
          checked={answer}
          className="border"
          onChange={(e) => (answer = e.value)}
        />
      );
    case questionTypes.rating:
      return (
        <div className="flex ml-[25%] mt-4 justify-center">
          <Rating className="question space-x-10" cancel={false} />
        </div>
      );

    default:
      return (
        <InputText value={answer} onChange={(e) => (answer = e.target.value)} />
      );
  }
};

export default Question;
