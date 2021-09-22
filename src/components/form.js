import { Input, Typography, Button } from "antd";
import { useSelector } from "react-redux";

const { Text } = Typography;

const InputContainer = ({ children, label }) => {
  return (
    <div className="custom_input">
      <Text className="semi_bold_text" style={{ fontSize: "0.8rem" }}>
        {label}
      </Text>
      {children}
    </div>
  );
};

const RenderForm = ({ input }) => {
  switch (input.type) {
    case "password":
      return (
        <InputContainer label={input.label}>
          <Input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
          />
        </InputContainer>
      );
    default:
      return (
        <InputContainer label={input.label}>
          <Input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
          />
        </InputContainer>
      );
  }
};

const Form = ({ inputs, action }) => {
  const loading = useSelector((state) => state.loading.value);
  return (
    <>
      {inputs.map((input, index) => (
        <RenderForm key={index} input={input} />
      ))}
      <Button
        disabled={loading}
        className="red_background white_color custom_button"
      >
        {action}
      </Button>
    </>
  );
};

export default Form;
