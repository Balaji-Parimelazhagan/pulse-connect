import { FormikProps } from 'formik';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Rating } from 'primereact/rating';
import { ISurvey, questionTypes } from '../constants/appContants';

const Question = ({
  type,
  title,
  index,
  isRequired,
  form,
}: {
  type: string;
  title: string;
  index: number;
  isRequired: boolean;
  form: FormikProps<ISurvey>;
}) => {
  return (
    <div className="border rounded p-2 m-2">
      <div className="font-semibold">
        <span className="pr-2">{index}.</span>
        {title}
        {isRequired && <span className="text-red-500"> *</span>}
      </div>
      <div> {getQuestion(type, form)}</div>
    </div>
  );
};

const getQuestion = (type: string, value: string | boolean | number) => {
  switch (type) {
    case questionTypes.shortText:
      return <InputText className="border-b" />;
    case questionTypes.LongText:
      return <InputTextarea className="border-b" />;
    case questionTypes.number:
      return <InputNumber className="border-b" />;
    case questionTypes.radio:
      <RadioButton className="mt-4" />;
      return;
    case questionTypes.checkbox:
      return <Checkbox checked={false} className="border" />;
    case questionTypes.rating:
      return <Rating className="mt-4" />;

    default:
      return <InputText />;
  }
};

export default Question;
