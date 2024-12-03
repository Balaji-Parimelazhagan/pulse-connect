import { useRoutes } from 'react-router-dom';
import CreateSurvey from './pages/CreateSurvey';
import Dashboard from './pages/Dashboard';
import DisputeLanding from './pages/DisputeLanding';
import FillSurvey from './pages/FillSurvey';
import Login from './pages/Login';
import '/src/App.css';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/survey',
      element: <CreateSurvey />,
    },
    {
      path: '/dispute',
      element: <DisputeLanding />,
    },
    {
      path: '/survey/:id',
      element: <FillSurvey />,
    },
  ]);
  return <>{routes}</>;
};

export default App;
