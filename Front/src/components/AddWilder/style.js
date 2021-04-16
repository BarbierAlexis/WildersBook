import styled, { keyframes } from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const colors = {
  primary: "#f76c6c",
  focus: {
    h: 45,
    s: "100%",
    l: "42%",
  },
};

export const Form = styled.form`
  display: grid;
  place-content: center;
  grid-gap: 0.5rem;
  background-color: #e9f2fd;
  padding: 1rem;
  width: 80vw;
`;

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1;
`;

const focus = `
:focus {
    border-color: hsl(${colors.focus.h}, ${colors.focus.s}, ${colors.focus.l});
    box-shadow: 0 0 0 3px
      hsla(
        ${colors.focus.h},
        ${colors.focus.s},
        calc(${colors.focus.l} + 40%),
        0.8
      );
    outline: 3px solid transparent;
  }`;

export const Input = styled(TextField)`
  width: 18rem;
  margin-bottom: 13rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const NewButton = styled(Button)`
  width: 100%;
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
