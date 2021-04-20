import styled from "styled-components";
import {
  CardHeader as CardHeaderBase,
  CardContent as CardContentBase,
  Card as CardBase,
  CardMedia as CardMediaBase,
  CardActions,
} from "@material-ui/core";

export const SkillList = styled.ul`
  list-style: none;
`;

export const Card = styled(CardBase)`
  width: 12rem;
`;

export const CardHeader = styled(CardHeaderBase)``;

export const CardMedia = styled(CardMediaBase)`
  height: 12rem;
  width: 100%;
`;

export const CardContent = styled(CardContentBase)``;

export const CardFooter = styled(CardActions)``;
