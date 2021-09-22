import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../../Views/login";
import ResetPage from "../../Views/reset";
import { ProgressBar } from "reprogressbars";
import { useSelector } from "react-redux";

const formStyles = {
  width: "20%",

  height: "auto",
  zIndex: 1,
};

const UnprotectedRoutes = () => {
  const loading = useSelector((state) => state.loading.value);

  return (
    <Layout
      className="white_background aligned_center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Layout
        className="white_background absolute custom_shadow"
        style={formStyles}
      >
        <Layout
          className="white_background"
          style={{
            height: "5px",
            opacity: 0.7,
          }}
        >
          <ProgressBar
            color="#c12b3d"
            height="5px"
            isLoading={loading}
            useBoxShadow={false}
          />
        </Layout>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/reset" exact component={ResetPage} />
        </Switch>
      </Layout>
      <Layout className="full_height_width light_grey_background skwed_background"></Layout>
    </Layout>
  );
};

export default UnprotectedRoutes;
