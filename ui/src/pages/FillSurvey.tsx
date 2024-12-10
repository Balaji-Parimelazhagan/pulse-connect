import { InputSwitch } from 'primereact/inputswitch';
import { useEffect, useState } from 'react';
import Question from '../components/Question';
import { getSurvey } from '../services/surveyService';
import { ISurvey } from '../constants/appContants';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';

const FillSurvey = () => {
  const { id } = useParams();
  const [survey, setSurvey] = useState<ISurvey | null>(null);
  const [isInteractiveMode, setIsInteractiveMode] = useState(false);

  const questions = [
    {
      id: 1733216784355,
      title: 'What improvements would you like to see in the workplace?',
      type: 'short Text',
      answer: '',
      isRequired: false,
    },
    {
      id: 1733216798497,
      title:
        'What additional tools or support would help you be more productive?\\n',
      type: 'short Text',
      answer: '',
      isRequired: false,
    },
    {
      id: 1733216816169,
      title: 'What suggestions do you have for improving communication?',
      type: 'short Text',
      answer: '',
      isRequired: true,
    },
  ];

  useEffect(() => {
    const fetchSurvey = async () => {
      const _survey = await getSurvey(id || '');
      setSurvey(_survey);
    };
    fetchSurvey();
  }, []);
  return (
    <div className="relative">
      {!!survey ? (
        <div className="relative mx-auto my-10 w-4/5 space-y-4 flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <label className="font-bold text-xl">Interactive mode</label>
            <InputSwitch
              checked={isInteractiveMode}
              onChange={(e) => setIsInteractiveMode(e.value)}
            />
          </div>
          <div className="flex flex-col w-full gap-2 items-center">
            <div className="w-3/6 p-1.5 border font-bold text-center rounded-md min-w-96">
              {survey?.title}
            </div>
            <div className="w-4/6 p-1.5 pt-2 border font-semibold text-center rounded-md min-w-96">
              {survey?.description}
            </div>
          </div>
          <div className="flex flex-col w-3/5 bg-white">
            {questions?.map((question, index) => (
              <Question key={question.id} {...{ ...question, index }} />
            ))}
          </div>
          <div className="w-2/5 flex justify-center">
            <Button
              className="border text-blue-500 text-lg border-blue-500 rounded-l-full rounded-r-full px-2.5 py-1.5"
              label="Submit"
            ></Button>
          </div>
          <img
            src="/src/assets/3.jpg"
            alt="Background"
            className="h-64 absolute -bottom-96 -right-24 -z-10"
          />
          <img
            src="/src/assets/4.jpg"
            alt="Background"
            className="h-64 absolute -bottom-96 -left-40 -z-10"
          />
        </div>
      ) : (
        <div className="w-full h-full absolute top-0 left-0 bg-white opacity-5">
          <img src="/src/assets/logo.png" alt="Loading..." className="w-64" />
        </div>
      )}
    </div>
  );
};

export default FillSurvey;
