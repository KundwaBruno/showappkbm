import { Switch, Route } from "react-router-dom";
import HomePage from "../../Views/home";

const ProtectedRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};

export default ProtectedRoutes;
