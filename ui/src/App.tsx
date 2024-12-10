import { useRoutes } from "react-router-dom";
import CreateSurvey from "./pages/CreateSurvey";
import Dashboard from "./pages/Dashboard";
import DisputeLanding from "./pages/DisputeLanding";
import FillSurvey from "./pages/FillSurvey";
import Login from "./pages/Login";
import "/src/App.css";
import AnonymousChat from "./pages/AnonymousChat";
import SurveyDetail from "./pages/SurveyDetail";
import SurveyResponse from "./pages/SurveyResponse";
import { TrackDispute } from "./pages/TrackDispute";

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
      path: "/design",
      element: <CreateSurvey />,
    },
    {
      path: "/dispute",
      element: <DisputeLanding />,
    },
    {
      path: "/dispute/:id",
      element: <TrackDispute />,
    },
    {
      path: "/dispute/:id/chat",
      element: <AnonymousChat />,
    },
    {
      path: "/dispute/:id/track",
      element: <AnonymousChat />,
    },
    {
      path: "/survey/analytics/:id",
      element: <SurveyDetail />,
    },
    {
      path: "/survey/:id",
      element: <FillSurvey />,
    },
    {
      path: "/survey/:id/response",
      element: <SurveyResponse />,
    },
  ]);
  return <>{routes}</>;
};

export default App;
