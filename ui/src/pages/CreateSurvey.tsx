import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import NewQuestion from '../components/NewQuestion';
import { IQuestion, ISurvey, questionTypes } from '../constants/appContants';
import { InputTextarea } from 'primereact/inputtextarea';
import Question from '../components/Question';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { saveSurvey } from '../services/surveyService';

const CreateSurvey = () => {
  const initialValues = {
    title: '',
    description: '',
    questions: [],
    emails: [],
  };

  const surveyForm = useFormik<ISurvey>({
    initialValues,
    onSubmit: (values) => {
      console.log('form', values);
      saveSurvey(values);
      alert('Survey saved successfully!');
    },
  });

  const addQuestion = (question: IQuestion) => {
    question.id = Date.now().toString();
    surveyForm.setFieldValue('questions', [
      ...surveyForm.values.questions,
      question,
    ]);
  };

  const [newQuestion, setNewQuestion] = useState<IQuestion>({
    id: '',
    title: '',
    type: questionTypes.shortText,
    answer: '',
    isRequired: false,
  });
  const [isInteractiveMode, setIsInteractiveMode] = useState(false);
  return (
    <div className="relative h-full w-full mx-auto py-10 space-y-4 flex flex-col items-center">
      <div className="flex items-center">
        <label className="font-bold text-xl">Interactive mode</label>
        <InputSwitch
          checked={isInteractiveMode}
          onChange={(e) => setIsInteractiveMode(e.value)}
        />
      </div>
      <div className="flex flex-col items-center">
        <InputText
          placeholder="Unititled Survey"
          className="w-3/6 p-1.5 border font-bold text-center rounded-md"
          onChange={(e) => surveyForm.setFieldValue('title', e?.target?.value)}
        />
        <InputTextarea
          placeholder="Survey Description"
          className="w-4/6 p-1.5 pt-2 border font-semibold text-center rounded-md"
          onChange={(e) =>
            surveyForm.setFieldValue('description', e?.target?.value)
          }
        />
      </div>
      <div className="flex flex-col w-3/5 bg-white max-h-[70%] overflow-y-auto">
        {surveyForm?.values?.questions?.map((question, i) => (
          <Question key={question.id} {...{ ...question, index: i + 1 }} />
        ))}
        <NewQuestion
          state={newQuestion}
          setState={setNewQuestion}
          addQuestion={addQuestion}
        />
      </div>
      <div className="w-3/5 flex justify-center">
        <form onSubmit={surveyForm.handleSubmit}>
          <Button className="border-2 border-blue-500 text-blue-500 font-bold px-3 py-1.5 rounded-r-full rounded-l-full">
            Save
          </Button>
        </form>
      </div>
      <img
        src="src/assets/3.jpg"
        className="h-64 absolute bottom-5 left-0 -z-10"
      />
      <img
        src="src/assets/4.jpg"
        className="h-64 absolute bottom-5 right-0 -z-10"
      />
    </div>
  );
};

export default CreateSurvey;
