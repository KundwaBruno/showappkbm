import { useDispatch } from "react-redux";
import { toggleLoading } from "../Redux/Actions/loading";
import { Layout, Typography } from "antd";
import Form from "../components/form";
import "../Styles/utils.scss";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;
const loginInputs = [
  {
    label: "Email",
    name: "email",
    placeholder: "Email",
    type: "text",
  },
];

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <Layout className="white_background" style={{ padding: "30px" }}>
      <Layout
        className="white_background"
        style={{ width: "10%", marginBottom: "20px" }}
      >
        <img className="custom_image" alt="logo" src="/logos/red_icon.png" />
      </Layout>
      <Title level={3} className="header_text">
        Forgot password
      </Title>
      <Text className="grey_color">
        Use your show app email to login and reset password.
      </Text>
      <Layout className="white_background" style={{ marginTop: "50px" }}>
        <Form inputs={loginInputs} action="Reset" />
        <Text
          className="grey_color"
          style={{ textAlign: "center", margin: "30px 0px 0px" }}
        >
          Back to
          <Link
            onClick={() => dispatch(toggleLoading(true))}
            to="/"
            className="red_color semi_bold_text "
          >
            {" "}
            Login
          </Link>
        </Text>
      </Layout>
    </Layout>
  );
};
export default Reset;
