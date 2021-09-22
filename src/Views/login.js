import { Layout, Typography } from "antd";
import Form from "../components/form";
import "../Styles/utils.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../Redux/Actions/loading";

const { Text, Title } = Typography;
const loginInputs = [
  {
    label: "Email",
    name: "email",
    placeholder: "Email",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Enter password",
    type: "password",
  },
];

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleLoading(false));
    }, 500);
  }, [dispatch]);

  return (
    <Layout className="white_background" style={{ padding: "30px" }}>
      <Layout
        className="white_background"
        style={{ width: "10%", marginBottom: "20px" }}
      >
        <img className="custom_image" alt="logo" src="/logos/red_icon.png" />
      </Layout>
      <Title level={3} className="header_text">
        Organizer login
      </Title>
      <Text className="grey_color">Use your company email to login</Text>
      <Layout className="white_background" style={{ marginTop: "50px" }}>
        <Form inputs={loginInputs} action="Login" />
        <Text
          className="grey_color"
          style={{ textAlign: "center", margin: "30px 0px 0px" }}
        >
          Forgot password?{" "}
          <Link
            onClick={() => dispatch(toggleLoading(true))}
            to="/reset"
            className="red_color semi_bold_text "
          >
            Reset
          </Link>
        </Text>
      </Layout>
    </Layout>
  );
};
export default Login;
