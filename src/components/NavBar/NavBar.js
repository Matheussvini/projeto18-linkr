import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../Context/context";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

export default function NavBar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [arrow, setArrow] = useState(false);
  const [search, setSearch] = useState("");

  function logout() {
    const confirmation = window.confirm("Deseja realmente sair?");
    if (confirmation) {
      localStorage.clear();
      navigate("/");
    }
  }
  function handleInput(e) {
    const { name, value } = e.target;
    setSearch(value);
  }

  return (
    <Container>
      <Title>linkr</Title>
      <SearchBox>
        <SearchBar
          type="text"
          name="search"
          value={search}
          onChange={handleInput}
          required
          placeholder="Search for people"
        ></SearchBar>
        <Icon>
          <AiOutlineSearch />
        </Icon>
      </SearchBox>
      <Box onClick={() => setArrow(!arrow)}>
        <Arrow>{!arrow ? <IoIosArrowDown /> : <IoIosArrowUp />}</Arrow>

        <UserImage src={user.pic_url} alt="User profile picture" />
        <Logout onClick={logout} show={arrow}>
          Logout
        </Logout>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 40px);
  height: 72px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #151515;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.h1`
  font-family: "Passion One", cursive;
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
`;
const Logout = styled.div`
  background-color: #171717;
  position: fixed;
  right: 0;
  top: 72px;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.show ? "flex" : "none")};
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  width: 133px;
  height: 47px;
  border-radius: 0 0 0 20px;
  cursor: pointer;
  &:hover {
    opacity: 60%;
  }
`;
const Arrow = styled.p`
  font-size: 25px;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const SearchBar = styled.input`
  width: 563px;
  height: 45px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  ::placeholder {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #c6c6c6;
  }
`;
const Icon = styled.p`
  font-size: 25px;
  color: #c6c6c6;
  position: absolute;
  right: 15px;
`;
const UserImage = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 26.5px;
  margin-left: 16px;
`;
