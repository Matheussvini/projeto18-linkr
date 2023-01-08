import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../components/Context/context";
import { ThreeDots } from "react-loader-spinner";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function login(e) {
    e.preventDefault();
    const { checked } = e.target[3];
    setDisabled(true);

    axios
      .post(`${BASE_URL}/`, form)
      .then((res) => {
        setUser({ ...res.data });
        const localUser = { ...res.data };
        const localUserSerializado = JSON.stringify(localUser);
        checked && localStorage.setItem("localUser", localUserSerializado);
        navigate("/timeline");
      })
      .catch((err) => {
        console.log(err)
        setDisabled(false);
        err.response.data.details
          ? alert(err.response.data.details[0])
          : alert(err.response.data.message);
      });
  }

  return (
    <Form onSubmit={login}>
      <input
        name="email"
        type="email"
        placeholder="email"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleForm}
        required
        disabled={disabled}
      />
      <FormButton>
        {disabled ? (
          <ThreeDots
            height="45px"
            radius="9"
            color="#FFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          "Log In"
        )}
      </FormButton>
      <CheckBox>
        <CheckInput
          type="checkbox"
          name="conected"
          value={true}
          disabled={disabled}
        />
        <label htmlFor="conected">Mantenha-se conectado</label>
      </CheckBox>
    </Form>
  );
}
const Form = styled.form`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormButton = styled.button`
    justify-content: center;
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
`;
const CheckInput = styled.input`
  width: 20px;
  margin-right: 20px;
  margin-top: 12px;
  cursor: pointer;
`;
