import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

export const CustomModal = styled(Modal)`
  display: "flex";
  align-items: "center";
  justify-content: "center";
`;

export const Form = styled.form`
  display: grid;
  place-content: center;
  grid-gap: 0.5rem;
  background-color: #e9f2fd;
  padding: 1rem;
  width: 30vw;
`;

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1;
`;

export const Input = styled(TextField)`
  width: 18rem;
  margin-bottom: 13rem;
`;

export const CustomButton = styled(Button)`
  width: ${(props) => props.width};
  background-color: #f76c6c !important;
`;

const messageStyle = `
color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
`;

export const Success = styled.p`
  background-color: green;
  ${messageStyle}
`;

export const Error = styled.p`
  background-color: red;
  ${messageStyle}
`;
