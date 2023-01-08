import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../components/Context/context";
import Logo from "../../components/Logo/Logo.js";
import LoginForm from "./LoginForm";

export default function Login() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.length !== 0) {
      navigate("/home");
    }
  }, []);

  return (
    <Container>
      <Logo />
      <LoginBox>
        <LoginForm />
        <Link to="/sign-up">
          <Text>First time? Create an account!</Text>
        </Link>
      </LoginBox>
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
`;
const LoginBox = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
