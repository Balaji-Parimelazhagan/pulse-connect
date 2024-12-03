import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { actionItems } from "../mocks/mock";
import { useEffect } from "react";
import { fetchAllSurvey } from "../services/surveyService";
import { getDisputes } from "../services/disputeService";
import useStore from "../utils/store";

const Dashboard = () => {
  const navigate = useNavigate();
  const { useSurveyStore, useDisputeStore } = useStore();
  useEffect(() => {
    (async () => {
      const surveys = await fetchAllSurvey();
      const disputes = await getDisputes();
      useDisputeStore((state: any) => state.setValue(disputes));
      useSurveyStore((state: any) => state.setValue(surveys));
    })();
  }, []);
  return (
    <div className="flex justify-center align-center py-5 text-sm relative h-full">
      <div className="w-3/5">
        <Table
          header="Surveys"
          createLabel="Create survey"
          createAction={() => navigate("/survey", { replace: true })}
          data={useSurveyStore((state: any) => state.value)}
        />
        <Table
          header="Action Items"
          createLabel="Create action item"
          createAction={() => navigate("/action-item", { replace: true })}
          data={actionItems}
        />
        <Table
          header="Disputes"
          data={useDisputeStore((state: any) => state.value)}
        />
      </div>
      <div className=" absolute flex items-center top-0 left-0 -z-10">
        <img src="src/assets/logo.png" className="h-16" />{" "}
        <div className="text-xl font-bold">Pulse Connect</div>
      </div>
      <img
        src="src/assets/1.jpg"
        className="h-96 absolute bottom-0 left-0 -z-10"
      />
      <img
        src="src/assets/5.png"
        className="h-96 absolute bottom-0 right-0 -z-10"
      />
    </div>
  );
};

export default Dashboard;
