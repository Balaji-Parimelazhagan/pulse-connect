import { useRoutes } from "react-router-dom";
import "/src/App.css";
import Dashboard from "./pages/Dashboard";
import CreateSurvey from "./pages/CreateSurvey";
import DisputeForm from "./pages/DisputeForm";
import Login from "./pages/Login";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/survey",
      element: <CreateSurvey />,
    },
    {
      path: "/dispute",
      element: <DisputeForm />,
    },
  ]);
  return <>{routes}</>;
};

export default App;
