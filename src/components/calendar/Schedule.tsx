import { styled } from "@mui/material/styles";

type Props = {
  title: string;
};

export const Schedule = ({ title }: Props) => {
  return <SSchedule>{title}</SSchedule>;
};

const SSchedule = styled("li")`
  background-color: darkseagreen;
  color: #fff;
  margin-bottom: 0.2rem;
  width: fit-content;
`;
