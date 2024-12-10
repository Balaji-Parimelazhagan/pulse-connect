import { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { GoShareAndroid } from 'react-icons/go';
import { VscGraph } from 'react-icons/vsc';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Table from '../components/Table';
import { IDispute, ISurvey } from '../constants/appContants';
import { actionItemsMock, disputesMock, surveysMock } from '../mocks/mock';
import './pages.css';
import { PiRocketLight } from 'react-icons/pi';
// import useStore from "../utils/store";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState<ISurvey[]>();
  const [disputes, setDisputes] = useState<IDispute[]>([]);
  const [actionItems, setActionItems] = useState<ISurvey[]>();
  useEffect(() => {
    setSurveys([...surveysMock]);
    setDisputes([...disputesMock]);
    setActionItems([...actionItemsMock]);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center py-5 text-sm relative h-full">
      <div className="w-3/5 space-x-10 flex justify-center">
        <Card onClick={() => navigate('/design', { replace: true })}>
          <CiEdit size={30} />
          <div className="text-xl font-bold">
            Create
            <p className="text-sm font-light">
              Create customized survey templates
            </p>
          </div>
        </Card>
        <Card onClick={() => navigate('/share', { replace: true })}>
          <PiRocketLight size={30} />
          <div className="text-xl font-bold">
            Share
            <p className="text-sm font-light">Share survey to recipients</p>
          </div>
        </Card>
        <Card
          onClick={() => navigate('/survey/analytics/:id', { replace: true })}
        >
          <VscGraph size={28} className="mt-1" />
          <div className="text-xl font-bold">
            Analyze
            <p className="text-sm font-light">
              Make decisions based on analytics
            </p>
          </div>
        </Card>
      </div>
      <div className="w-3/5">
        <Table header="Recent Surveys" data={surveys} />
        <Table
          header="Top action Items"
          createLabel="Create action item"
          createAction={() => navigate('/action-item', { replace: true })}
          data={actionItems}
        />
        <Table header="Disputes" data={disputes} />
      </div>
      <div className=" absolute flex items-center top-0 left-0 -z-10">
        <img src="src/assets/logo.png" className="h-16" />{' '}
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
