import { useLocation, useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { actionItems } from "../mocks/mock";
import { useEffect, useState } from "react";
import { fetchAllSurvey } from "../services/surveyService";
import { getDisputes } from "../services/disputeService";
import { ISurvey } from "../constants/appContants";
// import useStore from "../utils/store";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { useSurveyStore, useDisputeStore } = useStore();
  const [survey, setSurvey] = useState<ISurvey[]>([]);
  const [dispute, setDispute] = useState([]);
  useEffect(() => {
    if (location.pathname !== "/dashboard") return;
    (async () => {
      const [surveys, disputes] = await Promise.all([
        fetchAllSurvey(),
        getDisputes(),
      ]);
      // useDisputeStore((state: any) => state.setValue(disputes));
      // useSurveyStore((state: any) => state.setValue(surveys));
      setSurvey(surveys as ISurvey[]);
      setDispute(disputes as any);
    })();
  }, [location.pathname]);
  return (
    <div className="flex justify-center align-center py-5 text-sm relative h-full">
      <div className="w-3/5">
        <Table
          header="Surveys"
          createLabel="Create survey"
          createAction={() => navigate("/survey", { replace: true })}
          data={survey}
        />
        <Table
          header="Action Items"
          createLabel="Create action item"
          createAction={() => navigate("/action-item", { replace: true })}
          data={actionItems}
        />
        <Table header="Disputes" data={dispute} />
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
