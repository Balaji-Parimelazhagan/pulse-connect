import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { questionTypes } from '../constants/appContants';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

const CreateSurvey = () => {
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    type: questionTypes.text,
    isRequired: false,
  });
  const questions = Object.keys(questionTypes).map((q) => ({
    label: q,
    value: q,
  }));
  const [isInteractiveMode, setIsInteractiveMode] = useState(false);
  return (
    <div className="mx-auto my-10 w-4/5 flex flex-col items-center">
      <div className="flex gap-2 items-center ">
        <label className="font-bold text-xl">Interactive mode</label>
        <InputSwitch
          checked={isInteractiveMode}
          onChange={(e) => setIsInteractiveMode(e.value)}
        />
      </div>
      <div className="flex w-full">
        <div className="w-full">
          <div className="border flex items-start">
            <InputTextarea
              placeholder="Unititled question"
              className="w-3/6 p-1.5 text-sm"
              value={newQuestion?.title}
            />
            <Dropdown
              className="py-1 px-0.5 min-w-20 text-center"
              placeholder={newQuestion?.type}
              value={newQuestion?.type}
              options={questions}
              onChange={(e) =>
                setNewQuestion((prev) => ({ ...prev, type: e.value }))
              }
            />
            <MultiStateCheckbox value={newQuestion.isRequired} />
            <IoMdAdd color="green" className="my-3" size={24} />
          </div>
        </div>
      </div>
      <div className="w-2/5"></div>
    </div>
  );
};

export default CreateSurvey;
