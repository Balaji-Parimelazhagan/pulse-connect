import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import NewQuestion from '../components/NewQuestion';
import { IQuestion, ISurvey, questionTypes } from '../constants/appContants';
import { InputTextarea } from 'primereact/inputtextarea';
import Question from '../components/Question';
import { useFormik } from 'formik';

const CreateSurvey = () => {
  const initialValues = {
    title: '',
    description: '',
    questions: [],
    users: [],
  };

  const surveyForm = useFormik<ISurvey>({
    initialValues,
    onSubmit: () => {},
  });

  const addQuestion = (question: IQuestion) => {
    surveyForm.setFieldValue('questions', [
      ...surveyForm.values.questions,
      question,
    ]);
  };

  const [newQuestion, setNewQuestion] = useState({
    title: '',
    type: questionTypes.shortText,
    isRequired: false,
  });
  const [isInteractiveMode, setIsInteractiveMode] = useState(false);
  return (
    <div className="mx-auto my-10 w-4/5 space-y-4 flex flex-col items-center">
      <div className="flex gap-2 items-center">
        <label className="font-bold text-xl">Interactive mode</label>
        <InputSwitch
          checked={isInteractiveMode}
          onChange={(e) => setIsInteractiveMode(e.value)}
        />
      </div>
      <div className="flex flex-col w-full gap-2 items-center">
        <InputText
          placeholder="Unititled Survey"
          className="w-3/6 p-1.5 border font-bold text-center rounded-md min-w-96"
        />
        <InputTextarea
          placeholder="Survey Description"
          className="w-4/6 p-1.5 pt-2 border font-semibold text-center rounded-md min-w-96"
        />
      </div>
      <div className="flex flex-col w-3/5">
        {surveyForm?.values?.questions?.map((question, index) => (
          <Question key={index} {...{ ...question, index, form: surveyForm }} />
        ))}
        <NewQuestion
          state={newQuestion}
          setState={setNewQuestion}
          addQuestion={addQuestion}
        />
      </div>
      <div className="w-2/5"></div>
    </div>
  );
};

export default CreateSurvey;
