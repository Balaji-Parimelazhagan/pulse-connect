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
import Card from '../components/Card';
import { WiStars } from 'react-icons/wi';
import { CiEdit } from 'react-icons/ci';
import { ImInsertTemplate } from 'react-icons/im';
import { PiRocketLight } from 'react-icons/pi';
import { Carousel } from 'primereact/carousel';

const CreateSurvey = () => {
  const [createMode, setCreateMode] = useState('scratch');
  return (
    <div className="pt-[2%] h-[85%]">
      <div className="w-3/5 mx-auto space-x-10 flex justify-center">
        <Card onClick={() => setCreateMode('scratch')}>
          <CiEdit size={30} />
          <div className="text-xl font-bold">
            Build from scratch
            <p className="text-sm font-light">
              create your own customized survey
            </p>
          </div>
        </Card>
        <Card onClick={() => setCreateMode('template')}>
          <ImInsertTemplate size={26} />
          <div className="text-xl font-bold">
            Quick start with template
            <p className="text-sm font-light">Share survey to recipients</p>
          </div>
        </Card>
        <Card onClick={() => setCreateMode('ai')}>
          <WiStars size={28} />
          <div className="text-xl font-bold -mt-2">
            Build with Ai
            <p className="text-sm font-light">
              Generate a survey based on your goals
            </p>
          </div>
        </Card>
      </div>
      {createMode === 'scratch' && <BuildFromScratch />}
      {createMode === 'template' && <BuildFromScratch />}
      {createMode === 'ai' && <BuildFromScratch />}
    </div>
  );
};

const BuildFromScratch = () => {
  const initialValues = {
    title: 'Snacks Feedback',
    description: `We want to make your snack experience more delightful! Share your thoughts and preferences about the snacks provided. Your feedback will help us improve variety, quality, and overall satisfaction. It only takes a few minutes to make a big difference`,
    questions: [
      {
        id: '1t252',
        title: `How would you rate your experience with the current vendor in
                terms of package, and taste on a scale of 1 to 5?`,
        type: 'emoji',
      },
      {
        id: '16786852',
        title: `Do you have any suggestions for improving the snacks?`,
        type: 'rating',
      },
      {
        id: '167576552',
        title: `How satisfied are you with the overall quality of the snacks?
                (Scale: 1-4 or Very Unsatisfied to Very Satisfied)`,
        type: 'teaxtarea',
      },
    ],
    emails: [],
  };

  const surveyForm = useFormik<ISurvey>({
    initialValues,
    onSubmit: (values) => {
      console.log('form', values);
      saveSurvey(values);
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
  return (
    <div className="relative h-full w-full mx-auto py-10 space-y-4 flex flex-col items-center">
      <div className="w-1/2">
        <div className="flex flex-col w-full space-y-5 items-start">
          <InputText
            placeholder="Unititled Survey"
            className="w-3/6 text-4xl p-1.5 border-b font-semibold"
            value={surveyForm.values.title}
            onChange={(e) =>
              surveyForm.setFieldValue('title', e?.target?.value)
            }
          />
          <InputTextarea
            placeholder="Survey Description"
            className="w-full p-1.5 text-xl pt-2 text-start border-b font-semibold"
            defaultValue={surveyForm.values.description}
            rows={3}
            onChange={(e) =>
              surveyForm.setFieldValue('description', e?.target?.value)
            }
          />
        </div>
        <div className="w-full flex flex-col bg-white max-h-[70%] items-start overflow-y-auto">
          {surveyForm?.values?.questions?.map((question, i) => (
            <Question key={question.id} {...{ ...question, index: i + 1 }} />
          ))}

          {/* <Carousel
            className="w-3/4"
            value={surveyForm?.values?.questions}
            numVisible={1}
            itemTemplate={question}
          /> */}
          <NewQuestion
            state={newQuestion}
            setState={setNewQuestion}
            addQuestion={addQuestion}
          />
        </div>
        <div className="w-3/5 mt-5 flex justify-end">
          <form onSubmit={surveyForm.handleSubmit}>
            <Button className="border-2 border-blue-500 text-blue-500 font-semibold px-3 py-1.5 rounded-r-full rounded-l-full">
              Save
            </Button>
            <Button className="border-2 border-blue-500 text-blue-500 ml-2 font-semibold px-3 py-1.5 rounded-r-full rounded-l-full">
              Share
              <PiRocketLight className="font-bold" size={20} />
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
    </div>
  );
};

export default CreateSurvey;
