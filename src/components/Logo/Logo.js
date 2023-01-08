import styled from "styled-components";

export default function Logo() {
  return (
    <LogoBox>
      <Title>linkr</Title>
      <Subtitle>save, share and discover the best links on the web</Subtitle>
    </LogoBox>
  );
}

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
const Title = styled.h1`
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
