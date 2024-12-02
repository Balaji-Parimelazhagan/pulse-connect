import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { InputTextarea } from 'primereact/inputtextarea';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { IQuestion, questionTypes } from '../constants/appContants';
import { Dispatch, SetStateAction } from 'react';

const state = ({
  state,
  setState,
  addQuestion,
}: {
  state: IQuestion;
  setState: Dispatch<SetStateAction<IQuestion>>;
  addQuestion: (q: IQuestion) => void;
}) => {
  const questions = Object.keys(questionTypes).map((q) => ({
    label: q,
    value: q,
  }));
  return (
    <div className="w-full">
      <div className="border p-2 flex items-start space-x-2">
        <InputTextarea
          placeholder="Unititled question"
          className="w-3/6 p-1.5 border-b rounded-md"
          value={state?.title}
          onChange={(e) =>
            setState((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <Dropdown
          className="py-0 px-0.5 min-w-20 my-2 text-center border rounded-r-full rounded-l-full"
          placeholder={state?.type}
          value={state?.type}
          options={questions}
          onChange={(e) => setState((prev) => ({ ...prev, type: e.value }))}
        />
        <div className="flex my-2 border py-1 px-2 rounded-md gap-2 items-center">
          <label>Required</label>
          <InputSwitch
            checked={state?.isRequired}
            onChange={(e) =>
              setState((prev) => ({ ...prev, isRequired: e.value }))
            }
          />
        </div>
        <div
          onClick={() => addQuestion(state)}
          className="flex my-2 items-center border py-0 px-4 rounded-r-full rounded-l-full cursor-pointer font-bold text-cyan-700 bg-cyan-100"
        >
          <IoMdAdd color="green" className="my-2 mx-1" size={20} />
          Add
        </div>
        <div className="my-2 border px-2 rounded-r-full rounded-l-full cursor-pointer  bg-red-100">
          <FaRegTrashAlt color="red" className="my-2 mx-1" size={20} />
        </div>
      </div>
    </div>
  );
};

export default state;
