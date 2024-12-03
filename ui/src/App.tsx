import { useRoutes } from 'react-router-dom';
import '/src/App.css';
import Dashboard from './pages/Dashboard';
import CreateSurvey from './pages/CreateSurvey';
import FillSurvey from './pages/FillSurvey';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <>login</>,
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
      path: '/survey/:id',
      element: <FillSurvey />,
    },
  ]);
  return <>{routes}</>;
};

export default App;
