import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../components/Context/context";
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
      <LogoBox>
        <Logo>linkr</Logo>
        <Subtitle>save, share and discover the best links on the web</Subtitle>
      </LogoBox>
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
const LogoBox = styled.div`
  background-color: #151515;
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: flex-start;
  justify-content: center;
`;
const Logo = styled.h1`
  font-family: "Passion One", cursive;
  font-weight: 700;
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;
`;
const Subtitle = styled.h3`
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  max-width: 442px;
  margin-right: 30px;
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
