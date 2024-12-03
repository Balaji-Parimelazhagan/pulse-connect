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
    <div className="border rounded p-2 m-2">
      <div className="font-semibold">
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
          value={answer}
          onChange={(e) => (answer = e.target.value)}
        />
      );
    case questionTypes.LongText:
      return (
        <InputTextarea
          className="border-b"
          value={answer}
          onChange={(e) => (answer = e.target.value)}
        />
      );
    case questionTypes.number:
      return (
        <InputNumber
          className="border-b"
          value={answer}
          onChange={(e) => (answer = e.value)}
        />
      );
    case questionTypes.radio:
      <RadioButton
        className="mt-4"
        value={answer}
        onChange={(e) => (answer = e.target.value)}
      />;
      return;
    case questionTypes.checkbox:
      return (
        <Checkbox
          checked={answer}
          className="border"
          onChange={(e) => (answer = e.value)}
        />
      );
    case questionTypes.rating:
      return <Rating className="mt-4" onChange={(e) => (answer = e.value)} />;

    default:
      return (
        <InputText value={answer} onChange={(e) => (answer = e.target.value)} />
      );
  }
};

export default Question;
