import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Chart } from "primereact/chart";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { TabPanel, TabView } from "primereact/tabview";
import { useState } from "react";
import { GrDocumentText } from "react-icons/gr";

const SurveyDetail = () => {
  const countries = [{ name: "Snack Feedback" }];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="flex flex-col items-center mt-3">
      <div className="border w-1/4 ">
        <Dropdown
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.value)}
          options={countries}
          optionLabel="name"
          placeholder="Select a survey"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="card  w-3/4 mx-auto">
        <div className=" mt-10">
          <Track />
          <QuestionCarousel />
          {/* <TabView>
            <TabPanel header="Track"></TabPanel>
            <TabPanel header="Responses">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </TabPanel>
            <TabPanel header="Action items">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
          </TabView> */}
        </div>
      </div>
    </div>
  );
};

const Track = () => {
  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
  };
  const data = {
    labels: ["Pending", "Opened", "Responded"],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: ["#32AD5B", "#FBC760", "#D9534F"],
        hoverBackgroundColor: [],
      },
    ],
  };
  return (
    <div className="border  h-full">
      <div className="flex rounded-lg p-5">
        <div className="w-1/4">
          <div className="flex justify-center items-center p-5">
            <Chart
              type="doughnut"
              data={data}
              options={options}
              className="w-full md:w-30rem"
            />
          </div>
        </div>
        <div className="w-3/4 border-l flex flex-col gap-10">
          <div className="flex rounded-md p-5 border-b">
            <div className="w-1/3 text-center border-r">
              <p>Total</p>
              <p className="font-light text-2xl">32</p>
            </div>
            <div className="w-1/3 text-center border-r">
              <p>Opened</p>
              <p className="font-light text-2xl">23</p>
            </div>
            <div className="w-1/3 text-center border-r">
              <p>Responed</p>
              <p className="font-light text-2xl">20</p>
            </div>
            <div className="w-1/3 text-center">
              <p>Avg estimated time</p>
              <p className="font-light text-2xl">23s</p>
            </div>
          </div>

          <div className="m-5">
            <div className="flex justify-between items-start">
              <p className="text-2xl pb-8 font-semibold">Survey Details</p>
              {/* <Button
                label="View Details"
                className="border border-blue-500 w-36 h-10"
              /> */}
              <Button
                label="View Action Items"
                className="border-2 border-blue-500 text-blue-500 rounded-r-full rounded-l-full p-1 px-2"
                icon={
                  <div className="mr-2">
                    <GrDocumentText />
                  </div>
                }
              />
            </div>

            <div className="flex rounded-md p-5 ">
              <div className="w-1/3 text-center border-r">
                <p className="text-xl">Created By</p>
                <p className="font-light text-xl">Balaji</p>
              </div>
              <div className="w-1/3 text-center border-r">
                <p className="text-xl">Created At</p>
                <p className="font-light text-xl">10 / 12 / 2024</p>
              </div>
              <div className="w-1/3 text-center border-r">
                <p className="text-xl">Status</p>
                <p className="text-xl text-green-700 font-bold">OPEN</p>
              </div>
              {/* <div className="w-1/3 text-center">
                <p>Avg estimated time</p>
                <p className="font-light text-2xl">23s</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const surveyQuestions = [
  {
    label: "How would you rate your work environment?",
    data: [72, 85, 94, 66],
  },
  {
    label: "Do you feel that you have an appropriate work-life balance?",
    data: [54, 89, 61, 72],
  },
  {
    label:
      "How satisfied are you with the remote work options available at the company?",
    data: [77, 95, 80, 54],
  },
  {
    label: "How effective do you find team collaboration within your team?",
    data: [66, 59, 70, 74],
  },
  {
    label:
      "Are you satisfied with the training and development opportunities provided by the company?",
    data: [61, 72, 85, 91],
  },
  {
    label:
      "How would you rate the communication between management and employees?",
    data: [80, 58, 74, 67],
  },
  {
    label:
      "Do you feel there are sufficient career growth opportunities within the company?",
    data: [92, 73, 64, 77],
  },
  {
    label: "How would you describe the company culture?",
    data: [84, 90, 55, 78],
  },
  {
    label:
      "Do you feel that your efforts and achievements are recognized by the company?",
    data: [69, 66, 95, 88],
  },
  {
    label:
      "Are you provided with the necessary tools and resources to perform your job effectively?",
    data: [72, 81, 90, 66],
  },
  {
    label:
      "How supportive is your manager in helping you achieve your work goals?",
    data: [70, 54, 77, 82],
  },
  {
    label:
      "Overall, how satisfied are you with your current role at the company?",
    data: [83, 58, 71, 74],
  },
  {
    label: "Do you feel that your feedback is valued by the company?",
    data: [59, 73, 80, 85],
  },
  {
    label: "Do you see yourself working at the company in the next two years?",
    data: [61, 72, 79, 85],
  },
  {
    label:
      "Does the company provide sufficient support for your health and well-being?",
    data: [55, 88, 77, 72],
  },
].map(({ data, label }) => {
  return {
    questionLabel: label,
    labels: ["😍", "🙂", "😏", "🤮"],
    datasets: [
      {
        label: "No of votes",
        backgroundColor: "pink",
        borderColor: "black",
        data,
      },
    ],
  };
});

const originalData = {
  labels: ["😍", "🙂", "😏", "🤮"],
  datasets: [
    {
      label: "No of votes",
      backgroundColor: "pink",
      borderColor: "black",
      data: [65, 59, 80, 81],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
    legend: {
      labels: {
        fontColor: "black",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "black",
        font: {
          weight: 500,
          size: "24px",
        },
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      ticks: {
        color: "black",
      },
      grid: {
        // color: "yellow",
        drawBorder: false,
      },
    },
  },
};

const question: React.FC<{ label: string; data: Number[] }> = (question) => {
  console.log(question);
  return (
    <div className="m-10">
      <p className="text-2xl mb-6">{question.questionLabel}</p>
      <div className="flex text-4xl gap-10">
        <p>{`😍`}</p>
        <p>{`🙂`}</p>
        <p>{`😏`}</p>
        <p>{`🤮`}</p>
      </div>
      <Chart className="mt-10" type="bar" data={question} options={options} />
    </div>
  );
};

const QuestionCarousel = () => {
  return (
    <div className="mt-4 border flex items-center justify-center p-2">
      <Carousel
        className="w-3/4"
        value={surveyQuestions}
        numVisible={1}
        itemTemplate={question}
      />
    </div>
  );
};

export default SurveyDetail;
