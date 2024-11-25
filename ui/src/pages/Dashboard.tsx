import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';
import { actionItems, disputes, surveys } from '../mocks/mock';
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center align-center py-5 text-sm">
      <div className="w-3/5">
        <Table
          header="Surveys"
          createLabel="Create survey"
          createAction={() => navigate('/survey', { replace: true })}
          data={surveys}
        />
        <Table
          header="Action Items"
          createLabel="Create action item"
          createAction={() => navigate('/action-item', { replace: true })}
          data={actionItems}
        />
        <Table header="Disputes" data={disputes} />
      </div>
    </div>
  );
};

export default Dashboard;
