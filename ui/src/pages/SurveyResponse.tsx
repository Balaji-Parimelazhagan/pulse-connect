import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Rating } from "primereact/rating";

const SurveyResponse = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(null);
  return (
    <div className="w-2/3 mx-auto h-[75%] pt-[10%]">
      <div className="border rounded-md shadow h-full px-8 bg-white flex flex-col justify-evenly">
        <div>
          <h1 className="text-4xl font-bold">
            Snacks Feedback - <span className="font-semibold">SysAdmin</span>
          </h1>
          <p className="mt-1 text-2xl">
            Provide specific and actionable feedback on the Snacks's quality,
            usability, design, and functionality.
          </p>
        </div>
        <div className="flex justify-between items-center h-[60%]">
          <div className={`${page === 1 && value ? "hidden" : ""}`}>
            <Button
              disabled={page === 1}
              onClick={() => setPage((preValue) => preValue - 1)}
            >
              <IoIosArrowBack size={42} />
            </Button>
          </div>
          {page === 1 && !value && (
            <div className="flex flex-col">
              <div className="flex space-x-1 font-semibold text-lg">
                <p>Q1.</p>
                <p>
                  How satisfied are you with the overall quality of the snacks?
                  (Scale: 1-4 or Very Unsatisfied to Very Satisfied)
                </p>
              </div>
              <div
                className="flex space-x-3 mt-16 text-6xl justify-evenly emoji-wrapper"
                onClick={() => setPage((preValue) => preValue + 1)}
              >
                <p>{`🤮`}</p>
                <p>{`😏`}</p>
                <p>{`🙂`}</p>
                <p>{`😍`}</p>
              </div>
            </div>
          )}
          {page === 2 && (
            <div className="flex flex-col">
              <div className="flex space-x-1 font-semibold text-lg">
                <p>Q2.</p>
                <p>Do you have any suggestions for improving the snacks?</p>
              </div>
              <div className="flex space-x-3 mt-10 text-xl">
                <InputTextarea className="border-b grow" autoFocus />
              </div>
            </div>
          )}
          {page === 3 && (
            <div className="flex flex-col">
              <div className="flex space-x-1 font-semibold text-lg">
                <p>Q3.</p>
                <p>
                  How would you rate your experience with the current vendor in
                  terms of package, and taste on a scale of 1 to 5?
                </p>
              </div>
              <div className="flex space-x-3 mt-10 justify-center">
                <Rating
                  value={value}
                  onChange={(e) => {
                    setValue(e.value);
                    setPage(1);
                  }}
                  cancel={false}
                />
              </div>
            </div>
          )}
          {page === 1 && value && (
            <div className="flex space-x-4 items-center text-3xl">
              <img
                src="/src/assets/tick.png"
                alt="success"
                className="w-40 h-40"
              />
              <p className="gradient">
                Thank you for taking the time to complete our survey! Your
                valuable feedback is greatly appreciated.
              </p>
            </div>
          )}
          <div className={`${page === 1 && value ? "hidden" : ""}`}>
            <Button
              disabled={page === 3}
              onClick={() => setPage((preValue) => preValue + 1)}
            >
              <IoIosArrowForward size={42} />
            </Button>
          </div>
        </div>
        <div className="text-center">
          <a
            target="_blank"
            href="http://localhost:5000/dispute"
            className="text-center w-max mt-2 text-blue-500 text-xl"
          >
            File a Dispute
          </a>
        </div>
      </div>
      <img
        src="/src/assets/survey.jpg"
        className="h-full w-full absolute top-0 left-0 -z-10 opacity-30"
      />
    </div>
  );
};

export default SurveyResponse;
