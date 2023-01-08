import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function CreateUserForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    pic_url: "",
  });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function registration(e) {
    e.preventDefault();
    setDisabled(true);

    axios
      .post(`${BASE_URL}/sign-up`, form)
      .then((res) => {
        alert(res.data);
        navigate("/");
      })
      .catch((err) => {
        setDisabled(false);
        err.response.data.details
          ? alert(err.response.data.details[0])
          : alert(err.response.data.message);
      });
  }

  return (
    <Form onSubmit={registration}>
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

      <input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleForm}
        required
        disabled={disabled}
      />
      <input
        name="pic_url"
        type="text"
        placeholder="picture url"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <FormButton disabled={disabled}>
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
          "Sign Up"
        )}
      </FormButton>
    </Form>
  );
}

const Form = styled.form`
  max-width: 90%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormButton = styled.button`
  justify-content: center;
`;
