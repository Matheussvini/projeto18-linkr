import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo/Logo.js";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <Container>
      <Logo />
      <RegisterBox>
        <SignUpForm />
        <Link to="/">
          <Text>Switch back to log in</Text>
        </Link>
      </RegisterBox>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-decoration: underline;
  color: #fff;
  margin-top: 22px;
`;
const RegisterBox = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
